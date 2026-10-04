// SMART PRINT HUB - Agent Heartbeat & Telemetry API
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { apiSuccess, apiError } from '@/lib/api-response';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const shopSlug = req.headers.get('x-shop-slug') || 'metro-xerox';

    const shop = await db.shop.findUnique({
      where: { slug: shopSlug },
    });

    if (shop) {
      // Update agent state
      if (typeof db.printAgent?.update === 'function') {
        const agent = await db.printAgent.findFirst({ where: { shopId: shop.id } });
        if (agent) {
          await db.printAgent.update({
            where: { id: agent.id },
            data: {
              isConnected: true,
              lastHeartbeatAt: new Date(),
              ipAddress: body.localIp || null,
              machineHostname: body.machineHostname || null,
              osVersion: body.osVersion || null,
            },
          });
        }
      }
    }

    return apiSuccess({
      status: 'ACK',
      serverTime: new Date().toISOString(),
      pendingJobsCount: 0,
    });
  } catch (error) {
    return apiError(error);
  }
}
