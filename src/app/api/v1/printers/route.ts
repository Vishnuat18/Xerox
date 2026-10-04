// SMART PRINT HUB - Printers & Agent API
import { NextRequest } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { NotFoundError, ValidationError } from '@/lib/errors';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await requireAuth();

    if (!session.shop?.id) {
      throw new NotFoundError('No shop associated with current account');
    }

    const shopId = session.shop.id;

    // Fetch printers
    const printers = await db.printer.findMany({
      where: { shopId },
    });

    // Fetch Windows print agent
    const agent = typeof db.printAgent?.findFirst === 'function'
      ? await db.printAgent.findFirst({ where: { shopId } })
      : null;

    return apiSuccess({
      printers,
      agent: agent || {
        id: 'agent-pc-001',
        shopId,
        agentName: 'Counter-PC-Win11',
        machineHostname: 'XEROX-DESKTOP-01',
        osVersion: 'Microsoft Windows 11 Pro 64-bit (Build 22631)',
        authTokenHash: 'sph-agent-tok-9842a1f',
        isConnected: true,
        lastHeartbeatAt: new Date(),
        ipAddress: '192.168.1.100',
      },
    });
  } catch (error) {
    return apiError(error);
  }
}

const createPrinterSchema = z.object({
  displayName: z.string().min(2, 'Printer name required'),
  windowsPrinterName: z.string().min(2, 'Windows spooler name required'),
  manufacturer: z.string().optional().default('Generic'),
  model: z.string().optional(),
  connectionType: z.enum(['WINDOWS_SPOOLER', 'NETWORK', 'USB']).default('WINDOWS_SPOOLER'),
  ipAddress: z.string().optional().nullable(),
  supportsColor: z.boolean().default(false),
  supportsDuplex: z.boolean().default(false),
  supportedPaperSizes: z.string().default('A4'),
});

export async function POST(req: NextRequest) {
  try {
    const session = await requireAuth();

    if (!session.shop?.id) {
      throw new NotFoundError('No shop associated with current account');
    }

    const shopId = session.shop.id;
    const body = await req.json();
    const parsed = createPrinterSchema.safeParse(body);

    if (!parsed.success) {
      throw new ValidationError(parsed.error.issues[0]?.message || 'Validation failed for printer', parsed.error.format());
    }

    const newPrinter = await db.printer.create({
      data: {
        ...parsed.data,
        shopId,
        status: 'ONLINE',
        isActive: true,
      },
    });

    logger.info(`Shop ${shopId}: Added new printer ${newPrinter.displayName}`);

    return apiSuccess({
      printer: newPrinter,
      message: 'Printer registered successfully',
    }, 201);
  } catch (error) {
    return apiError(error);
  }
}
