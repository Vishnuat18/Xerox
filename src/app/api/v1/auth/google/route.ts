// SMART PRINT HUB - MySQL Direct Google Owner Authentication & Registration API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { createSessionToken, setAuthCookie, hashPassword } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { ValidationError } from '@/lib/errors';
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
    const { email, fullName, sub, shopName } = body;

    if (!email) {
      throw new ValidationError('Email address is required for Google authentication.');
    }

    const cleanEmail = email.toLowerCase().trim();

    // Check if owner already exists in MySQL database
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
      // Auto-Register new Xerox Shop and Owner in MySQL
      const newShopName = shopName || `${fullName || 'Metro'} Xerox Hub`;
      const slug = generateSlug(newShopName);

      // Create random hashed password for OAuth accounts
      const dummyHash = await hashPassword(`oauth_google_${sub || Date.now()}`);

      const createdShop = await db.shop.create({
        data: {
          name: newShopName,
          slug,
          email: cleanEmail,
          phone: '+91 98765 00000',
          address: 'Main Road Xerox Counter',
          city: 'Bangalore',
          state: 'Karnataka',
          isActive: true,
        },
      });

      // Default A4 Pricing Rules in MySQL
      await db.pricingRule.createMany({
        data: [
          {
            shopId: createdShop.id,
            paperSize: 'A4',
            bwSinglePrice: 2.0,
            bwDoublePrice: 3.0,
            colorSinglePrice: 10.0,
            colorDoublePrice: 18.0,
          },
          {
            shopId: createdShop.id,
            paperSize: 'A3',
            bwSinglePrice: 5.0,
            bwDoublePrice: 8.0,
            colorSinglePrice: 20.0,
            colorDoublePrice: 35.0,
          },
        ],
      });

      const trialEnd = new Date();
      trialEnd.setDate(trialEnd.getDate() + 30);

      // Create trial subscription in MySQL
      await db.subscription.create({
        data: {
          shopId: createdShop.id,
          planId: 'BUSINESS',
          status: 'TRIALING',
          trialStartAt: new Date(),
          trialEndAt: trialEnd,
        },
      });

      // Create owner user in MySQL
      user = await db.user.create({
        data: {
          email: cleanEmail,
          passwordHash: dummyHash,
          fullName: fullName || 'Shop Owner',
          role: 'SHOP_OWNER',
          isVerified: true,
          shopId: createdShop.id,
        },
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

      logger.info(`Registered new shop & owner in MySQL: ${user.email} (${createdShop.slug})`);
    }

    // Generate Session Token & Set HTTP-only Cookie
    const token = createSessionToken({
      userId: user.id,
      shopId: user.shopId,
      role: user.role,
      email: user.email,
    });

    await setAuthCookie(token);

    logger.info(`Owner login via Google successful for MySQL user: ${user.email}`);

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
