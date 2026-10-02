'use client';

import React, { useState, useEffect } from 'react';
import { 
  QrCode, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  ShieldCheck, 
  Smartphone,
  Sparkles
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface QRData {
  shop: {
    id: string;
    name: string;
    slug: string;
    phone: string;
    address?: string;
  };
  customerUrl: string;
  qr: {
    pngDataUrl: string;
    svgString: string;
  };
}

export default function QRManagementPage() {
  const [data, setData] = useState<QRData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/api/v1/shops/qr')
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setData(json.data);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleCopyLink = () => {
    if (!data?.customerUrl) return;
    navigator.clipboard.writeText(data.customerUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPNG = () => {
    if (!data?.qr.pngDataUrl) return;
    const link = document.createElement('a');
    link.href = data.qr.pngDataUrl;
    link.download = `${data.shop.slug}-counter-qr.png`;
    link.click();
  };

  const handleDownloadSVG = () => {
    if (!data?.qr.svgString) return;
    const blob = new Blob([data.qr.svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${data.shop.slug}-counter-qr.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePrintStandee = () => {
    window.print();
  };

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <div className="flex items-center gap-3 text-zinc-500 text-sm">
          <div className="animate-spin h-5 w-5 border-2 border-emerald-600 border-t-transparent rounded-full" />
          <span>Generating high-resolution QR and counter standee...</span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center text-zinc-500">
        <p>Could not load QR code data. Please refresh.</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-6xl mx-auto">
      
      {/* Top Banner (Hidden in print) */}
      <div className="print:hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 pb-5">
        <div>
          <h1 className="text-2xl font-black text-zinc-900 tracking-tight flex items-center gap-2">
            <QrCode className="h-6 w-6 text-emerald-700" />
            Shop Counter QR & Standee
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Display this QR standee on your Xerox counter for direct customer document submissions.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button variant="primary" onClick={handlePrintStandee} className="gap-2 shadow-xs">
            <Printer className="h-4 w-4" />
            Print Counter Poster (A4)
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Digital Controls & Exports (Hidden in print) */}
        <div className="lg:col-span-5 space-y-6 print:hidden">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Customer Scan URL</CardTitle>
              <CardDescription>
                Public URL encoded into your counter QR code.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-zinc-800 truncate select-all">
                  {data.customerUrl}
                </span>
                <Button variant="ghost" size="sm" onClick={handleCopyLink} className="h-8 shrink-0">
                  {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <Button variant="outline" size="sm" onClick={handleDownloadPNG} className="w-full text-xs gap-1.5 font-bold">
                  <Download className="h-4 w-4 text-zinc-600" />
                  PNG (1024px)
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownloadSVG} className="w-full text-xs gap-1.5 font-bold">
                  <Download className="h-4 w-4 text-zinc-600" />
                  SVG (Vector)
                </Button>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-xs">
                  <ShieldCheck className="h-4 w-4 text-emerald-700" /> High Error Correction (Level H)
                </p>
                <p className="text-[11px] leading-relaxed text-emerald-800/80">
                  Exported with 30% error correction. It remains readable even if counter stickers suffer scratches, wear, or lighting glare.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Counter Workflow</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-zinc-600 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</div>
                <p>Customer points phone camera at counter standee.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</div>
                <p>Customer selects PDF/Word files and configures copies & color.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</div>
                <p>Order appears live on your dashboard ready to spool.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: High-Res Counter Standee / Poster Preview */}
        <div className="lg:col-span-7">
          <div className="bg-white text-zinc-900 rounded-3xl p-8 sm:p-10 border-2 border-zinc-300 shadow-xl print:shadow-none print:border-none print:p-0 max-w-lg mx-auto print:max-w-none">
            
            {/* Standee Header */}
            <div className="text-center space-y-2 pb-6 border-b-2 border-zinc-900">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-black tracking-wider uppercase">
                <Printer className="h-3.5 w-3.5" />
                SMART PRINT HUB
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight leading-tight uppercase">
                {data.shop.name}
              </h2>
              <p className="text-xs font-bold text-zinc-600 tracking-wide uppercase">
                SELF-SERVICE PRINT & XEROX COUNTER
              </p>
            </div>

            {/* QR Centerpiece */}
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="p-4 bg-white rounded-3xl border-4 border-zinc-900 shadow-md mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.qr.pngDataUrl}
                  alt={`${data.shop.name} QR Code`}
                  className="h-56 w-56 sm:h-64 sm:w-64 object-contain"
                />
              </div>

              <div className="space-y-1">
                <span className="text-base sm:text-lg font-black text-zinc-900 tracking-tight flex items-center justify-center gap-1.5">
                  <Smartphone className="h-5 w-5 text-emerald-700" />
                  SCAN WITH PHONE CAMERA
                </span>
                <p className="text-xs font-medium text-zinc-500">
                  No app download needed • Instant upload
                </p>
                <p className="text-[11px] font-mono text-emerald-800 font-bold pt-1">
                  {data.customerUrl}
                </p>
              </div>
            </div>

            {/* Step by Step Customer Instructions */}
            <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-200 space-y-3">
              <span className="text-[11px] font-black text-zinc-900 uppercase tracking-wider block text-center">
                Quick 3-Step Process
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-zinc-700">
                <div className="p-2.5 bg-white rounded-xl border border-zinc-200 shadow-2xs">
                  <div className="text-emerald-700 text-xs mb-0.5 font-black">STEP 1</div>
                  Scan QR Code
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-zinc-200 shadow-2xs">
                  <div className="text-emerald-700 text-xs mb-0.5 font-black">STEP 2</div>
                  Select Files & Specs
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-zinc-200 shadow-2xs">
                  <div className="text-emerald-700 text-xs mb-0.5 font-black">STEP 3</div>
                  Collect Prints
                </div>
              </div>
            </div>

            {/* Standee Footer */}
            <div className="pt-6 text-center text-[10px] text-zinc-400 font-medium border-t border-zinc-200 mt-6">
              Powered by SMART PRINT HUB • Automated Xerox Systems
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
