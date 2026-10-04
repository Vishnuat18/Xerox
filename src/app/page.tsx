import React from 'react';
import Link from 'next/link';
import { 
  Printer, 
  QrCode, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  ArrowUpRight 
} from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const session = await getSession();

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50/50">
      <Navbar user={session?.user} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-zinc-200/60 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Milestone 4: Print Specifications Live
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
            Automated print workflow for modern Xerox shops.
          </h1>

          <p className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto font-normal leading-relaxed">
            Eliminate manual WhatsApp and email chaos. Customers scan a counter QR, select granular print specifications, and orders stream directly to your Windows printers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <Link
              href="/s/metro-xerox"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-all shadow-sm"
            >
              <QrCode className="h-4 w-4" />
              Customer Scan Flow
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 text-xs font-semibold transition-all shadow-2xs"
            >
              Shop Owner Dashboard
              <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
            </Link>
          </div>

          {/* Minimal Demo Credentials Strip */}
          <div className="pt-10 max-w-lg mx-auto">
            <div className="rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-3.5 text-xs text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div>
                <span className="text-[10px] uppercase font-mono text-zinc-400 block">Owner Login Demo</span>
                <span className="font-mono text-zinc-900 font-medium">owner@metroprint.com</span>
                <span className="text-zinc-400"> / </span>
                <span className="font-mono text-zinc-900 font-medium">password123</span>
              </div>
              <Link 
                href="/login" 
                className="shrink-0 text-emerald-700 hover:underline font-medium text-xs flex items-center gap-1"
              >
                Sign In <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-16 bg-zinc-50/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center mb-3">
                <QrCode className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-900">Zero-Install Counter QR</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Customers scan your desk standee, upload files, and pick copies, duplex, and color without downloading any app.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center mb-3">
                <Sliders className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-900">Granular Print Specs</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Per-document or batch settings for copies, A4/A3 sizes, single vs double sided, and live pricing calculation.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center mb-3">
                <Cpu className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-900">Windows Spooler Stream</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Jobs stream directly to local Windows printers through the spooler service with silent background execution.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Sliders(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  );
}
