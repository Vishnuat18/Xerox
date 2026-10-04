// SMART PRINT HUB - System Device Pre-check API
// Checks if the user's computer/system already has an active shop registered
import { NextRequest } from 'next/server';
import { deviceRegistry } from '@/lib/device-registry';
import { apiSuccess } from '@/lib/api-response';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const deviceId = searchParams.get('deviceId');
  const fingerprint = searchParams.get('fingerprint');

  const registeredShopCookie = req.cookies.get('sph_device_registered_shop')?.value || null;
  const cookieDeviceId = req.cookies.get('sph_sys_machine_id')?.value || null;

  const effectiveDeviceId = deviceId || cookieDeviceId;

  const result = deviceRegistry.checkDevice(
    effectiveDeviceId,
    fingerprint,
    registeredShopCookie
  );

  return apiSuccess({
    isRegistered: result.isRegistered,
    existingShop: result.existingShop || null,
    reason: result.reason || null,
  });
}
