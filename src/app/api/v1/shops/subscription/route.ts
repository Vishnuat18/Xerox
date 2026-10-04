// SMART PRINT HUB - Shop Subscription & Plan Management API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { calculateSubscriptionDetails } from '@/lib/subscription';
import { apiSuccess, apiError } from '@/lib/api-response';
import { UnauthorizedError, NotFoundError } from '@/lib/errors';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.shop) {
      throw new UnauthorizedError('Authentication required to view subscription');
    }

    const shop = await db.shop.findUnique({
      where: { id: session.shop.id },
      include: { subscription: true },
    });

    if (!shop) {
      throw new NotFoundError('Shop not found');
    }

    const subDetails = calculateSubscriptionDetails(shop.subscription);

    return apiSuccess({
      shopId: shop.id,
      shopName: shop.name,
      subscription: subDetails,
    });
  } catch (error) {
    return apiError(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.shop) {
      throw new UnauthorizedError('Authentication required to update subscription');
    }

    const body = await req.json();
    const { planId, billingCycle = 'monthly', paymentMethod = 'UPI' } = body;

    const normalizedPlanId = (planId || 'BUSINESS').toUpperCase();
    if (!['STARTER', 'BUSINESS', 'ENTERPRISE'].includes(normalizedPlanId)) {
      throw new Error('Invalid plan selected. Supported: STARTER, BUSINESS, ENTERPRISE');
    }

    const periodEnd = new Date();
    if (billingCycle === 'yearly') {
      periodEnd.setFullYear(periodEnd.getFullYear() + 1);
    } else {
      periodEnd.setMonth(periodEnd.getMonth() + 1);
    }

    // Update in database / mockDb
    const updatedSub = await db.subscription.update({
      where: { shopId: session.shop.id },
      data: {
        planId: normalizedPlanId,
        status: 'ACTIVE',
        currentPeriodStart: new Date(),
        currentPeriodEnd: periodEnd,
      },
    });

    logger.info(
      `Shop "${session.shop.name}" (${session.shop.id}) upgraded to ${normalizedPlanId} (${billingCycle}) via ${paymentMethod}`
    );

    const subDetails = calculateSubscriptionDetails(updatedSub);

    return apiSuccess({
      message: `Successfully upgraded to ${normalizedPlanId} plan!`,
      subscription: subDetails,
    });
  } catch (error) {
    return apiError(error);
  }
}
