// SMART PRINT HUB - Customer Multi-File Upload API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { saveUploadedFile } from '@/lib/storage';
import { apiSuccess, apiError } from '@/lib/api-response';
import { ValidationError, NotFoundError } from '@/lib/errors';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const shopSlug = formData.get('shopSlug')?.toString();
    const customerName = formData.get('customerName')?.toString().trim();
    const customerPhone = formData.get('customerPhone')?.toString().trim();
    const customerEmail = formData.get('customerEmail')?.toString().trim() || null;

    if (!shopSlug) {
      throw new ValidationError('Shop identifier is missing');
    }
    if (!customerName || customerName.length < 2) {
      throw new ValidationError('Please enter your full name (minimum 2 characters)');
    }
    if (!customerPhone || customerPhone.length < 10) {
      throw new ValidationError('Please enter a valid 10-digit mobile contact number');
    }

    const shop = await db.shop.findUnique({
      where: { slug: shopSlug },
    });

    if (!shop || !shop.isActive) {
      throw new NotFoundError('Selected print shop is currently unavailable or inactive');
    }

    // Upsert customer profile under this shop
    const customer = await db.customer.upsert({
      where: {
        id: (await db.customer.findFirst({
          where: { shopId: shop.id, phone: customerPhone },
          select: { id: true },
        }))?.id || 'new-customer-id',
      },
      update: {
        fullName: customerName,
        email: customerEmail,
      },
      create: {
        shopId: shop.id,
        phone: customerPhone,
        fullName: customerName,
        email: customerEmail,
      },
    });

    const fileEntries = formData.getAll('files') as File[];

    if (!fileEntries || fileEntries.length === 0) {
      throw new ValidationError('Please select at least one document to upload');
    }

    logger.info(`Processing ${fileEntries.length} uploaded files for customer: ${customerName} (${customerPhone}) at shop: ${shop.name}`);

    const uploadedFiles = [];
    for (const file of fileEntries) {
      if (typeof file === 'string') continue;
      const stored = await saveUploadedFile(shop.id, file);
      uploadedFiles.push({
        id: crypto.randomUUID(),
        ...stored,
      });
    }

    return apiSuccess({
      customer: {
        id: customer.id,
        fullName: customer.fullName,
        phone: customer.phone,
      },
      shop: {
        id: shop.id,
        name: shop.name,
        slug: shop.slug,
      },
      files: uploadedFiles,
    });
  } catch (error) {
    return apiError(error);
  }
}
