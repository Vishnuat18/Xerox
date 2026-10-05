'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Printer, ArrowUpRight, QrCode } from 'lucide-react';

export function Navbar({ 
  shopName, 
  user 
}: { 
  shopName?: string; 
  user?: { fullName: string; role: string } | null;
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
        
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-7 w-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center transition-transform group-hover:scale-95">
              <Printer className="h-3.5 w-3.5" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-zinc-900">
              Smart Print Hub
            </span>
          </Link>

          {shopName && (
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-zinc-200 text-xs text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-medium text-zinc-700 truncate max-w-[200px]">{shopName}</span>
            </div>
          )}
        </div>

        {/* Navigation & Controls */}
        <nav className="flex items-center gap-2 text-xs">
          {user ? (
            <div className="flex items-center gap-3">
              <Link 
                href="/dashboard" 
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  pathname === '/dashboard' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Dashboard
              </Link>
              <Link 
                href="/dashboard/qr" 
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  pathname === '/dashboard/qr' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                QR Standee
              </Link>
              <Link 
                href="/dashboard/pricing" 
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  pathname === '/dashboard/pricing' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Subscription
              </Link>
              <Link 
                href="/dashboard/settings" 
                className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                  pathname === '/dashboard/settings' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Settings
              </Link>

              <div className="h-4 w-px bg-zinc-200 mx-1" />

              <span className="hidden md:inline text-zinc-400 font-normal">
                {user.fullName}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/scan"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors border ${
                  pathname === '/scan'
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-emerald-50/80 text-emerald-800 border-emerald-200/80 hover:bg-emerald-100/80'
                }`}
              >
                <QrCode className="h-3 w-3 shrink-0" />
                <span>Scan Counter QR</span>
              </Link>
              <Link
                href="/#pricing"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 font-medium transition-colors"
              >
                Plans
              </Link>
              <Link
                href="/login"
                className="px-3 py-1.5 rounded-lg text-zinc-700 hover:text-zinc-900 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium transition-all"
              >
                Get Started
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
