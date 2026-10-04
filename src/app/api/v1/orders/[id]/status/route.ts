// SMART PRINT HUB - Order Status Transition API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { UnauthorizedError, NotFoundError, ValidationError } from '@/lib/errors';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

const VALID_STATUSES = new Set([
  'SUBMITTED',
  'REVIEWING',
  'QUEUED',
  'PRINTING',
  'READY',
  'COMPLETED',
  'CANCELLED',
]);

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session || !session.shop) {
      throw new UnauthorizedError('Authentication required');
    }

    const { id: orderId } = await params;
    const body = await req.json();
    const { status, finalAmount, rejectionReason, paymentStatus, paymentMethod, paymentReference } = body;

    const existingOrder = await db.order.findUnique({
      where: { id: orderId },
    });

    if (!existingOrder) {
      throw new NotFoundError('Order not found');
    }

    if (status && !VALID_STATUSES.has(status)) {
      throw new ValidationError(`Invalid status transition: ${status}`);
    }

    const updatePayload: Record<string, any> = {};
    if (status) updatePayload.status = status;
    if (finalAmount !== undefined && finalAmount !== null) {
      updatePayload.finalAmount = parseFloat(finalAmount);
    }
    if (rejectionReason !== undefined) {
      updatePayload.rejectionReason = rejectionReason;
    }
    if (paymentStatus !== undefined) {
      updatePayload.paymentStatus = paymentStatus;
      if (paymentStatus === 'PAID') {
        updatePayload.paidAt = new Date();
      }
    }
    if (paymentMethod !== undefined) updatePayload.paymentMethod = paymentMethod;
    if (paymentReference !== undefined) updatePayload.paymentReference = paymentReference;

    const updated = await db.order.update({
      where: { id: orderId },
      data: updatePayload,
    });

    logger.info(`Order ${updated.orderNumber} updated: status=${updated.status}, finalAmount=${updated.finalAmount}, payment=${updated.paymentStatus}`);

    return apiSuccess({ order: updated });
  } catch (error) {
    return apiError(error);
  }
}
