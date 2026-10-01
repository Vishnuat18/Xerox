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

  const shop = await db.shop.findUnique({
    where: { id: session.shop.id },
    include: {
      subscription: {
        include: { plan: true },
      },
    },
  });

  if (!shop) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-950">
      <DashboardNav
        shop={{
          id: shop.id,
          name: shop.name,
          slug: shop.slug,
          planName: shop.subscription?.plan?.name,
        }}
        user={session.user}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
