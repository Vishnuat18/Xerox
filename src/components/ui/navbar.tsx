'use client';

import React from 'react';
import Link from 'next/link';
import { Printer, LayoutDashboard, LogIn, Sparkles, Store } from 'lucide-react';
import { Badge } from './badge';
import { Button } from './button';

export function Navbar({ shopName, user }: { shopName?: string; user?: { fullName: string; role: string } | null }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 glass-panel">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 transition-transform hover:scale-[1.01]">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-xs">
              <Printer className="h-5 w-5" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-zinc-900 flex items-center gap-1.5">
                SMART PRINT <span className="text-emerald-700">HUB</span>
              </span>
              <p className="text-[10px] font-semibold tracking-wider text-zinc-400 uppercase">Automated Xerox Systems</p>
            </div>
          </Link>

          {shopName && (
            <div className="hidden md:flex items-center pl-4 border-l border-zinc-200">
              <span className="text-xs font-semibold text-zinc-700 flex items-center gap-1.5 bg-zinc-100/80 px-2.5 py-1 rounded-lg">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                {shopName}
              </span>
            </div>
          )}
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <Badge variant="success" pulse>
              Vercel Live Ready
            </Badge>
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <LayoutDashboard className="h-4 w-4 text-emerald-700" />
                  Dashboard
                </Button>
              </Link>
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs font-bold text-zinc-900">{user.fullName}</span>
                <span className="text-[10px] text-zinc-500 uppercase font-medium">{user.role}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <LogIn className="h-4 w-4" />
                  Owner Login
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="sm" className="gap-1.5 shadow-xs">
                  Register Shop
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
