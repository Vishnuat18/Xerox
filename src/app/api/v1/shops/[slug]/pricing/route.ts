// SMART PRINT HUB - Public Shop Pricing API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { apiSuccess, apiError } from '@/lib/api-response';
import { NotFoundError } from '@/lib/errors';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const shop = await db.shop.findUnique({
      where: { slug },
      include: {
        pricingRules: true,
      },
    });

    if (!shop || !shop.isActive) {
      throw new NotFoundError('Shop not found or inactive');
    }

    const config = typeof db.getPricingConfig === 'function'
      ? await db.getPricingConfig(shop.id)
      : {
          shopId: shop.id,
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
      shop: {
        id: shop.id,
        name: shop.name,
        slug: shop.slug,
      },
      rules: (shop.pricingRules || []).filter((r: any) => r.isActive !== false),
      finishing: config.finishing,
      bulkDiscounts: config.volumeDiscountsEnabled ? config.bulkDiscounts : [],
      volumeDiscountsEnabled: config.volumeDiscountsEnabled ?? true,
    });
  } catch (error) {
    return apiError(error);
  }
}
