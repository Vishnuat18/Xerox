// SMART PRINT HUB - Cross-Shop Universal Customer Authentication API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { 
  createCustomerToken, 
  setCustomerCookie, 
  clearCustomerCookie, 
  getCustomerSession 
} from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { ValidationError } from '@/lib/errors';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const fullName = body.fullName?.toString().trim();
    const rawPhone = body.phone?.toString().trim();
    const email = body.email?.toString().trim() || null;

    if (!fullName || fullName.length < 2) {
      throw new ValidationError('Please enter your full name (minimum 2 characters)');
    }

    const cleanPhone = (rawPhone || '').replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      throw new ValidationError('Please enter a valid 10-digit mobile contact number');
    }

    // Upsert customer profile across the platform
    const customer = await db.customer.upsert({
      where: { phone: cleanPhone },
      update: {
        fullName,
        email: email || undefined,
      },
      create: {
        fullName,
        phone: cleanPhone,
        email,
        shopId: 'shop-metro-001',
      },
    });

    // Create 30-day cross-shop JWT token and set HTTP-only cookie
    const token = createCustomerToken({
      customerId: customer.id,
      phone: customer.phone,
      fullName: customer.fullName,
    });

    await setCustomerCookie(token);

    // Retrieve cross-shop order history for this customer
    const crossShopOrders = await db.order.findMany({
      where: { customerPhone: cleanPhone },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    logger.info(`Customer authenticated: ${customer.fullName} (${customer.phone}) - ${crossShopOrders.length} cross-shop orders found`);

    return apiSuccess({
      customer: {
        id: customer.id,
        fullName: customer.fullName,
        phone: customer.phone,
        email: customer.email,
      },
      token,
      orders: crossShopOrders,
    });
  } catch (error) {
    return apiError(error);
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getCustomerSession();
    if (!session) {
      return apiSuccess({ customer: null, orders: [] });
    }

    const cleanPhone = session.phone.replace(/[^0-9]/g, '');
    const customer = await db.customer.findFirst({
      where: { phone: cleanPhone },
    });

    const crossShopOrders = await db.order.findMany({
      where: { customerPhone: cleanPhone },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    return apiSuccess({
      customer: customer ? {
        id: customer.id,
        fullName: customer.fullName,
        phone: customer.phone,
        email: customer.email,
      } : {
        id: session.customerId,
        fullName: session.fullName,
        phone: session.phone,
        email: null,
      },
      orders: crossShopOrders,
    });
  } catch (error) {
    return apiError(error);
  }
}

export async function DELETE() {
  try {
    await clearCustomerCookie();
    return apiSuccess({ message: 'Logged out of customer session successfully' });
  } catch (error) {
    return apiError(error);
  }
}
