'use client';

import React from 'react';
import Link from 'next/link';
import { Printer, ShieldCheck, QrCode, LayoutDashboard, LogIn } from 'lucide-react';
import { Badge } from './badge';
import { Button } from './button';

export function Navbar({ shopName, user }: { shopName?: string; user?: { fullName: string; role: string } | null }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 glass-panel">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 transition-transform hover:scale-[1.02]">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Printer className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                SMART PRINT <span className="text-blue-600 dark:text-blue-400">HUB</span>
              </span>
              <p className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">Automated Xerox Operations</p>
            </div>
          </Link>

          {shopName && (
            <div className="hidden md:flex items-center pl-4 border-l border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {shopName}
              </span>
            </div>
          )}
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <Badge variant="success" pulse>
              System Online
            </Badge>
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs font-bold text-slate-900 dark:text-white">{user.fullName}</span>
                <span className="text-[10px] text-slate-500 uppercase">{user.role}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="gap-1.5">
                  <LogIn className="h-4 w-4" />
                  Shop Login
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="sm" className="gap-1.5 shadow-sm">
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
