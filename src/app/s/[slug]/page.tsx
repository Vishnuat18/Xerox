import React from 'react';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { CustomerUploadClient } from './customer-upload-client';

export const dynamic = 'force-dynamic';

export default async function CustomerShopLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const shop = await db.shop.findUnique({
    where: { slug },
    include: {
      pricingRules: true,
      printers: true,
    },
  });

  if (!shop || !shop.isActive) {
    notFound();
  }

  const config = typeof db.getPricingConfig === 'function'
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

  return (
    <CustomerUploadClient
      shop={{
        id: shop.id,
        name: shop.name,
        slug: shop.slug,
        phone: shop.phone,
        address: shop.address,
        pricingRules: (shop.pricingRules || []).map((r: any) => ({
          paperSize: r.paperSize,
          bwSinglePrice: r.bwSinglePrice,
          bwDoublePrice: r.bwDoublePrice,
          colorSinglePrice: r.colorSinglePrice,
          colorDoublePrice: r.colorDoublePrice,
        })),
        finishing: config.finishing,
        bulkDiscounts: config.volumeDiscountsEnabled ? config.bulkDiscounts : [],
        volumeDiscountsEnabled: config.volumeDiscountsEnabled ?? true,
      }}
    />
  );
}
