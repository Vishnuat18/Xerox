'use client';

import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Printer, 
  Copy, 
  Check, 
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
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin h-5 w-5 border-2 border-zinc-900 border-t-transparent rounded-full" />
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
      
      {/* Header Controls (Hidden during printing) */}
      <div className="print:hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200/70">
        <div>
          <h1 className="text-base font-semibold text-zinc-900 tracking-tight">
            Counter QR Standee
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Print and display on your counter for customer self-service uploads.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 text-zinc-400" />}
            {copied ? 'Copied' : 'Copy Link'}
          </button>

          <button
            onClick={handleDownloadPNG}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 transition-colors"
          >
            <Download className="h-3.5 w-3.5 text-zinc-400" />
            PNG
          </button>

          <button
            onClick={handlePrintStandee}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-white transition-all shadow-2xs"
          >
            <Printer className="h-3.5 w-3.5" />
            Print A4 Standee
          </button>
        </div>
      </div>

      {/* Standee Preview / Printable Canvas */}
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl border border-zinc-200/80 p-8 sm:p-10 shadow-sm max-w-md w-full text-center space-y-6 print:border-none print:shadow-none print:p-0 print:max-w-none">
          
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 block">
              Self-Service Print Counter
            </span>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 uppercase">
              {data.shop.name}
            </h2>
          </div>

          {/* QR Centerpiece */}
          <div className="flex flex-col items-center justify-center">
            <div className="p-3 bg-white rounded-xl border border-zinc-200 inline-block shadow-2xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.qr.pngDataUrl}
                alt={`${data.shop.name} QR Code`}
                className="h-52 w-52 object-contain"
              />
            </div>

            <div className="mt-4 space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900">
                <Smartphone className="h-3.5 w-3.5 text-emerald-600" />
                Scan with Phone Camera
              </div>
              <p className="text-[11px] font-mono text-zinc-400">
                {data.customerUrl}
              </p>
            </div>
          </div>

          {/* 3 Step Instruction Strip */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-zinc-100 text-[11px] text-zinc-500">
            <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
              <span className="font-semibold text-zinc-900 block mb-0.5">1. Scan</span>
              Point camera
            </div>
            <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
              <span className="font-semibold text-zinc-900 block mb-0.5">2. Upload</span>
              Choose files & specs
            </div>
            <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
              <span className="font-semibold text-zinc-900 block mb-0.5">3. Collect</span>
              Pick up at counter
            </div>
          </div>

          <div className="text-[10px] text-zinc-400 pt-2 font-mono">
            Smart Print Hub • No App Required
          </div>

        </div>
      </div>

    </div>
  );
}
