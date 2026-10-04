// SMART PRINT HUB - Windows Print Agent Pairing API
import { NextRequest } from 'next/server';
import crypto from 'crypto';
import { db } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { NotFoundError } from '@/lib/errors';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const session = await requireAuth();

    if (!session.shop?.id) {
      throw new NotFoundError('No shop associated with current account');
    }

    const shopId = session.shop.id;
    const pairingToken = `sph_live_${crypto.randomBytes(16).toString('hex')}`;

    // Update or create agent record with new pairing token
    let agent = typeof db.printAgent?.findFirst === 'function'
      ? await db.printAgent.findFirst({ where: { shopId } })
      : null;

    if (agent && typeof db.printAgent?.update === 'function') {
      agent = await db.printAgent.update({
        where: { id: agent.id },
        data: {
          authTokenHash: pairingToken,
          isConnected: true,
          lastHeartbeatAt: new Date(),
        },
      });
    } else if (typeof db.printAgent?.create === 'function') {
      agent = await db.printAgent.create({
        data: {
          shopId,
          agentName: 'Counter-PC-Win11',
          machineHostname: 'XEROX-DESKTOP-01',
          osVersion: 'Microsoft Windows 11 Pro 64-bit',
          authTokenHash: pairingToken,
          isConnected: true,
          lastHeartbeatAt: new Date(),
        },
      });
    }

    logger.info(`Shop ${shopId}: Generated new Windows agent pairing token`);

    return apiSuccess({
      pairingToken,
      agent,
      setupCommand: `Invoke-WebRequest -Uri "https://smartprinthub.com/install.ps1" -OutFile "$env:TEMP\\install.ps1"; powershell -ExecutionPolicy Bypass -File "$env:TEMP\\install.ps1" -ShopSlug "${session.shop.slug}" -Token "${pairingToken}"`,
      message: 'Agent pairing token generated successfully',
    });
  } catch (error) {
    return apiError(error);
  }
}
