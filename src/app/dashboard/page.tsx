import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { 
  Printer, 
  QrCode, 
  LogOut, 
  CheckCircle, 
  Clock, 
  ExternalLink,
  Cpu,
  Layers,
  Sparkles
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
    <div className="min-h-screen flex flex-col bg-zinc-50/60">
      <Navbar shopName={shop.name} user={session.user} />

      {/* Dashboard Sub-header */}
      <div className="border-b border-zinc-200/80 bg-white px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-black text-zinc-900 tracking-tight">
                {shop.name}
              </h1>
              <Badge variant="emerald">
                {shop.subscription?.plan?.name || 'Pro Hub'}
              </Badge>
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              Counter Route: <code className="bg-zinc-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">/s/{shop.slug}</code>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href={`/s/${shop.slug}`} target="_blank">
              <Button variant="outline" size="sm" className="gap-1.5">
                <QrCode className="h-4 w-4 text-emerald-700" />
                Customer QR View
                <ExternalLink className="h-3 w-3 text-zinc-400" />
              </Button>
            </Link>

            <form action="/api/v1/auth/logout" method="POST">
              <Button type="submit" variant="ghost" size="sm" className="gap-1.5 text-rose-600 hover:bg-rose-50">
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
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Active Queue</span>
              <div className="h-8 w-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-black text-zinc-900">{pendingOrdersCount}</div>
              <p className="text-xs text-zinc-500 mt-1">Orders awaiting printing</p>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Completed</span>
              <div className="h-8 w-8 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
                <CheckCircle className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-black text-zinc-900">{completedOrdersCount}</div>
              <p className="text-xs text-zinc-500 mt-1">Total jobs finished</p>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Printers Online</span>
              <div className="h-8 w-8 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center">
                <Printer className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-black text-zinc-900">{shop.printers?.length || 2}</div>
              <p className="text-xs text-zinc-500 mt-1">Windows Spooler linked</p>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Print Agent</span>
              <div className="h-8 w-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Cpu className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="success" pulse>ACTIVE</Badge>
              <span className="text-xs font-mono text-zinc-500">v1.0.0</span>
            </div>
            <p className="text-xs text-zinc-500 mt-2">Spooler & SNMP Ready</p>
          </Card>
        </div>

        {/* Printers and Hardware Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <div>
                  <CardTitle>Connected Xerox & Printers</CardTitle>
                  <CardDescription>Printers enumerated via Windows Print Spooler and SNMP</CardDescription>
                </div>
                <Badge variant="info">Tri-State Telemetry</Badge>
              </CardHeader>
              <CardContent>
                <div className="divide-y divide-zinc-100">
                  {(shop.printers || []).map((printer: any) => (
                    <div key={printer.id} className="py-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center">
                          <Printer className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-900">{printer.displayName}</p>
                          <p className="text-xs text-zinc-500 font-mono">
                            {printer.windowsPrinterName} • {printer.connectionType}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        {printer.supportsColor && <Badge variant="emerald">Color</Badge>}
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
                <CardTitle>Counter QR Code</CardTitle>
                <CardDescription>Customer counter scan point</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-center flex flex-col items-center">
                  <div className="h-40 w-40 rounded-xl border-4 border-zinc-900 p-2 flex items-center justify-center bg-white shadow-inner mb-3">
                    <QrCode className="h-32 w-32 text-zinc-900" />
                  </div>
                  <span className="text-xs font-bold text-zinc-800 uppercase tracking-wide">
                    Scan To Print
                  </span>
                  <span className="text-[11px] font-mono text-emerald-800 font-bold mt-1">
                    smartprinthub.com/s/{shop.slug}
                  </span>
                </div>
                <Link href={`/s/${shop.slug}`} target="_blank" className="w-full block">
                  <Button variant="outline" className="w-full text-xs font-bold">
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
