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
  Lock,
  ChevronRight,
  Menu,
  X,
  Wallet
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    fetch('/api/v1/shops/subscription')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data?.subscription) {
          const subscription = json.data.subscription;
          setSub(subscription);
          if (subscription.isExpired && pathname !== '/dashboard/pricing') {
            router.push('/dashboard/pricing?expired=true');
          }
        }
      })
      .catch((err) => console.error('Subscription check error:', err));
  }, [pathname, router]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
      title: 'Finance & Accounts',
      href: '/dashboard/finance',
      icon: Wallet,
      active: pathname === '/dashboard/finance',
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
      title: 'Counter QR',
      href: '/dashboard/qr',
      icon: QrCode,
      active: pathname === '/dashboard/qr',
      locked: isExpired,
    },
    {
      title: 'Shop Settings',
      href: '/dashboard/settings',
      icon: Sliders,
      active: pathname === '/dashboard/settings',
      locked: isExpired,
    },
    {
      title: 'Subscription & Rates',
      href: '/dashboard/pricing',
      icon: CreditCard,
      active: pathname === '/dashboard/pricing',
      locked: false,
    },
  ];

  const planPrice = sub?.planName?.toLowerCase().includes('pro') ? '₹249' : '₹0';
  const userInitial = user.fullName ? user.fullName.charAt(0).toUpperCase() : 'U';
  const activeTitle = navItems.find((item) => item.active)?.title || 'Dashboard';

  return (
    <>
      {/* Mobile Sticky Navigation Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 px-4 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center shadow-xs">
            <Printer className="h-4 w-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-zinc-900 leading-tight block">
              Smart Print Hub
            </span>
            <span className="text-[11px] text-zinc-500 font-medium leading-tight flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
              {activeTitle}
            </span>
          </div>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-zinc-950/40 backdrop-blur-xs"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Navigation Sidebar Panel (Desktop Sticky + Mobile Drawer) */}
      <aside className={clsx(
        "bg-white border-r border-zinc-200/80 flex flex-col justify-between shrink-0 transition-all duration-200 z-50",
        "lg:w-[240px] lg:h-[125vh] lg:min-h-[125vh] lg:h-[125dvh] lg:min-h-[125dvh] lg:sticky lg:top-0",
        mobileOpen 
          ? "fixed inset-y-0 left-0 w-[260px] shadow-2xl" 
          : "hidden lg:flex"
      )}>
        <div>
          {/* Logo & Brand Header */}
          <div className="p-4 border-b border-zinc-100">
            <Link href="/dashboard" className="flex items-center gap-3 group">
              <div className="h-9 w-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center shadow-xs group-hover:scale-95 transition-transform">
                <Printer className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-[14px] font-bold text-zinc-900 leading-tight tracking-tight truncate">
                  Smart Print Hub
                </h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <p className="text-[11px] font-medium text-zinc-500 truncate">
                    {shop.name}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="p-3">
            <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Menu Navigation
            </p>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                if (item.locked) {
                  return (
                    <div
                      key={item.href}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] text-zinc-300 bg-zinc-50/50 cursor-not-allowed select-none"
                      title="Trial expired. Subscribe to unlock."
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-zinc-300" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <Lock className="h-3.5 w-3.5 text-zinc-300" />
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      'flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all select-none group',
                      item.active
                        ? 'bg-zinc-900 text-white shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={clsx('h-4 w-4 transition-colors', item.active ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-700')} />
                      <span>{item.title}</span>
                    </div>
                    {item.active && (
                      <ChevronRight className="h-3.5 w-3.5 text-zinc-400" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Customer Portal Shortcut */}
          {!isExpired && (
            <div className="px-3 pt-1">
              <Link 
                href={`/s/${shop.slug}`} 
                target="_blank" 
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[12px] font-semibold text-emerald-800 bg-emerald-50/70 hover:bg-emerald-100/80 transition-colors border border-emerald-200/80 group"
              >
                <span className="flex items-center gap-2">
                  <QrCode className="h-4 w-4 text-emerald-600" />
                  Customer Portal View
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          )}
        </div>

        {/* Bottom Section: Subscription & Account */}
        <div className="p-3 space-y-3 border-t border-zinc-100 bg-zinc-50/40">
          {/* Subscription Card */}
          <div className="rounded-xl bg-white border border-zinc-200/90 p-3 shadow-xs">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span className="text-[12px] font-bold text-zinc-900">
                  {sub?.planName || 'Business Pro'}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-zinc-500">
                {planPrice}/mo
              </span>
            </div>
            
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-100">
              <span className={clsx(
                'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-semibold',
                isExpired 
                  ? 'bg-rose-50 text-rose-700 border border-rose-200'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              )}>
                <span className={clsx('h-1.5 w-1.5 rounded-full', isExpired ? 'bg-rose-500' : 'bg-emerald-500')} />
                {isExpired ? 'Expired' : 'Active Plan'}
              </span>

              <Link
                href="/dashboard/pricing"
                className="text-[11px] font-medium text-zinc-600 hover:text-zinc-900 underline underline-offset-2"
              >
                Manage
              </Link>
            </div>
          </div>

          {/* User Profile & Single-Click Logout */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-zinc-200/80">
            <div className="flex items-center gap-2.5 min-w-0 pr-1">
              <div className="h-7 w-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-semibold text-[11px] shrink-0">
                {userInitial}
              </div>
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-zinc-900 truncate leading-tight">
                  {user.fullName}
                </p>
                <p className="text-[10px] text-zinc-400 truncate leading-tight">
                  {user.email}
                </p>
              </div>
            </div>
            <form action="/api/v1/auth/logout" method="POST" className="shrink-0">
              <button
                type="submit"
                className="text-zinc-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                title="Sign out of account"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </aside>
    </>
  );
}

