// SMART PRINT HUB - Shop QR Code API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { NotFoundError } from '@/lib/errors';
import { generateQRDataUrl, generateQRSVG } from '@/lib/qr';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const session = await requireAuth();

    if (!session.shop?.id) {
      throw new NotFoundError('No shop associated with current account');
    }

    const shop = await db.shop.findUnique({
      where: { id: session.shop.id },
      select: {
        id: true,
        name: true,
        slug: true,
        phone: true,
        address: true,
      },
    });

    if (!shop) {
      throw new NotFoundError('Shop record not found');
    }

    const host = req.headers.get('host') || 'localhost:3000';
    const protocol = req.headers.get('x-forwarded-proto') || 'http';
    const customerUrl = `${protocol}://${host}/s/${shop.slug}`;

    const [pngDataUrl, svgString] = await Promise.all([
      generateQRDataUrl(customerUrl, { width: 1024, margin: 2 }),
      generateQRSVG(customerUrl, { margin: 2 }),
    ]);

    return apiSuccess({
      shop,
      customerUrl,
      qr: {
        pngDataUrl,
        svgString,
      },
    });
  } catch (error) {
    return apiError(error);
  }
}
