// SMART PRINT HUB - Owner & Operator Login API
import { NextRequest } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { verifyPassword, createSessionToken, setAuthCookie } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { ValidationError, UnauthorizedError } from '@/lib/errors';
import { logger } from '@/lib/logger';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      throw new ValidationError('Invalid login credentials provided', result.error.format());
    }

    const { email, password } = result.data;
    const user = await db.user.findUnique({
      where: { email: email.toLowerCase() },
      include: {
        shop: {
          select: {
            id: true,
            name: true,
            slug: true,
            isActive: true,
          },
        },
      },
    });

    if (!user) {
      logger.warn(`Failed login attempt for email: ${email}`);
      throw new UnauthorizedError('Invalid email or password');
    }

    const isMatch = await verifyPassword(password, user.passwordHash);
    if (!isMatch) {
      logger.warn(`Password mismatch for user: ${user.id}`);
      throw new UnauthorizedError('Invalid email or password');
    }

    const token = createSessionToken({
      userId: user.id,
      shopId: user.shopId,
      role: user.role,
      email: user.email,
    });

    await setAuthCookie(token);

    logger.info(`Successful login for user: ${user.email} (${user.id})`);

    // Log to audit table
    await db.auditLog.create({
      data: {
        shopId: user.shopId,
        userId: user.id,
        action: 'AUTH_LOGIN',
        entityType: 'USER',
        entityId: user.id,
        details: JSON.stringify({ email: user.email }),
      },
    });

    return apiSuccess({
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
      shop: user.shop,
    });
  } catch (error) {
    return apiError(error);
  }
}
