import React from 'react';
import { notFound } from 'next/navigation';
import { Printer, QrCode, Upload, ArrowRight, ShieldCheck, Phone, User, CheckCircle2 } from 'lucide-react';
import { db } from '@/lib/db';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function CustomerShopLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const shop = await db.shop.findUnique({
    where: { slug },
    include: {
      pricingRules: true,
      printers: true,
    },
  });

  if (!shop || !shop.isActive) {
    notFound();
  }

  const a4Rule = shop.pricingRules.find((r) => r.paperSize === 'A4');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      {/* Mobile-optimized Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <Printer className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-sm font-black text-slate-900 dark:text-white leading-tight">{shop.name}</h1>
              <p className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Active Counter
              </p>
            </div>
          </div>
          <Badge variant="success" pulse>OPEN</Badge>
        </div>
      </header>

      {/* Mobile Content */}
      <main className="flex-1 max-w-md mx-auto w-full p-4 space-y-4">
        {/* Welcome Card */}
        <Card className="shadow-sm border-blue-100 dark:border-blue-900/50 bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-900 dark:to-slate-900">
          <CardHeader className="pb-3">
            <Badge variant="default" className="w-fit mb-1">Instant Xerox</Badge>
            <CardTitle className="text-xl">Upload Your Documents</CardTitle>
            <CardDescription className="text-xs">
              Upload PDF, DOCX, or images directly to this counter. Configure copies, color, and duplex without waiting.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-xs space-y-1.5">
              <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-[10px]">
                Counter Rates (A4)
              </span>
              <div className="grid grid-cols-2 gap-2 pt-1 font-medium text-slate-600 dark:text-slate-300">
                <div>B&W Single: <strong>₹{a4Rule?.bwSinglePrice.toFixed(2) || '2.00'}</strong></div>
                <div>B&W Duplex: <strong>₹{a4Rule?.bwDoublePrice.toFixed(2) || '3.00'}</strong></div>
                <div>Color Single: <strong>₹{a4Rule?.colorSinglePrice.toFixed(2) || '10.00'}</strong></div>
                <div>Color Duplex: <strong>₹{a4Rule?.colorDoublePrice.toFixed(2) || '18.00'}</strong></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upload Action Area */}
        <Card className="border-dashed border-2 border-blue-300 dark:border-blue-800 text-center p-6 bg-white dark:bg-slate-900">
          <div className="mx-auto h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center mb-3">
            <Upload className="h-6 w-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Choose Files to Print</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
            Support for PDF, DOC, DOCX, JPG, PNG up to 50MB.
          </p>

          <div className="mt-5">
            <Button variant="primary" className="w-full h-11 text-sm font-semibold shadow-md shadow-blue-500/20">
              Select Files
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </Card>

        <div className="text-center pt-2 text-xs text-slate-400 flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>Encrypted Direct Upload • Auto-deleted after 24h</span>
        </div>
      </main>
    </div>
  );
}
