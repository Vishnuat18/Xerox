import React from 'react';
import { ShieldCheck, HardDrive, Cpu, Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700 dark:text-slate-300">SMART PRINT HUB</span>
            <span>•</span>
            <span>Automated Xerox Shop & Multi-Printer Workflow Engine</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" /> Multi-Tenant Encrypted
            </span>
            <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
              <Cpu className="h-4 w-4" /> Windows Print Spooler + SNMP
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
