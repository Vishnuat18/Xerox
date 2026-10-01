import React from 'react';
import Link from 'next/link';
import { 
  Printer, 
  QrCode, 
  UploadCloud, 
  Sliders, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Check, 
  Server, 
  Activity, 
  FileText
} from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { db } from '@/lib/db';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const session = await getSession();
  
  // Query stats for dynamic proof of live database
  const [shopCount, printerCount, planCount] = await Promise.all([
    db.shop.count(),
    db.printer.count(),
    db.subscriptionPlan.count(),
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={session?.user} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                Milestone 1 — Project Foundation Live
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Automate your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Xerox Shop</span> from Scan to Print.
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Eliminate WhatsApp and email file chaos. Customers scan your counter QR code, configure granular print settings, and jobs stream directly to your Windows printers without manual driver dialogs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/s/metro-xerox">
                  <Button variant="emerald" size="lg" className="shadow-lg shadow-emerald-500/20">
                    <QrCode className="h-5 w-5 mr-2" />
                    Try Customer QR Scan
                  </Button>
                </Link>

                <Link href="/login">
                  <Button variant="secondary" size="lg">
                    Shop Owner Portal
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>

                <Link href="/api/v1/health" target="_blank">
                  <Button variant="outline" size="lg" className="font-mono text-xs">
                    <Activity className="h-4 w-4 mr-2 text-emerald-500" />
                    API Health JSON
                  </Button>
                </Link>
              </div>

              {/* Real-time system pulse */}
              <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span><strong>{shopCount}</strong> Active Shops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <span><strong>{printerCount}</strong> Discovered Printers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500" />
                  <span>PostgreSQL / SQLite In Sync</span>
                </div>
              </div>
            </div>

            {/* Architecture Card Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-2xl border border-slate-800">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 pl-2">smart-print-hub://core</span>
                  </div>
                  <Badge variant="success" pulse>LIVE PIPELINE</Badge>
                </div>

                <div className="space-y-4 py-5 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300">1. Customer QR Ingest</span>
                    <span className="text-emerald-400 font-bold">HTTPS / S3 Ready</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300">2. Pricing Engine</span>
                    <span className="text-blue-400 font-bold">A4, A3, Duplex</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300">3. Windows Print Agent</span>
                    <span className="text-purple-400 font-bold">WSS / Spooler</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300">4. Printer Hardware</span>
                    <span className="text-amber-400 font-bold">Tri-State Telemetry</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-200 text-xs">
                  <p className="font-semibold text-blue-100 flex items-center gap-1.5 mb-1">
                    <Zap className="h-4 w-4 text-blue-400" />
                    Demo Seed Account Ready:
                  </p>
                  <p>Email: <code className="text-white">owner@metroprint.com</code></p>
                  <p>Password: <code className="text-white">password123</code></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">Core Engineering Principles</h2>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">Built for High-Volume Printing Operations</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center mb-4">
                  <QrCode className="h-6 w-6" />
                </div>
                <CardTitle>Zero-Install Customer QR</CardTitle>
                <CardDescription>
                  Customers scan a physical QR code inside the shop, upload multi-page documents, and configure copies, color, and duplex in seconds without downloading an app.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <CardTitle>Local Windows Print Agent</CardTitle>
                <CardDescription>
                  Communicates directly with the Windows Print Spooler and SNMP-enabled multi-function copiers, enabling silent printing without web browser driver limitations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle>Multi-Tenant & Privacy First</CardTitle>
                <CardDescription>
                  Strict shop-level data isolation, time-limited 15-minute expiring document links, and automatic 24-hour file purge upon job completion protect customer privacy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
