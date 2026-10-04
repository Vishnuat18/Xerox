'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Inbox, 
  QrCode, 
  Sliders, 
  ExternalLink, 
  LogOut,
  IndianRupee,
  Printer
} from 'lucide-react';
import { clsx } from 'clsx';

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
  };
}

export function DashboardNav({ shop, user }: DashboardNavProps) {
  const pathname = usePathname();

  const navItems = [
    {
      title: 'Print Queue',
      href: '/dashboard',
      icon: Inbox,
      active: pathname === '/dashboard',
    },
    {
      title: 'Rate Card / Pricing',
      href: '/dashboard/pricing',
      icon: IndianRupee,
      active: pathname === '/dashboard/pricing',
    },
    {
      title: 'Counter QR',
      href: '/dashboard/qr',
      icon: QrCode,
      active: pathname === '/dashboard/qr',
    },
    {
      title: 'Printers & Agent',
      href: '/dashboard/printers',
      icon: Printer,
      active: pathname === '/dashboard/printers',
    },
    {
      title: 'Shop Settings',
      href: '/dashboard/settings',
      icon: Sliders,
      active: pathname === '/dashboard/settings',
    },
  ];

  return (
    <aside className="w-full lg:w-56 bg-white border-b lg:border-b-0 lg:border-r border-zinc-200/70 flex flex-col justify-between shrink-0">
      <div>
        {/* Minimal Shop Header */}
        <div className="px-5 py-4 border-b border-zinc-100 flex items-center justify-between">
          <div className="min-w-0">
            <h2 className="text-xs font-semibold text-zinc-900 truncate">
              {shop.name}
            </h2>
            <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Counter Online</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-2 space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all select-none',
                  item.active
                    ? 'bg-zinc-100 text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                )}
              >
                <Icon className={clsx('h-3.5 w-3.5', item.active ? 'text-zinc-900' : 'text-zinc-400')} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile & Logout */}
      <div className="p-3 border-t border-zinc-100 flex flex-col gap-2">
        <Link 
          href={`/s/${shop.slug}`} 
          target="_blank" 
          className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <QrCode className="h-3 w-3 text-emerald-600" />
            Customer View
          </span>
          <ExternalLink className="h-3 w-3 text-zinc-400" />
        </Link>

        <div className="flex items-center justify-between px-2 pt-1 border-t border-zinc-100">
          <div className="min-w-0 pr-2">
            <p className="text-[11px] font-medium text-zinc-800 truncate">{user.fullName}</p>
            <p className="text-[10px] text-zinc-400 truncate">{user.email}</p>
          </div>
          <form action="/api/v1/auth/logout" method="POST">
            <button
              type="submit"
              className="text-zinc-400 hover:text-rose-600 p-1 rounded transition-colors"
              title="Logout"
            >
              <LogOut className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
