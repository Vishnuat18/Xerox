import React from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-100/50 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-800">SMART PRINT HUB</span>
            <span>•</span>
            <span>Automated Xerox Shop & Multi-Printer Workflow Engine</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <ShieldCheck className="h-4 w-4 text-emerald-600" /> Vercel Cloud Ready
            </span>
            <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
              <Cpu className="h-4 w-4 text-zinc-500" /> Windows Spooler & SNMP Aware
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
