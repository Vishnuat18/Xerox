import React from 'react';
import Link from 'next/link';
import { 
  Printer, 
  QrCode, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Sparkles,
  UserCheck,
  Store,
  Layers
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
  
  const [shopCount, printerCount, planCount] = await Promise.all([
    db.shop.count(),
    db.printer.count(),
    db.subscriptionPlan.count(),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50/60">
      <Navbar user={session?.user} />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-18 lg:pb-24 border-b border-zinc-200/90 bg-gradient-to-b from-white via-zinc-50/40 to-emerald-50/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                Vercel Zero-Config Deployment Ready
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.12]">
                Automate your <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent">Xerox Shop</span> from Scan to Spool.
              </h1>

              <p className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed font-normal">
                Eliminate WhatsApp and email file chaos. Customers scan your counter QR code, configure granular print settings, and jobs stream directly to your Windows printers without manual driver dialogs.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link href="/s/metro-xerox">
                  <Button variant="primary" size="lg" className="shadow-sm gap-2">
                    <QrCode className="h-4 w-4" />
                    Try Customer QR Scan
                  </Button>
                </Link>

                <Link href="/login">
                  <Button variant="secondary" size="lg" className="gap-2">
                    Shop Owner Portal
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/api/v1/health" target="_blank">
                  <Button variant="outline" size="lg" className="font-mono text-xs gap-2">
                    <Activity className="h-4 w-4 text-emerald-600" />
                    Health JSON
                  </Button>
                </Link>
              </div>

              {/* Real-time system pulse */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-zinc-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span><strong>{shopCount}</strong> Registered Shop</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span><strong>{printerCount}</strong> Active Printers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Zero-Database Cloud Standalone</span>
                </div>
              </div>
            </div>

            {/* Test Credentials Card Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-6 sm:p-7 bg-white text-zinc-900 shadow-xl border border-zinc-200/90 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-zinc-800 uppercase tracking-wider">Test Account Sandbox</span>
                  </div>
                  <Badge variant="emerald">1-CLICK DEMO</Badge>
                </div>

                <div className="space-y-4 py-5 text-xs">
                  {/* Owner Box */}
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-zinc-900 flex items-center gap-1.5 text-xs">
                        <Store className="h-4 w-4 text-emerald-700" />
                        Shop Owner Account
                      </span>
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md font-bold">READY</span>
                    </div>
                    <div className="text-zinc-600 space-y-0.5 pt-1 font-mono text-[11px]">
                      <div>Email: <strong className="text-zinc-900">owner@metroprint.com</strong></div>
                      <div>Pass: <strong className="text-zinc-900">password123</strong></div>
                      <div className="text-zinc-500 pt-0.5">Shop: Metro Xerox & Multi-Print Hub</div>
                    </div>
                  </div>

                  {/* Customer Box */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200/70 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-xs">
                        <UserCheck className="h-4 w-4 text-emerald-700" />
                        Customer Demo Account
                      </span>
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md font-bold">PREFILLED</span>
                    </div>
                    <div className="text-emerald-900 space-y-0.5 pt-1 font-mono text-[11px]">
                      <div>Name: <strong className="text-zinc-900">Rahul Sharma</strong></div>
                      <div>Phone: <strong className="text-zinc-900">9876543210</strong></div>
                      <div className="text-emerald-800/80 pt-0.5">Scan Route: /s/metro-xerox</div>
                    </div>
                  </div>
                </div>

                <Link href="/login" className="block w-full">
                  <Button variant="secondary" className="w-full text-xs font-bold justify-between">
                    <span>Enter Owner Dashboard</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className="py-16 sm:py-20 bg-white border-b border-zinc-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-2">Core Engineering Architecture</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">Built for Real Xerox & Print Shop Floors</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:border-zinc-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <QrCode className="h-6 w-6" />
                </div>
                <CardTitle>Zero-Install Customer QR</CardTitle>
                <CardDescription>
                  Customers scan a counter standee, upload documents (PDF, Word, Images), and pick copies and color in seconds without installing any mobile app.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-zinc-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-2xl bg-zinc-100 text-zinc-800 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6" />
                </div>
                <CardTitle>Windows Print Agent</CardTitle>
                <CardDescription>
                  A lightweight Windows service on the shop PC that receives jobs via WebSocket and prints directly through the Windows Spooler with silent execution.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:border-zinc-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle>Privacy & Auto-Purge</CardTitle>
                <CardDescription>
                  Customer documents are hashed with SHA-256 for transmission integrity and automatically purged after 24 hours to prevent personal data accumulation.
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
