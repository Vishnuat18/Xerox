'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Inbox, 
  QrCode, 
  Sliders, 
  ExternalLink, 
  LogOut,
  CreditCard,
  Printer,
  Sparkles,
  Lock
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

interface SubInfo {
  planId: string;
  planName: string;
  status: 'TRIALING' | 'ACTIVE' | 'EXPIRED';
  daysRemaining: number;
  daysElapsed: number;
  isExpired: boolean;
  nextRenewalAt: string;
}

export function DashboardNav({ shop, user }: DashboardNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sub, setSub] = useState<SubInfo | null>(null);

  useEffect(() => {
    fetch('/api/v1/shops/subscription')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data?.subscription) {
          const subscription = json.data.subscription;
          setSub(subscription);
          // If trial expired, only pricing page should be visible, lock other paths
          if (subscription.isExpired && pathname !== '/dashboard/pricing') {
            router.push('/dashboard/pricing?expired=true');
          }
        }
      })
      .catch((err) => console.error('Subscription check error:', err));
  }, [pathname, router]);

  const isExpired = sub?.isExpired ?? false;

  const navItems = [
    {
      title: 'Print Queue',
      href: '/dashboard',
      icon: Inbox,
      active: pathname === '/dashboard',
      locked: isExpired,
    },
    {
      title: 'Subscription & Rates',
      href: '/dashboard/pricing',
      icon: CreditCard,
      active: pathname === '/dashboard/pricing',
      locked: false,
    },
    {
      title: 'Counter QR',
      href: '/dashboard/qr',
      icon: QrCode,
      active: pathname === '/dashboard/qr',
      locked: isExpired,
    },
    {
      title: 'Printers & Agent',
      href: '/dashboard/printers',
      icon: Printer,
      active: pathname === '/dashboard/printers',
      locked: isExpired,
    },
    {
      title: 'Shop Settings',
      href: '/dashboard/settings',
      icon: Sliders,
      active: pathname === '/dashboard/settings',
      locked: isExpired,
    },
  ];

  return (
    <aside className="w-full lg:w-60 bg-white border-b lg:border-b-0 lg:border-r border-zinc-200/70 flex flex-col justify-between shrink-0">
      <div>
        {/* Minimal Shop Header */}
        <div className="px-5 py-4 border-b border-zinc-100 flex items-center justify-between">
          <div className="min-w-0">
            <h2 className="text-xs font-semibold text-zinc-900 truncate">
              {shop.name}
            </h2>
            <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-zinc-400">
              <span className={clsx('h-1.5 w-1.5 rounded-full', isExpired ? 'bg-rose-500' : 'bg-emerald-500')} />
              <span>{isExpired ? 'Trial Expired' : 'Counter Online'}</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-2 space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            if (item.locked) {
              return (
                <div
                  key={item.href}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 cursor-not-allowed select-none bg-zinc-50/50"
                  title="Trial expired. Subscribe to unlock."
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-3.5 w-3.5 text-zinc-300" />
                    <span>{item.title}</span>
                  </div>
                  <Lock className="h-3 w-3 text-zinc-400" />
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all select-none',
                  item.active
                    ? 'bg-zinc-100 text-zinc-900 font-semibold'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                )}
              >
                <Icon className={clsx('h-3.5 w-3.5', item.active ? 'text-zinc-900' : 'text-zinc-400')} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>

        {/* Smart Print Hub Pro Subscription Left Panel Card */}
        <div className="mx-2 mt-3 p-3 rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white shadow-sm border border-zinc-700/60">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-wider uppercase text-amber-300 flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              {sub?.status === 'ACTIVE' ? 'Smart Pro Member' : '30-Day Pro Trial'}
            </span>
            <span className="text-[10px] text-zinc-300 font-mono font-medium">
              {sub?.status === 'ACTIVE' ? 'Active' : `${sub?.daysRemaining ?? 28}d left`}
            </span>
          </div>

          <div className="mt-1.5">
            <p className="text-xs font-semibold text-white">
              {sub?.planName || 'Business Pro Tier'}
            </p>
            <p className="text-[10px] text-zinc-400 mt-0.5">
              Renews daily at 12:00 AM Midnight
            </p>
          </div>

          <Link
            href="/dashboard/pricing"
            className="mt-3 flex items-center justify-center gap-1.5 w-full py-1.5 text-center bg-white hover:bg-zinc-100 text-zinc-950 font-semibold rounded-lg text-[11px] transition-colors shadow-2xs"
          >
            <CreditCard className="h-3 w-3" />
            {isExpired ? 'Renew Subscription' : 'Manage Subscription'}
          </Link>
        </div>
      </div>

      {/* Footer Profile & Logout */}
      <div className="p-3 border-t border-zinc-100 flex flex-col gap-2">
        {!isExpired && (
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
        )}

        {/* Profile Card with Google Pro Pill */}
        <div className="flex items-center justify-between px-2 pt-1 border-t border-zinc-100">
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-1.5">
              <p className="text-[11px] font-semibold text-zinc-800 truncate">{user.fullName}</p>
              <span className="px-1.5 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-200">
                {sub?.status === 'ACTIVE' ? 'PRO' : 'PRO TRIAL'}
              </span>
            </div>
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
