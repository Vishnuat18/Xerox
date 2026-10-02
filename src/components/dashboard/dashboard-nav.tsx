'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  QrCode, 
  Settings, 
  ExternalLink, 
  LogOut,
  Store
} from 'lucide-react';
import { clsx } from 'clsx';
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
    <aside className="w-full lg:w-64 bg-white border-b lg:border-b-0 lg:border-r border-zinc-200/80 flex flex-col justify-between shrink-0">
      <div>
        {/* Shop Brand Header */}
        <div className="p-5 border-b border-zinc-200/80">
          <div className="flex items-center gap-2.5">
            <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black shadow-xs shrink-0">
              <Store className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-sm font-black text-zinc-900 truncate leading-tight">
                {shop.name}
              </h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-[10px] font-semibold text-emerald-800 uppercase tracking-wider">
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
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                )}
              >
                <Icon className={clsx('h-4 w-4 shrink-0', item.active ? 'text-white' : 'text-zinc-500')} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile & Logout */}
      <div className="p-4 border-t border-zinc-200/80 bg-zinc-50/70 space-y-3">
        <Link href={`/s/${shop.slug}`} target="_blank" className="w-full block">
          <Button variant="outline" size="sm" className="w-full text-xs gap-1.5 justify-between">
            <span className="flex items-center gap-1.5 truncate">
              <QrCode className="h-3.5 w-3.5 text-emerald-700" />
              Customer View
            </span>
            <ExternalLink className="h-3 w-3 text-zinc-400" />
          </Button>
        </Link>

        <div className="flex items-center justify-between pt-1">
          <div className="min-w-0 pr-2">
            <p className="text-xs font-bold text-zinc-900 truncate">{user.fullName}</p>
            <p className="text-[10px] text-zinc-500 truncate font-mono">{user.email}</p>
          </div>
          <form action="/api/v1/auth/logout" method="POST">
            <Button
              type="submit"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-rose-600 hover:bg-rose-50 rounded-lg"
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
