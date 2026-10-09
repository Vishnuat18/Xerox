import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getSession();

    if (!session || !session.shop) {
      return NextResponse.json(
        { success: false, error: { message: 'Unauthorized' } },
        { status: 401 }
      );
    }

    const orders = await db.order.findMany({
      where: { shopId: session.shop.id },
      take: 40,
      orderBy: { createdAt: 'desc' },
      include: {
        customer: true,
        documents: true,
      },
    });

    const formattedOrders = (orders || []).map((o: any) => ({
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
        storageKey: d.storageKey,
        detectedPageCount: d.detectedPageCount || 1,
        specs: d.specs,
      })),
    }));

    return NextResponse.json({
      success: true,
      data: { orders: formattedOrders },
    });
  } catch (error: any) {
    console.error('Error fetching order queue:', error);
    return NextResponse.json(
      { success: false, error: { message: error?.message || 'Internal Server Error' } },
      { status: 500 }
    );
  }
}
