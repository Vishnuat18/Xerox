// SMART PRINT HUB - Firebase Owner Auth Bridge API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { createSessionToken, setAuthCookie, hashPassword } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { ValidationError, UnauthorizedError } from '@/lib/errors';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

function generateSlug(shopName: string): string {
  const base = shopName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `${base || 'shop'}-${randomSuffix}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, fullName, uid, shopName, action = 'login' } = body;

    if (!email) {
      throw new ValidationError('Email address is required from Firebase account.');
    }

    const cleanEmail = email.toLowerCase().trim();

    // Check if user already exists in database
    let user = await db.user.findUnique({
      where: { email: cleanEmail },
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
      // Create new Shop and Owner on first Google sign-in or registration
      const newShopName = shopName || `${fullName || 'My'} Print Hub`;
      const slug = generateSlug(newShopName);

      // Create dummy hashed password for Google-based users
      const dummyHash = await hashPassword(`firebase_oauth_${uid || Date.now()}`);

      const createdShop = await db.shop.create({
        data: {
          name: newShopName,
          slug,
          email: cleanEmail,
          phone: '+91 99999 99999',
          address: 'Main Road Xerox Counter',
          isActive: true,
        },
      });

      const trialEnd = new Date();
      trialEnd.setDate(trialEnd.getDate() + 30);

      // Create trial subscription
      await db.subscription.create({
        data: {
          shopId: createdShop.id,
          planId: 'BUSINESS',
          status: 'TRIALING',
          trialStartAt: new Date(),
          trialEndAt: trialEnd,
        },
      });

      // Create user
      user = await db.user.create({
        data: {
          email: cleanEmail,
          passwordHash: dummyHash,
          fullName: fullName || 'Shop Owner',
          role: 'SHOP_OWNER',
          isVerified: true,
          shopId: createdShop.id,
        },
      });

      user.shop = createdShop;
      logger.info(`Created new shop & owner via Firebase Google Auth: ${user.email} (${createdShop.slug})`);
    }

    // Generate Session Token & Set Cookie
    const token = createSessionToken({
      userId: user.id,
      shopId: user.shopId,
      role: user.role,
      email: user.email,
    });

    await setAuthCookie(token);

    logger.info(`Firebase login successful for user: ${user.email}`);

    return apiSuccess({
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
      shop: user.shop,
      token,
    });
  } catch (error) {
    return apiError(error);
  }
}
