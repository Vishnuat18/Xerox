// SMART PRINT HUB - Zero-Download Real File Streaming & Auto-Print API
import { NextRequest, NextResponse } from 'next/server';
import { getDocumentStream } from '@/lib/pdf-service';
import { logger } from '@/lib/logger';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const storageKey = searchParams.get('key') || searchParams.get('path');
    const autoPrint = searchParams.get('autoprint') === '1' || searchParams.get('print') === 'true';
    const isDownload = searchParams.get('download') === '1';

    if (!storageKey) {
      return NextResponse.json(
        { success: false, error: { message: 'Missing file storageKey or path parameter' } },
        { status: 400 }
      );
    }

    const { buffer, mimeType, filename } = await getDocumentStream(storageKey, autoPrint);

    const disposition = isDownload ? 'attachment' : 'inline';

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Content-Disposition': `${disposition}; filename="${encodeURIComponent(filename)}"`,
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'public, max-age=86400, immutable',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    logger.error('File stream error:', error as Error);
    return NextResponse.json(
      { success: false, error: { message: 'Failed to stream document' } },
      { status: 500 }
    );
  }
}
