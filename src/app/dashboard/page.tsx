import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { 
  Printer, 
  QrCode, 
  Layers, 
  Settings, 
  LogOut, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Plus, 
  ExternalLink,
  Cpu
} from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const session = await getSession();

  if (!session || !session.shop) {
    redirect('/login');
  }

  const shop = await db.shop.findUnique({
    where: { id: session.shop.id },
    include: {
      printers: true,
      subscription: {
        include: { plan: true },
      },
      orders: {
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
          customer: true,
          documents: true,
        },
      },
    },
  });

  if (!shop) {
    redirect('/login');
  }

  const pendingOrdersCount = await db.order.count({
    where: { shopId: shop.id, status: { in: ['SUBMITTED', 'RECEIVED', 'REVIEWING', 'QUEUED'] } },
  });

  const completedOrdersCount = await db.order.count({
    where: { shopId: shop.id, status: 'COMPLETED' },
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <Navbar shopName={shop.name} user={session.user} />

      {/* Dashboard Sub-header */}
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {shop.name}
              </h1>
              <Badge variant="purple">
                {shop.subscription?.plan?.name || 'Pro Trial'}
              </Badge>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Shop Slug: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-blue-600 dark:text-blue-400 font-mono">/s/{shop.slug}</code>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href={`/s/${shop.slug}`} target="_blank">
              <Button variant="outline" size="sm" className="gap-1.5">
                <QrCode className="h-4 w-4" />
                Customer QR View
                <ExternalLink className="h-3 w-3 text-slate-400" />
              </Button>
            </Link>

            <form action="/api/v1/auth/logout" method="POST">
              <Button type="submit" variant="ghost" size="sm" className="gap-1.5 text-red-600 hover:text-red-700">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </form>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Metric Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Queue</span>
              <div className="h-8 w-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-black text-slate-900 dark:text-white">{pendingOrdersCount}</div>
              <p className="text-xs text-slate-500 mt-1">Orders awaiting printing</p>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Completed</span>
              <div className="h-8 w-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                <CheckCircle className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-black text-slate-900 dark:text-white">{completedOrdersCount}</div>
              <p className="text-xs text-slate-500 mt-1">Total jobs finished</p>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Printers Online</span>
              <div className="h-8 w-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
                <Printer className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-black text-slate-900 dark:text-white">{shop.printers.length}</div>
              <p className="text-xs text-slate-500 mt-1">Connected via Windows Agent</p>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Print Agent</span>
              <div className="h-8 w-8 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 flex items-center justify-center">
                <Cpu className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="success" pulse>ACTIVE</Badge>
              <span className="text-xs font-mono text-slate-500">v1.0.0</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Windows Spooler ready</p>
          </Card>
        </div>

        {/* Printers and Hardware Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <div>
                  <CardTitle>Connected Printers</CardTitle>
                  <CardDescription>Printers detected by the local Windows Print Agent</CardDescription>
                </div>
                <Badge variant="info">Tri-State Telemetry</Badge>
              </CardHeader>
              <CardContent>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {shop.printers.map((printer) => (
                    <div key={printer.id} className="py-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                          <Printer className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">{printer.displayName}</p>
                          <p className="text-xs text-slate-500 font-mono">
                            {printer.windowsPrinterName} • {printer.connectionType}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {printer.supportsColor && <Badge variant="purple">Color</Badge>}
                        {printer.supportsDuplex && <Badge variant="neutral">Duplex</Badge>}
                        <Badge variant="success" pulse>{printer.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Shop QR Code</CardTitle>
                <CardDescription>Display at customer counter</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center">
                  <div className="h-40 w-40 rounded-xl border-4 border-slate-900 dark:border-white p-2 flex items-center justify-center bg-white shadow-inner mb-3">
                    <QrCode className="h-32 w-32 text-slate-900" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                    Scan To Print
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 mt-1">
                    smartprinthub.com/s/{shop.slug}
                  </span>
                </div>
                <Link href={`/s/${shop.slug}`} target="_blank" className="w-full block">
                  <Button variant="outline" className="w-full text-xs">
                    Test Customer Mobile Flow
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
