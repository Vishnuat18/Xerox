// SMART PRINT HUB - Milestone 6: Shop Pricing Engine & Rate Card API
import { NextRequest } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { NotFoundError, ValidationError } from '@/lib/errors';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

const pricingRuleItemSchema = z.object({
  id: z.string().optional(),
  paperSize: z.string().min(1, 'Paper size is required'),
  bwSinglePrice: z.number().min(0, 'Price must be positive'),
  bwDoublePrice: z.number().min(0, 'Price must be positive'),
  colorSinglePrice: z.number().min(0, 'Price must be positive'),
  colorDoublePrice: z.number().min(0, 'Price must be positive'),
  isActive: z.boolean().default(true),
});

const updatePricingSchema = z.object({
  rules: z.array(pricingRuleItemSchema),
  finishing: z
    .object({
      stapleCorner: z.number().min(0),
      stapleSide: z.number().min(0),
      bindingSpiral: z.number().min(0),
      bindingHardcover: z.number().min(0),
      bindingProject: z.number().min(0),
      laminationGlossy: z.number().min(0),
      laminationMatte: z.number().min(0),
    })
    .optional(),
  bulkDiscounts: z
    .array(
      z.object({
        minPages: z.number().min(1),
        discountPercent: z.number().min(0).max(100),
      })
    )
    .optional(),
  volumeDiscountsEnabled: z.boolean().optional(),
});

export async function GET() {
  try {
    const session = await requireAuth();

    if (!session.shop?.id) {
      throw new NotFoundError('No shop associated with current account');
    }

    const shopId = session.shop.id;

    // Fetch paper size pricing rules
    const rules = await db.pricingRule.findMany({
      where: { shopId },
    });

    // Fetch finishing and bulk discount configuration
    const config = typeof db.getPricingConfig === 'function'
      ? await db.getPricingConfig(shopId)
      : {
          shopId,
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

    return apiSuccess({
      shopId,
      rules,
      finishing: config.finishing,
      bulkDiscounts: config.bulkDiscounts,
      volumeDiscountsEnabled: config.volumeDiscountsEnabled ?? true,
    });
  } catch (error) {
    return apiError(error);
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await requireAuth();

    if (!session.shop?.id) {
      throw new NotFoundError('No shop associated with current account');
    }

    const shopId = session.shop.id;
    const body = await req.json();
    const parsed = updatePricingSchema.safeParse(body);

    if (!parsed.success) {
      throw new ValidationError(parsed.error.issues[0]?.message || 'Validation failed for pricing rules', parsed.error.format());
    }

    const { rules, finishing, bulkDiscounts, volumeDiscountsEnabled } = parsed.data;

    // Update each paper size rate card
    const updatedRules = [];
    for (const rule of rules) {
      const size = rule.paperSize.toUpperCase();
      const updated = await db.pricingRule.upsert({
        where: {
          shopId_paperSize: {
            shopId,
            paperSize: size,
          },
        },
        update: {
          bwSinglePrice: rule.bwSinglePrice,
          bwDoublePrice: rule.bwDoublePrice,
          colorSinglePrice: rule.colorSinglePrice,
          colorDoublePrice: rule.colorDoublePrice,
          isActive: rule.isActive,
        },
        create: {
          shopId,
          paperSize: size,
          bwSinglePrice: rule.bwSinglePrice,
          bwDoublePrice: rule.bwDoublePrice,
          colorSinglePrice: rule.colorSinglePrice,
          colorDoublePrice: rule.colorDoublePrice,
          isActive: rule.isActive,
        },
      });
      updatedRules.push(updated);
    }

    // Update finishing and bulk discount config
    let updatedConfig = null;
    if (typeof db.updatePricingConfig === 'function') {
      updatedConfig = await db.updatePricingConfig(shopId, {
        finishing,
        bulkDiscounts,
        volumeDiscountsEnabled,
      });
    }

    // Audit log
    await db.auditLog.create({
      data: {
        shopId,
        userId: session.user.id,
        action: 'UPDATE_PRICING_RULES',
        entityType: 'PRICING',
        entityId: shopId,
        details: JSON.stringify({
          updatedCount: rules.length,
          volumeDiscountsEnabled,
        }),
      },
    });

    logger.info(`Shop ${shopId} rate cards and pricing rules updated successfully`);

    return apiSuccess({
      message: 'Rate cards and pricing rules updated successfully',
      rules: updatedRules,
      finishing: updatedConfig?.finishing ?? finishing,
      bulkDiscounts: updatedConfig?.bulkDiscounts ?? bulkDiscounts,
      volumeDiscountsEnabled: updatedConfig?.volumeDiscountsEnabled ?? volumeDiscountsEnabled,
    });
  } catch (error) {
    return apiError(error);
  }
}
