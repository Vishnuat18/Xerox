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

    // --- SYSTEM HARDWARE RESTRICTION CHECK ---
    // Enforce "One Account Per System/Computer" rule to eliminate free-trial abuse
    const cookieStore = await cookies();
    const registeredShopCookie = cookieStore.get('sph_device_registered_shop')?.value || null;
    const cookieDeviceId = cookieStore.get('sph_sys_machine_id')?.value || null;
    const effectiveDeviceId = deviceId || cookieDeviceId || `sys_${Date.now().toString(36)}`;

    const deviceCheck = deviceRegistry.checkDevice(
      effectiveDeviceId,
      hardwareFingerprint,
      registeredShopCookie
    );

    if (deviceCheck.isRegistered) {
      logger.warn(
        `Registration BLOCKED: Device [${effectiveDeviceId}] already registered to shop "${deviceCheck.existingShop?.shopName}" (${deviceCheck.existingShop?.ownerEmailMasked})`
      );
      throw new ForbiddenError(
        `This computer/system has already registered a Xerox shop account ("${deviceCheck.existingShop?.shopName || 'Existing Shop'}"). Only 1 shop account per system is allowed to protect free trial fairness. Please sign in to your registered account (${deviceCheck.existingShop?.ownerEmailMasked || 'registered email'}).`
      );
    }

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

    // Register this computer/system permanently to this shop
    deviceRegistry.registerDevice({
      deviceId: effectiveDeviceId,
      hardwareFingerprint: hardwareFingerprint || `hw_${effectiveDeviceId}`,
      shopId: createdData.shop.id,
      shopName: createdData.shop.name,
      ownerEmail: createdData.user.email,
      ipAddress: req.headers.get('x-forwarded-for') || undefined,
    });

    // Mark system with persistent cookies (10 years)
    cookieStore.set('sph_device_registered_shop', createdData.shop.id, {
      maxAge: 315360000,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    cookieStore.set('sph_sys_machine_id', effectiveDeviceId, {
      maxAge: 315360000,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    logger.info(`Registered new shop owner: ${email} -> Shop: ${createdData.shop.name} (${createdData.shop.id}) on system [${effectiveDeviceId}]`);

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
