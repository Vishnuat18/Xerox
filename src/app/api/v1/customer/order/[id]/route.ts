// SMART PRINT HUB - Milestone 5: Customer Public Order Tracking API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { apiSuccess, apiError } from '@/lib/api-response';
import { NotFoundError } from '@/lib/errors';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: orderId } = await params;

    const order = await db.order.findUnique({
      where: { id: orderId },
      include: {
        customer: true,
        shop: true,
        documents: true,
      },
    });

    if (!order) {
      throw new NotFoundError('Order not found or has expired');
    }

    return apiSuccess({
      order: {
        id: order.id,
        orderNumber: order.orderNumber,
        status: order.status,
        totalDocuments: order.totalDocuments,
        totalPages: order.totalPages,
        estimatedAmount: order.estimatedAmount,
        finalAmount: order.finalAmount,
        paymentStatus: (order as any).paymentStatus || 'PENDING',
        paymentMethod: (order as any).paymentMethod || null,
        paymentReference: (order as any).paymentReference || null,
        paidAt: (order as any).paidAt || null,
        customerNotes: order.customerNotes,
        rejectionReason: order.rejectionReason,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        shop: {
          name: (order as any).shop?.name || 'Metro Xerox & Multi-Print Hub',
          phone: (order as any).shop?.phone || '+91 98765 43210',
          address: (order as any).shop?.address || 'Shop #4, College Cross Road',
          upiId: (order as any).shop?.upiId || 'metroprint@upi',
        },
        customer: {
          fullName: (order as any).customer?.fullName || 'Valued Customer',
          phone: (order as any).customer?.phone || '',
        },
        documents: (order as any).documents || [],
      },
    });
  } catch (error) {
    return apiError(error);
  }
}
