// SMART PRINT HUB - Authentication & Session Security
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { db } from './db';
import { UnauthorizedError, ForbiddenError } from './errors';

const JWT_SECRET = process.env.JWT_SECRET || 'smart-print-hub-default-fallback-secret-2026';
const AUTH_COOKIE_NAME = 'sph_session_token';

export interface TokenPayload {
  userId: string;
  shopId: string | null;
  role: string;
  email: string;
}

export interface AuthSession {
  user: {
    id: string;
    email: string;
    fullName: string;
    role: string;
    shopId: string | null;
  };
  shop?: {
    id: string;
    name: string;
    slug: string;
  } | null;
}

// -------------------------------------------------------------
// Passwords
// -------------------------------------------------------------
export async function hashPassword(plainText: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plainText, salt);
}

export async function verifyPassword(plainText: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plainText, hash);
}

// -------------------------------------------------------------
// JWT Tokens
// -------------------------------------------------------------
export function createSessionToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifySessionToken(token: string): TokenPayload {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    throw new UnauthorizedError('Invalid or expired authentication session');
  }
}

// -------------------------------------------------------------
// Cookie Utilities
// -------------------------------------------------------------
export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

// -------------------------------------------------------------
// Session Resolution
// -------------------------------------------------------------
export async function getSession(): Promise<AuthSession | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

    if (!token) {
      return null;
    }

    const payload = verifySessionToken(token);
    const user = await db.user.findUnique({
      where: { id: payload.userId },
      include: {
        shop: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });

    if (!user) {
      return null;
    }

    return {
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        shopId: user.shopId,
      },
      shop: user.shop,
    };
  } catch {
    return null;
  }
}

export async function requireAuth(): Promise<AuthSession> {
  const session = await getSession();
  if (!session) {
    throw new UnauthorizedError('Please log in to continue');
  }
  return session;
}

export async function requireRole(allowedRoles: string[]): Promise<AuthSession> {
  const session = await requireAuth();
  if (!allowedRoles.includes(session.user.role)) {
    throw new ForbiddenError('Insufficient permissions to perform this operation');
  }
  return session;
}
