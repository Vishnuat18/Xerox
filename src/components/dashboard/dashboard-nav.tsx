'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  QrCode, 
  Settings, 
  ExternalLink,
  Printer,
  Sliders,
  LogOut,
  Store
} from 'lucide-react';
import { clsx } from 'clsx';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface DashboardNavProps {
  shop: {
    id: string;
    name: string;
    slug: string;
    planName?: string;
  };
  user: {
    fullName: string;
    email: string;
    role: string;
  };
}

export function DashboardNav({ shop, user }: DashboardNavProps) {
  const pathname = usePathname();

  const navItems = [
    {
      title: 'Operations Overview',
      href: '/dashboard',
      icon: LayoutDashboard,
      active: pathname === '/dashboard',
    },
    {
      title: 'Counter QR & Standee',
      href: '/dashboard/qr',
      icon: QrCode,
      active: pathname === '/dashboard/qr',
    },
    {
      title: 'Shop Profile & Settings',
      href: '/dashboard/settings',
      icon: Settings,
      active: pathname === '/dashboard/settings',
    },
  ];

  return (
    <aside className="w-full lg:w-64 bg-white dark:bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between shrink-0">
      <div>
        {/* Shop Brand Header */}
        <div className="p-5 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black shadow-md shadow-blue-500/20 shrink-0">
              <Store className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-sm font-black text-slate-900 dark:text-white truncate leading-tight">
                {shop.name}
              </h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  {shop.planName || 'Pro Hub'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all select-none',
                  item.active
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                <Icon className={clsx('h-4 w-4 shrink-0', item.active ? 'text-white' : 'text-slate-500')} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile & Logout */}
      <div className="p-4 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 space-y-3">
        <Link href={`/s/${shop.slug}`} target="_blank" className="w-full block">
          <Button variant="outline" size="sm" className="w-full text-xs gap-1.5 justify-between">
            <span className="flex items-center gap-1.5 truncate">
              <QrCode className="h-3.5 w-3.5 text-blue-600" />
              Customer View
            </span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </Button>
        </Link>

        <div className="flex items-center justify-between pt-1">
          <div className="min-w-0 pr-2">
            <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{user.fullName}</p>
            <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
          </div>
          <form action="/api/v1/auth/logout" method="POST">
            <Button
              type="submit"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </aside>
  );
}
