// SMART PRINT HUB - Active Shops Directory & Discovery API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { apiSuccess, apiError } from '@/lib/api-response';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q')?.toLowerCase().trim() || '';

    const allShops = await db.shop.findMany();
    const activeShops = (allShops || []).filter((s: any) => s.isActive !== false);

    const filtered = query
      ? activeShops.filter((s: any) => 
          s.name?.toLowerCase().includes(query) ||
          s.slug?.toLowerCase().includes(query) ||
          s.city?.toLowerCase().includes(query) ||
          s.address?.toLowerCase().includes(query)
        )
      : activeShops;

    const formatted = await Promise.all(
      filtered.map(async (shop: any) => {
        let pricing: any = null;
        try {
          const config = typeof db.getPricingConfig === 'function' ? await db.getPricingConfig(shop.id) : null;
          const rules = (shop.pricingRules || []).filter((r: any) => r.isActive !== false);
          const a4Rule = rules.find((r: any) => r.paperSize === 'A4') || {
            bwSinglePrice: 2.0,
            bwDoublePrice: 3.0,
            colorSinglePrice: 10.0,
            colorDoublePrice: 18.0,
          };
          pricing = {
            a4BwSingle: a4Rule.bwSinglePrice,
            a4BwDouble: a4Rule.bwDoublePrice,
            a4ColorSingle: a4Rule.colorSinglePrice,
            finishing: config?.finishing || {
              stapleCorner: 2.0,
              bindingSpiral: 35.0,
              laminationGlossy: 15.0,
            },
          };
        } catch {
          pricing = {
            a4BwSingle: 2.0,
            a4BwDouble: 3.0,
            a4ColorSingle: 10.0,
          };
        }

        return {
          id: shop.id,
          name: shop.name,
          slug: shop.slug,
          phone: shop.phone,
          address: shop.address,
          city: shop.city,
          state: shop.state,
          pricing,
        };
      })
    );

    return apiSuccess({
      shops: formatted,
      total: formatted.length,
    });
  } catch (error) {
    return apiError(error);
  }
}
