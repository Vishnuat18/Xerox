// SMART PRINT HUB - Standard API Response Envelope
import { NextResponse } from 'next/server';
import { AppError } from './errors';
import { logger } from './logger';

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta?: {
    timestamp: string;
    requestId?: string;
  };
}

export function apiSuccess<T>(data: T, status = 200, meta?: Record<string, unknown>) {
  const payload: ApiResponse<T> = {
    success: true,
    data,
    meta: {
      timestamp: new Date().toISOString(),
      ...meta,
    },
  };
  return NextResponse.json(payload, { status });
}

export function apiError(error: unknown) {
  const timestamp = new Date().toISOString();

  if (error instanceof AppError) {
    logger.warn(`Handled application error [${error.code}]: ${error.message}`);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
        },
        meta: { timestamp },
      },
      { status: error.statusCode }
    );
  }

  const genericError = error as Error;
  logger.error('Unhandled server exception', genericError);

  return NextResponse.json(
    {
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: process.env.NODE_ENV === 'production' 
          ? 'An internal error occurred. Please try again later.' 
          : genericError?.message || 'Unknown internal error',
      },
      meta: { timestamp },
    },
    { status: 500 }
  );
}
