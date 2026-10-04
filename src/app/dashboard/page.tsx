import React from 'react';
import { redirect } from 'next/navigation';
import { OrderQueueClient } from '@/components/dashboard/OrderQueueClient';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const session = await getSession();

  if (!session || !session.shop) {
    redirect('/login');
  }

  const shop = await db.shop.findUnique({
    where: { id: session.shop.id },
    include: {
      printers: true,
      orders: {
        take: 30,
        orderBy: { createdAt: 'desc' },
        include: {
          customer: true,
          documents: true,
        },
      },
    },
  });

  if (!shop) {
    redirect('/login');
  }

  const formattedOrders = (shop.orders || []).map((o: any) => ({
    id: o.id,
    orderNumber: o.orderNumber,
    shopId: o.shopId,
    customerId: o.customerId,
    status: o.status,
    totalDocuments: o.totalDocuments,
    totalPages: o.totalPages,
    estimatedAmount: o.estimatedAmount,
    finalAmount: o.finalAmount ?? null,
    paymentStatus: o.paymentStatus || 'PENDING',
    paymentMethod: o.paymentMethod || null,
    customerNotes: o.customerNotes,
    createdAt: o.createdAt.toISOString ? o.createdAt.toISOString() : new Date(o.createdAt).toISOString(),
    customer: {
      fullName: o.customer?.fullName || 'Walk-in Customer',
      phone: o.customer?.phone || '9876543210',
    },
    documents: (o.documents || []).map((d: any) => ({
      id: d.id,
      originalFilename: d.originalFilename,
      detectedPageCount: d.detectedPageCount || 1,
      specs: d.specs,
    })),
  }));

  const formattedPrinters = (shop.printers || []).map((p: any) => ({
    id: p.id,
    displayName: p.displayName,
    status: p.status,
    supportsColor: p.supportsColor,
  }));

  return (
    <OrderQueueClient 
      initialOrders={formattedOrders} 
      printers={formattedPrinters} 
    />
  );
}
