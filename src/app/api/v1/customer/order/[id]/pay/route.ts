// SMART PRINT HUB - Customer Public Order Payment Route
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { apiSuccess, apiError } from '@/lib/api-response';
import { NotFoundError, ValidationError } from '@/lib/errors';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: orderId } = await params;
    const body = await req.json();
    const { paymentMethod, paymentReference, paidAmount } = body;

    if (!paymentMethod || !['UPI', 'DIGITAL_PAY', 'CASH'].includes(paymentMethod)) {
      throw new ValidationError('Invalid or missing payment method (UPI, DIGITAL_PAY, or CASH)');
    }

    const order = await db.order.findUnique({
      where: { id: orderId },
      include: { customer: true, shop: true },
    });

    if (!order) {
      throw new NotFoundError('Order not found');
    }

    const isCash = paymentMethod === 'CASH';
    const finalAmount = order.finalAmount ?? (paidAmount ? parseFloat(paidAmount) : order.estimatedAmount);

    const updated = await db.order.update({
      where: { id: orderId },
      data: {
        paymentStatus: isCash ? 'CASH_AT_COUNTER' : 'PAID',
        paymentMethod,
        paymentReference: paymentReference || (isCash ? 'CASH-AT-COUNTER' : `PAY-${Date.now()}`),
        paidAt: isCash ? null : new Date(),
        finalAmount,
      },
    });

    logger.info(`Payment processed for order ${updated.orderNumber}: Method=${paymentMethod}, Status=${updated.paymentStatus}, Amount=₹${finalAmount}`);

    return apiSuccess({
      order: updated,
      message: isCash 
        ? 'Cash payment recorded. Please pay at the counter during collection.' 
        : 'Payment successfully processed!',
    });
  } catch (error) {
    return apiError(error);
  }
}
