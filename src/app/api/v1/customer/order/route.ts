// SMART PRINT HUB - Milestone 4: Customer Order Creation with Print Specifications
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { apiSuccess, apiError } from '@/lib/api-response';
import { ValidationError, NotFoundError } from '@/lib/errors';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      shopSlug,
      customerId,
      customerPhone,
      customerName,
      documents,
      customerNotes,
    } = body;

    if (!shopSlug) {
      throw new ValidationError('Shop identifier is required');
    }
    if (!documents || !Array.isArray(documents) || documents.length === 0) {
      throw new ValidationError('At least one configured document is required');
    }

    const shop = await db.shop.findUnique({
      where: { slug: shopSlug },
      include: { pricingRules: true },
    });

    if (!shop || !shop.isActive) {
      throw new NotFoundError('Shop is currently unavailable');
    }

    const pricingRules = (shop.pricingRules && shop.pricingRules.length > 0)
      ? shop.pricingRules
      : await db.pricingRule.findMany({ where: { shopId: shop.id } });

    const pricingConfig = typeof db.getPricingConfig === 'function'
      ? await db.getPricingConfig(shop.id)
      : {
          volumeDiscountsEnabled: true,
          finishing: {
            stapleCorner: 2.0,
            stapleSide: 5.0,
            bindingSpiral: 35.0,
            bindingHardcover: 65.0,
            bindingProject: 150.0,
            laminationGlossy: 15.0,
            laminationMatte: 25.0,
          },
          bulkDiscounts: [
            { minPages: 50, discountPercent: 10 },
            { minPages: 150, discountPercent: 15 },
            { minPages: 500, discountPercent: 25 },
          ],
        };

    const rulesMap = new Map<string, any>(
      pricingRules.map((r: any) => [r.paperSize.toUpperCase(), r])
    );
    const fallbackA4 = rulesMap.get('A4') || {
      bwSinglePrice: 2.0,
      bwDoublePrice: 3.0,
      colorSinglePrice: 10.0,
      colorDoublePrice: 18.0,
    };

    // Calculate total pages and verified estimated amount
    let printSubtotal = 0;
    let finishingSubtotal = 0;
    let totalPagesCount = 0;

    const formattedDocuments = documents.map((doc: any, index: number) => {
      const pageCount = Math.max(1, parseInt(doc.detectedPageCount || '1', 10));
      const specs = doc.specs || {};
      const copies = Math.max(1, parseInt(specs.copies || '1', 10));
      const isColor = specs.color === 'COLOR';
      const isDuplex = specs.duplex === 'DUPLEX_LONG_EDGE' || specs.duplex === 'DUPLEX_SHORT_EDGE' || specs.duplex === 'DUPLEX';
      const paperSize = (specs.paperSize || 'A4').toUpperCase();

      const matchedRule = rulesMap.get(paperSize) || fallbackA4;

      let unitPrice = matchedRule.bwSinglePrice;
      if (isColor && isDuplex) unitPrice = matchedRule.colorDoublePrice / 2;
      else if (isColor && !isDuplex) unitPrice = matchedRule.colorSinglePrice;
      else if (!isColor && isDuplex) unitPrice = matchedRule.bwDoublePrice / 2;
      else unitPrice = matchedRule.bwSinglePrice;

      const docPrintTotal = unitPrice * pageCount * copies;
      printSubtotal += docPrintTotal;
      totalPagesCount += pageCount * copies;

      // Finishing add-ons
      let docFinishing = 0;
      const stapling = specs.stapling || 'NONE';
      if (stapling === 'CORNER') docFinishing += (pricingConfig.finishing?.stapleCorner || 2.0) * copies;
      else if (stapling === 'SIDE' || stapling === 'DOUBLE') docFinishing += (pricingConfig.finishing?.stapleSide || 5.0) * copies;

      const binding = specs.binding || 'NONE';
      if (binding === 'SPIRAL') docFinishing += (pricingConfig.finishing?.bindingSpiral || 35.0) * copies;
      else if (binding === 'HARDCOVER') docFinishing += (pricingConfig.finishing?.bindingHardcover || 65.0) * copies;
      else if (binding === 'PROJECT') docFinishing += (pricingConfig.finishing?.bindingProject || 150.0) * copies;

      const lamination = specs.lamination || 'NONE';
      if (lamination === 'GLOSSY') docFinishing += (pricingConfig.finishing?.laminationGlossy || 15.0) * pageCount * copies;
      else if (lamination === 'MATTE') docFinishing += (pricingConfig.finishing?.laminationMatte || 25.0) * pageCount * copies;

      finishingSubtotal += docFinishing;

      return {
        id: `doc-${Date.now()}-${index}`,
        originalFilename: doc.originalFilename || 'Document.pdf',
        storageKey: doc.storageKey || `shops/${shop.id}/uploads/file-${index}`,
        fileSizeBytes: doc.fileSizeBytes || 1024,
        mimeType: doc.mimeType || 'application/pdf',
        sha256Checksum: doc.sha256Checksum || 'checksum-verified',
        detectedPageCount: pageCount,
        specs: {
          copies,
          color: isColor ? 'COLOR' : 'BW',
          duplex: isDuplex ? 'DUPLEX_LONG_EDGE' : 'SIMPLEX',
          paperSize,
          orientation: specs.orientation || 'PORTRAIT',
          pageRange: specs.pageRange || 'ALL',
          pagesPerSheet: specs.pagesPerSheet || 1,
          collate: specs.collate !== false,
          stapling,
          binding,
          lamination,
          finishingNotes: specs.finishingNotes || '',
        },
      };
    });

    // Volume bulk discount calculation
    let bulkDiscountAmount = 0;
    if (pricingConfig.volumeDiscountsEnabled && Array.isArray(pricingConfig.bulkDiscounts)) {
      const sortedTiers = [...pricingConfig.bulkDiscounts].sort((a, b) => b.minPages - a.minPages);
      const matchedTier = sortedTiers.find((tier) => totalPagesCount >= tier.minPages);
      if (matchedTier && matchedTier.discountPercent > 0) {
        bulkDiscountAmount = (printSubtotal * matchedTier.discountPercent) / 100;
      }
    }

    const totalEstimatedAmount = Math.max(1, printSubtotal - bulkDiscountAmount + finishingSubtotal);

    // Resolve or automatically link customer in MySQL database
    let validCustomerId = customerId;
    let actualCustomerPhone = customerPhone || null;

    if (customerId) {
      const existing = await db.customer.findUnique({ where: { id: customerId } });
      if (existing) {
        validCustomerId = existing.id;
        actualCustomerPhone = existing.phone;
      } else {
        validCustomerId = null;
      }
    }

    if (!validCustomerId && customerPhone) {
      const cleanPhone = customerPhone.replace(/[^0-9]/g, '');
      if (cleanPhone) {
        const existing = await db.customer.findUnique({ where: { phone: cleanPhone } });
        if (existing) {
          validCustomerId = existing.id;
          actualCustomerPhone = existing.phone;
        } else {
          const created = await db.customer.create({
            data: {
              fullName: customerName || 'Walk-in Customer',
              phone: cleanPhone,
              shopId: shop.id,
            },
          });
          validCustomerId = created.id;
          actualCustomerPhone = created.phone;
        }
      }
    }

    if (!validCustomerId) {
      let defaultCustomer = await db.customer.findFirst({ where: { shopId: shop.id } });
      if (!defaultCustomer) {
        defaultCustomer = await db.customer.create({
          data: {
            fullName: customerName || 'Walk-in Customer',
            phone: '9876543210',
            shopId: shop.id,
          },
        });
      }
      validCustomerId = defaultCustomer.id;
      actualCustomerPhone = defaultCustomer.phone;
    }

    // Generate neat human-readable order number: SPH-YYMMDD-XXXX
    const datePrefix = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderNumber = `SPH-${datePrefix}-${randomSuffix}`;

    const newOrder = await db.order.create({
      data: {
        orderNumber,
        shopId: shop.id,
        customerId: validCustomerId,
        customerPhone: actualCustomerPhone,
        status: 'SUBMITTED',
        totalDocuments: formattedDocuments.length,
        totalPages: totalPagesCount,
        estimatedAmount: parseFloat(totalEstimatedAmount.toFixed(2)),
        customerNotes: customerNotes || null,
        documents: {
          create: formattedDocuments.map((doc) => ({
            originalFilename: doc.originalFilename,
            storageKey: doc.storageKey,
            fileSizeBytes: doc.fileSizeBytes,
            mimeType: doc.mimeType,
            sha256Checksum: doc.sha256Checksum,
            detectedPageCount: doc.detectedPageCount,
            specs: {
              create: {
                copies: doc.specs.copies,
                color: doc.specs.color,
                duplex: doc.specs.duplex,
                paperSize: doc.specs.paperSize,
                orientation: doc.specs.orientation,
                pageRange: doc.specs.pageRange,
                pagesPerSheet: doc.specs.pagesPerSheet,
                collate: doc.specs.collate,
                stapling: doc.specs.stapling,
                binding: doc.specs.binding,
                lamination: doc.specs.lamination,
                finishingNotes: doc.specs.finishingNotes || '',
              },
            },
          })),
        },
      },
      include: {
        documents: {
          include: {
            specs: true,
          },
        },
      },
    });

    logger.info(`Milestone 4: Order created ${orderNumber} for shop ${shop.name} - ₹${totalEstimatedAmount.toFixed(2)}`);

    return apiSuccess({
      order: newOrder,
    }, 201);
  } catch (error) {
    return apiError(error);
  }
}
