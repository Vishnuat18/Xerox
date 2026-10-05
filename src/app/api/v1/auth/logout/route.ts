// SMART PRINT HUB - Logout API
import { NextRequest, NextResponse } from 'next/server';
import { clearAuthCookie } from '@/lib/auth';
import { apiSuccess } from '@/lib/api-response';

export async function POST(req: NextRequest) {
  await clearAuthCookie();
  
  const acceptHeader = req.headers.get('accept') || '';
  const fetchMode = req.headers.get('sec-fetch-mode');
  const contentType = req.headers.get('content-type') || '';

  // If invoked via browser HTML form navigation, redirect to login page
  if (acceptHeader.includes('text/html') || fetchMode === 'navigate' || contentType.includes('application/x-www-form-urlencoded')) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('logged_out', '1');
    return NextResponse.redirect(loginUrl, 303);
  }

  return apiSuccess({ message: 'Successfully logged out' });
}

export async function GET(req: NextRequest) {
  await clearAuthCookie();
  const loginUrl = new URL('/login', req.url);
  loginUrl.searchParams.set('logged_out', '1');
  return NextResponse.redirect(loginUrl, 303);
}
