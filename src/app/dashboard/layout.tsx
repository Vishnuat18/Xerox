import React from 'react';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
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
    <div className="min-h-screen flex flex-col bg-zinc-50/50">
      <div className="print:hidden">
        <Navbar shopName={shop.name} user={session.user} />
      </div>

      <div className="flex-1 max-w-6xl w-full mx-auto flex flex-col lg:flex-row">
        <div className="print:hidden">
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

        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
          {children}
        </main>
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
