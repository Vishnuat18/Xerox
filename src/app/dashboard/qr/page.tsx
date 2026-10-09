'use client';

import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink,
  QrCode,
  FileText,
  Smartphone
} from 'lucide-react';

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

  const handlePrintStandee = () => {
    window.print();
  };

  if (isLoading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center space-y-3">
        <div className="animate-spin h-7 w-7 border-2 border-zinc-900 border-t-transparent rounded-full" />
        <p className="text-xs font-medium text-zinc-500">Loading Counter QR...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-20 text-center text-xs text-zinc-500">
        Failed to load QR code data.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Header Controls Bar (Hidden during window.print()) */}
      <div className="print:hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Counter QR Standee
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Print and display on your counter for customer self-service uploads.
          </p>
        </div>

        {/* Top Right Action Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 transition-all shadow-2xs"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <ExternalLink className="h-4 w-4 text-zinc-500" />}
            <span>{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>

          <button
            onClick={handleDownloadPNG}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 transition-all shadow-2xs"
          >
            <Download className="h-4 w-4 text-zinc-500" />
            <span>Download PNG</span>
          </button>

          <button
            onClick={handlePrintStandee}
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white transition-all shadow-sm"
          >
            <Printer className="h-4 w-4" />
            <span>Print A4 Standee</span>
          </button>
        </div>
      </div>

      {/* Main Dual Card Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* ======================================================== */}
        {/* LEFT CARD: Counter QR Preview Standee Box               */}
        {/* ======================================================== */}
        <div className="lg:col-span-7 bg-white border border-zinc-200/90 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col items-center justify-center text-center print:border-none print:shadow-none print:p-0 print:w-full">
          
          {/* Subheader Title */}
          <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 block font-sans">
            SELF-SERVICE PRINT COUNTER
          </span>
          
          {/* Shop Title */}
          <h2 className="text-lg sm:text-xl font-black tracking-tight text-zinc-900 uppercase text-center mt-1 max-w-lg leading-tight">
            {data.shop.name}
          </h2>

          {/* QR Code Centerpiece */}
          <div className="my-4 p-3 bg-white border border-zinc-200 rounded-2xl inline-block shadow-2xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.qr.pngDataUrl}
              alt={`${data.shop.name} QR Code`}
              className="h-48 w-48 sm:h-56 sm:w-56 object-contain"
            />
          </div>

          {/* Scan Phone Camera Banner */}
          <div className="flex flex-col items-center space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900">
              <FileText className="h-3.5 w-3.5 text-zinc-700" />
              <span>Scan with Phone Camera</span>
            </div>

            {/* URL Copy Pill Container */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-100/80 border border-zinc-200/80 text-[11px] font-mono text-zinc-600 max-w-full">
              <span className="truncate">{data.customerUrl}</span>
              <button
                onClick={handleCopyLink}
                className="text-zinc-400 hover:text-zinc-900 transition-colors shrink-0"
                title="Copy customer link"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* RIGHT CARD: How It Works Step-by-Step Guidance           */}
        {/* ======================================================== */}
        <div className="lg:col-span-5 bg-white border border-zinc-200/90 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between print:hidden">
          <h3 className="text-base font-bold text-zinc-900 mb-4 tracking-tight">
            How it works?
          </h3>

          <div className="space-y-0 my-auto">
            {/* Step 1 */}
            <div className="flex items-start gap-3.5">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-xl bg-zinc-100/90 border border-zinc-200/60 flex items-center justify-center text-zinc-800 shrink-0">
                  <QrCode className="h-4.5 w-4.5" />
                </div>
                <div className="w-0.5 bg-zinc-200 h-8 my-0.5" />
              </div>
              <div className="pt-1">
                <h4 className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                  <span className="text-emerald-500">•</span> Scan
                </h4>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  Point camera at QR code
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3.5">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-xl bg-zinc-100/90 border border-zinc-200/60 flex items-center justify-center text-zinc-800 shrink-0">
                  <FileText className="h-4.5 w-4.5" />
                </div>
                <div className="w-0.5 bg-zinc-200 h-8 my-0.5" />
              </div>
              <div className="pt-1">
                <h4 className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                  <span className="text-emerald-500">•</span> Upload
                </h4>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  Choose files & set print options
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3.5">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-xl bg-zinc-100/90 border border-zinc-200/60 flex items-center justify-center text-zinc-800 shrink-0">
                  <Printer className="h-4.5 w-4.5" />
                </div>
              </div>
              <div className="pt-1">
                <h4 className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                  <span className="text-emerald-500">•</span> Collect
                </h4>
                <p className="text-[11px] text-zinc-500 mt-0.5">
                  Pick up at counter
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

