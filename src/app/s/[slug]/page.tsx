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
      }}
    />
  );
}
