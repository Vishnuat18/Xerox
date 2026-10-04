// SMART PRINT HUB - File Catch-All Dynamic Route
import { NextRequest, NextResponse } from 'next/server';
import { getDocumentStream } from '@/lib/pdf-service';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathSegments } = await context.params;
    const storageKey = pathSegments.join('/');
    const searchParams = req.nextUrl.searchParams;
    const autoPrint = searchParams.get('autoprint') === '1' || searchParams.get('print') === 'true';
    const isDownload = searchParams.get('download') === '1';

    const { buffer, mimeType, filename } = await getDocumentStream(storageKey, autoPrint);

    const disposition = isDownload ? 'attachment' : 'inline';

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Content-Disposition': `${disposition}; filename="${encodeURIComponent(filename)}"`,
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'public, max-age=86400, immutable',
      },
    });
  } catch (error) {
    logger.error('Dynamic file stream error:', error);
    return NextResponse.json(
      { success: false, error: { message: 'Failed to stream document' } },
      { status: 500 }
    );
  }
}
