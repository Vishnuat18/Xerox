// SMART PRINT HUB - Health & Diagnostics API
import { db } from '@/lib/db';
import { apiSuccess, apiError } from '@/lib/api-response';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const startTime = Date.now();
    
    // Check database connection
    await db.$queryRaw`SELECT 1`;
    const dbLatencyMs = Date.now() - startTime;

    // Fetch counts
    const [shopCount, orderCount, printerCount] = await Promise.all([
      db.shop.count(),
      db.order.count(),
      db.printer.count(),
    ]);

    return apiSuccess({
      status: 'HEALTHY',
      service: 'smart-print-hub-api',
      version: '1.0.0',
      milestone: 'M1 - Project Foundation',
      environment: process.env.NODE_ENV || 'development',
      uptimeSeconds: Math.floor(process.uptime()),
      database: {
        status: 'CONNECTED',
        latencyMs: dbLatencyMs,
        counts: {
          shops: shopCount,
          orders: orderCount,
          printers: printerCount,
        },
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return apiError(error);
  }
}
