// SMART PRINT HUB - Owner Registration & Shop Setup API
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { z } from 'zod';
import { db } from '@/lib/db';
import { hashPassword, createSessionToken, setAuthCookie } from '@/lib/auth';
import { deviceRegistry } from '@/lib/device-registry';
import { apiSuccess, apiError } from '@/lib/api-response';
import { ValidationError, ConflictError, ForbiddenError } from '@/lib/errors';
import { logger } from '@/lib/logger';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  phone: z.string().min(10, 'Please enter a valid 10-digit contact number'),
  shopName: z.string().min(3, 'Shop name must be at least 3 characters'),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  pincode: z.string().optional(),
  gstNumber: z.string().optional(),
  deviceId: z.string().optional(),
  hardwareFingerprint: z.string().optional(),
});

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
    const result = registerSchema.safeParse(body);

    if (!result.success) {
      throw new ValidationError('Validation failed for registration input', result.error.format());
    }

    const {
      fullName,
      email,
      password,
      phone,
      shopName,
      address,
      city,
      state,
      pincode,
      gstNumber,
      deviceId,
      hardwareFingerprint,
    } = result.data;

    // --- SYSTEM HARDWARE RESTRICTION REMOVED FOR TEST PERIOD ---
    // Multiple account creation enabled for testing

    // Check if email already registered
    const existingUser = await db.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      throw new ConflictError('An account with this email address already exists');
    }

    const slug = generateSlug(shopName);
    const passwordHash = await hashPassword(password);

    // 30 days trial period
    const trialEnd = new Date();
    trialEnd.setDate(trialEnd.getDate() + 30);

    // Create Shop, Owner User, Trial Subscription, and default Pricing in a transaction
    const createdData = await db.$transaction(async (tx: any) => {
      const newShop = await tx.shop.create({
        data: {
          slug,
          name: shopName,
          phone,
          email: email.toLowerCase(),
          address,
          city,
          state,
          pincode,
          gstNumber,
        },
      });

      const newUser = await tx.user.create({
        data: {
          shopId: newShop.id,
          email: email.toLowerCase(),
          passwordHash,
          fullName,
          phone,
          role: 'SHOP_OWNER',
          isVerified: true,
        },
      });

      // Default pricing rule for A4
      await tx.pricingRule.create({
        data: {
          shopId: newShop.id,
          paperSize: 'A4',
          bwSinglePrice: 2.0,
          bwDoublePrice: 3.0,
          colorSinglePrice: 10.0,
          colorDoublePrice: 18.0,
        },
      });

      // 30-Day Free Trial Subscription on Professional Plan
      await tx.subscription.create({
        data: {
          shopId: newShop.id,
          planId: 'PROFESSIONAL',
          status: 'TRIALING',
          trialStartAt: new Date(),
          trialEndAt: trialEnd,
        },
      });

      return { user: newUser, shop: newShop };
    });

    const token = createSessionToken({
      userId: createdData.user.id,
      shopId: createdData.shop.id,
      role: createdData.user.role,
      email: createdData.user.email,
    });

    await setAuthCookie(token);

    logger.info(`Registered new shop owner: ${email} -> Shop: ${createdData.shop.name} (${createdData.shop.id})`);

    return apiSuccess(
      {
        user: {
          id: createdData.user.id,
          email: createdData.user.email,
          fullName: createdData.user.fullName,
          role: createdData.user.role,
        },
        shop: {
          id: createdData.shop.id,
          name: createdData.shop.name,
          slug: createdData.shop.slug,
        },
      },
      201
    );
  } catch (error) {
    return apiError(error);
  }
}
