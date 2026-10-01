// SMART PRINT HUB - Shop Profile Management API
import { NextRequest } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { ValidationError, NotFoundError } from '@/lib/errors';
import { logger } from '@/lib/logger';

const updateProfileSchema = z.object({
  name: z.string().min(3, 'Shop name must be at least 3 characters'),
  phone: z.string().min(10, 'Contact number must be at least 10 digits'),
  email: z.string().email('Please enter a valid email address'),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  pincode: z.string().optional().nullable(),
  gstNumber: z.string().optional().nullable(),
});

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await requireAuth();

    if (!session.shop?.id) {
      throw new NotFoundError('No shop associated with current account');
    }

    const shop = await db.shop.findUnique({
      where: { id: session.shop.id },
      include: {
        subscription: {
          include: { plan: true },
        },
        _count: {
          select: {
            printers: true,
            orders: true,
          },
        },
      },
    });

    if (!shop) {
      throw new NotFoundError('Shop record not found');
    }

    return apiSuccess({ shop });
  } catch (error) {
    return apiError(error);
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await requireAuth();

    if (!session.shop?.id) {
      throw new NotFoundError('No shop associated with current account');
    }

    const body = await req.json();
    const result = updateProfileSchema.safeParse(body);

    if (!result.success) {
      throw new ValidationError('Validation failed for profile updates', result.error.format());
    }

    const updatedShop = await db.shop.update({
      where: { id: session.shop.id },
      data: {
        name: result.data.name,
        phone: result.data.phone,
        email: result.data.email.toLowerCase(),
        address: result.data.address || null,
        city: result.data.city || null,
        state: result.data.state || null,
        pincode: result.data.pincode || null,
        gstNumber: result.data.gstNumber || null,
      },
    });

    logger.info(`Updated shop profile for shop: ${updatedShop.id} (${updatedShop.name}) by user ${session.user.id}`);

    // Audit log
    await db.auditLog.create({
      data: {
        shopId: updatedShop.id,
        userId: session.user.id,
        action: 'SHOP_PROFILE_UPDATED',
        entityType: 'SHOP',
        entityId: updatedShop.id,
        details: JSON.stringify(result.data),
      },
    });

    return apiSuccess({ shop: updatedShop });
  } catch (error) {
    return apiError(error);
  }
}
