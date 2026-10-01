'use client';

import React, { useState, useEffect } from 'react';
import { 
  QrCode, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Smartphone
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
        <div className="flex items-center gap-3 text-slate-500 text-sm">
          <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full" />
          <span>Generating high-resolution QR and counter standee...</span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8 text-center text-slate-500">
        <p>Could not load QR code data. Please refresh.</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-6xl mx-auto">
      
      {/* Top Banner (Hidden in print) */}
      <div className="print:hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800/80 pb-5">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <QrCode className="h-6 w-6 text-blue-600" />
            Shop Counter QR & Standee
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Display this QR standee on your Xerox shop counter for frictionless customer document submissions.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button variant="emerald" onClick={handlePrintStandee} className="gap-2 shadow-sm">
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
              <CardTitle className="text-lg">Customer Scan Link</CardTitle>
              <CardDescription>
                Public URL encoded into your counter QR code.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-slate-800 dark:text-slate-200 truncate select-all">
                  {data.customerUrl}
                </span>
                <Button variant="ghost" size="sm" onClick={handleCopyLink} className="h-8 shrink-0">
                  {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button variant="outline" size="sm" onClick={handleDownloadPNG} className="w-full text-xs gap-1.5">
                  <Download className="h-4 w-4" />
                  Download PNG
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownloadSVG} className="w-full text-xs gap-1.5">
                  <Download className="h-4 w-4" />
                  Download SVG
                </Button>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 text-xs text-blue-700 dark:text-blue-300 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-blue-600" /> High-Correction Density
                </p>
                <p className="text-[11px] leading-relaxed">
                  Exported with 30% error correction (Level H). It remains readable even if counter stickers suffer scratches or spills.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How Counter QR Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</div>
                <p>Customer points phone camera at counter QR code.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</div>
                <p>Customer enters mobile number and uploads PDF or Word files.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</div>
                <p>Order appears live on your dashboard with complete print specifications.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: High-Res Counter Standee / Poster Preview (Printed on window.print()) */}
        <div className="lg:col-span-7">
          <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 border-2 border-slate-300 shadow-2xl print:shadow-none print:border-none print:p-0 max-w-lg mx-auto print:max-w-none">
            
            {/* Standee Header */}
            <div className="text-center space-y-2 pb-6 border-b-2 border-slate-900">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black tracking-wider uppercase">
                <Printer className="h-3.5 w-3.5" />
                SMART PRINT HUB
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight uppercase">
                {data.shop.name}
              </h2>
              <p className="text-xs font-bold text-slate-600 tracking-wide">
                SELF-SERVICE PRINT & XEROX COUNTER
              </p>
            </div>

            {/* QR Centerpiece */}
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="p-4 bg-white rounded-3xl border-4 border-slate-900 shadow-lg mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.qr.pngDataUrl}
                  alt={`${data.shop.name} QR Code`}
                  className="h-56 w-56 sm:h-64 sm:w-64 object-contain"
                />
              </div>

              <div className="space-y-1">
                <span className="text-lg font-black text-slate-900 tracking-tight flex items-center justify-center gap-1.5">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  SCAN WITH PHONE CAMERA
                </span>
                <p className="text-xs font-medium text-slate-500">
                  No app download needed • Instant upload
                </p>
                <p className="text-[11px] font-mono text-slate-400 pt-1">
                  {data.customerUrl}
                </p>
              </div>
            </div>

            {/* Step by Step Customer Instructions */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
              <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider block text-center">
                Quick 3-Step Process
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-slate-700">
                <div className="p-2 bg-white rounded-xl border border-slate-200">
                  <div className="text-blue-600 text-xs mb-0.5">STEP 1</div>
                  Scan QR Code
                </div>
                <div className="p-2 bg-white rounded-xl border border-slate-200">
                  <div className="text-blue-600 text-xs mb-0.5">STEP 2</div>
                  Select Files & Specs
                </div>
                <div className="p-2 bg-white rounded-xl border border-slate-200">
                  <div className="text-blue-600 text-xs mb-0.5">STEP 3</div>
                  Collect Prints
                </div>
              </div>
            </div>

            {/* Standee Footer */}
            <div className="pt-6 text-center text-[10px] text-slate-400 font-medium border-t border-slate-200 mt-6">
              Powered by SMART PRINT HUB • Automated Xerox Systems
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
