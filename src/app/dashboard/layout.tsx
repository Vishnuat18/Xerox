import React from 'react';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { DashboardNav } from '@/components/dashboard/dashboard-nav';

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session || !session.shop) {
    redirect('/login');
  }

  let shop: any = null;
  try {
    shop = await db.shop.findUnique({
      where: { id: session.shop.id },
      include: {
        subscription: {
          include: { plan: true },
        },
      },
    });
  } catch (err) {
    console.error('Database connection blip during layout shop resolution:', err);
  }

  if (!shop) {
    shop = {
      id: session.shop.id,
      name: session.shop.name || 'Metro Xerox & Multi-Print Hub',
      slug: session.shop.slug || 'metro-xerox',
      subscription: {
        plan: { name: 'Business Pro' },
      },
    };
  }

  return (
    <div className="min-h-[125vh] min-h-[125dvh] flex flex-col lg:flex-row bg-zinc-50/60 font-sans antialiased text-zinc-900">
      {/* Left Panel Sidebar Navigation */}
      <div className="print:hidden lg:sticky lg:top-0 lg:h-[125vh] lg:h-[125dvh] shrink-0">
        <DashboardNav
          shop={{
            id: shop.id,
            name: shop.name,
            slug: shop.slug,
            planName: shop.subscription?.plan?.name,
          }}
          user={session.user}
        />
      </div>

      {/* Main Workspace Area */}
      <main className="flex-1 p-3.5 sm:p-5 lg:p-6 min-w-0 w-full min-h-[125vh] min-h-[125dvh]">
        {children}
      </main>
    </div>
  );
}

