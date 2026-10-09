// SMART PRINT HUB - Health & Diagnostics API
import { db } from '@/lib/db';
import { apiSuccess, apiError } from '@/lib/api-response';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const startTime = Date.now();
    
    let dbStatus = 'CONNECTED';
    let dbLatencyMs = 0;
    let counts = { shops: 0, orders: 0, printers: 0 };

    try {
      await db.shop.findFirst({ select: { id: true } });
      dbLatencyMs = Date.now() - startTime;

      const [shopCount, orderCount, printerCount] = await Promise.all([
        db.shop.count().catch(() => 0),
        db.order.count().catch(() => 0),
        db.printer.count().catch(() => 0),
      ]);
      counts = { shops: shopCount, orders: orderCount, printers: printerCount };
    } catch (dbErr) {
      dbStatus = 'RECONNECTING';
    }

    return apiSuccess({
      status: dbStatus === 'CONNECTED' ? 'HEALTHY' : 'DEGRADED',
      service: 'smart-print-hub-api',
      version: '1.0.0',
      milestone: 'M1 - Project Foundation',
      environment: process.env.NODE_ENV || 'development',
      uptimeSeconds: Math.floor(process.uptime()),
      database: {
        status: dbStatus,
        latencyMs: dbLatencyMs,
        counts,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return apiError(error);
  }
}
