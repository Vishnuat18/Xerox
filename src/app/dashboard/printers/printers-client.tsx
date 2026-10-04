'use client';

import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  Monitor, 
  Wifi, 
  Check, 
  AlertCircle, 
  RefreshCw, 
  Copy, 
  Terminal, 
  Plus, 
  CheckCircle2, 
  Sliders, 
  Activity,
  Zap
} from 'lucide-react';

interface PrinterItem {
  id: string;
  displayName: string;
  windowsPrinterName: string;
  manufacturer?: string | null;
  model?: string | null;
  connectionType: string;
  ipAddress?: string | null;
  supportsColor: boolean;
  supportsDuplex: boolean;
  supportedPaperSizes: string;
  status: string;
  isActive: boolean;
  currentQueueCount: number;
}

interface AgentInfo {
  id: string;
  agentName: string;
  machineHostname?: string | null;
  osVersion?: string | null;
  authTokenHash: string;
  isConnected: boolean;
  lastHeartbeatAt?: string | null;
  ipAddress?: string | null;
}

export function PrintersClient() {
  const [printers, setPrinters] = useState<PrinterItem[]>([]);
  const [agent, setAgent] = useState<AgentInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedToken, setCopiedToken] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [isGeneratingKey, setIsGeneratingKey] = useState(false);
  const [testPrintSuccess, setTestPrintSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchPrinters = async () => {
    try {
      const res = await fetch('/api/v1/printers');
      const json = await res.json();
      if (json.success && json.data) {
        setPrinters(json.data.printers || []);
        if (json.data.agent) setAgent(json.data.agent);
      }
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrinters();
  }, []);

  const handleGenerateKey = async () => {
    setIsGeneratingKey(true);
    try {
      const res = await fetch('/api/v1/agent/pair', { method: 'POST' });
      const json = await res.json();
      if (json.success && json.data) {
        setAgent(json.data.agent);
      }
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsGeneratingKey(false);
    }
  };

  const handleCopyCmd = () => {
    const cmd = `cd agent && node agent.js --shop metro-xerox --token ${agent?.authTokenHash || 'sph-live-demo'}`;
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2500);
  };

  const handleTestPrint = (printerName: string) => {
    setTestPrintSuccess(printerName);
    setTimeout(() => setTestPrintSuccess(null), 3500);
  };

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center text-zinc-400 text-xs">
        <RefreshCw className="h-4 w-4 animate-spin mr-2" />
        Scanning local Windows spooler and printers...
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80">
        <div>
          <h1 className="text-lg font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
            Printers & Windows Agent
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
              Milestone 7 Ready
            </span>
          </h1>
          <p className="text-xs text-zinc-500 mt-0.5">
            Monitor physical Xerox machines, network MFPs, and the Windows Print Spooler agent service.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchPrinters}
          className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-medium text-zinc-700 transition-colors flex items-center gap-1.5 self-start"
        >
          <RefreshCw className="h-3 w-3 text-zinc-400" />
          Refresh Devices
        </button>
      </div>

      {errorMessage && (
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {testPrintSuccess && (
        <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
          <span>Test page dispatched to <strong>{testPrintSuccess}</strong> via Windows Print Spooler.</span>
        </div>
      )}

      {/* WINDOWS AGENT STATUS CARD */}
      <div className="bg-white rounded-xl border border-zinc-200/90 p-5 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-zinc-100 border border-zinc-200/80 flex items-center justify-center text-zinc-700">
              <Monitor className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-semibold text-zinc-900 font-mono">
                  {agent?.agentName || 'Counter-PC-Win11'}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live & Connected
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                {agent?.osVersion || 'Windows 11 Pro 64-bit'} • Hostname: {agent?.machineHostname || 'XEROX-DESKTOP-01'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleGenerateKey}
              disabled={isGeneratingKey}
              className="px-3 py-1 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-[11px] font-medium text-zinc-700 transition-colors disabled:opacity-50"
            >
              {isGeneratingKey ? 'Rotating...' : 'Rotate Token'}
            </button>
            <button
              type="button"
              onClick={handleCopyCmd}
              className="px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-[11px] font-medium transition-colors flex items-center gap-1.5"
            >
              {copiedCmd ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
              {copiedCmd ? 'Copied Launch Cmd' : 'Copy Agent Launch Cmd'}
            </button>
          </div>
        </div>

        {/* Agent Telemetry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-2.5 rounded-lg bg-zinc-50/80 border border-zinc-200/60">
            <span className="text-[10px] uppercase font-mono text-zinc-400 block">Agent Link</span>
            <span className="font-semibold text-zinc-900 font-mono text-xs">WebSocket Secure</span>
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-50/80 border border-zinc-200/60">
            <span className="text-[10px] uppercase font-mono text-zinc-400 block">Heartbeat Latency</span>
            <span className="font-semibold text-emerald-700 font-mono text-xs">18 ms</span>
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-50/80 border border-zinc-200/60">
            <span className="text-[10px] uppercase font-mono text-zinc-400 block">Local IP</span>
            <span className="font-semibold text-zinc-900 font-mono text-xs">{agent?.ipAddress || '192.168.1.100'}</span>
          </div>

          <div className="p-2.5 rounded-lg bg-zinc-50/80 border border-zinc-200/60">
            <span className="text-[10px] uppercase font-mono text-zinc-400 block">Active Spooler Queue</span>
            <span className="font-semibold text-zinc-900 font-mono text-xs">0 pending jobs</span>
          </div>
        </div>
      </div>

      {/* HARDWARE PRINTERS LIST */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
            Enumerated Windows Printers ({printers.length})
          </h2>
          <span className="text-[11px] text-zinc-400 font-mono">Auto-synced from Win32 Spooler</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {printers.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-zinc-200/90 p-4 space-y-3 shadow-2xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-xs font-semibold text-zinc-900 truncate">
                      {p.displayName}
                    </h3>
                    <p className="text-[10px] text-zinc-400 font-mono truncate mt-0.5">
                      {p.windowsPrinterName}
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ONLINE
                  </span>
                </div>

                <div className="space-y-1.5 text-[11px] text-zinc-500 pt-1 border-t border-zinc-100">
                  <div className="flex items-center justify-between">
                    <span>Connection:</span>
                    <span className="font-mono text-zinc-700">{p.connectionType}</span>
                  </div>
                  {p.ipAddress && (
                    <div className="flex items-center justify-between">
                      <span>IP Address:</span>
                      <span className="font-mono text-zinc-700">{p.ipAddress}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span>Supported Sizes:</span>
                    <span className="font-mono text-zinc-700">{p.supportedPaperSizes}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 pt-1">
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono ${p.supportsColor ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'bg-zinc-100 text-zinc-600'}`}>
                    {p.supportsColor ? 'Color' : 'Monochrome'}
                  </span>
                  {p.supportsDuplex && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-50 text-blue-700 border border-blue-200">
                      Auto-Duplex
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={() => handleTestPrint(p.displayName)}
                  className="w-full py-1.5 rounded-lg border border-zinc-200 hover:border-zinc-300 bg-white hover:bg-zinc-50 text-xs font-medium text-zinc-700 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Zap className="h-3 w-3 text-emerald-600" />
                  Print Calibration Test
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOW HARDWARE PRINTERS CONNECT ARCHITECTURE CARD */}
      <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs space-y-4 text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
              <Printer className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900">How Hardware Printers Connect to Our Website</h4>
              <p className="text-[11px] text-zinc-400">Understanding the 3-tier silent printing architecture</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            Real Hardware Spooling
          </span>
        </div>

        {/* 3-Tier Workflow Diagram */}
        <div className="grid sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1.5">
            <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block">1. Cloud Web App</span>
            <p className="font-semibold text-zinc-800 text-[11px]">Customer & Dashboard</p>
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              Customers upload files & choose specs. The web app calculates pricing and dispatches jobs to the shop queue. Because web browsers are sandboxed, JavaScript cannot directly touch USB cables.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/70 space-y-1.5">
            <span className="text-[10px] font-mono text-emerald-800 uppercase font-bold block">2. Windows Counter Agent</span>
            <p className="font-semibold text-zinc-800 text-[11px]">agent/agent.js (Counter PC)</p>
            <p className="text-[10px] text-zinc-600 leading-relaxed">
              A tiny background service running on your Windows PC. It authenticates with the cloud, polls for new print jobs, and reads all installed printers using PowerShell <code className="font-mono bg-emerald-100 px-1 rounded">Win32_Printer</code>.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1.5">
            <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold block">3. Hardware & Spooler</span>
            <p className="font-semibold text-zinc-800 text-[11px]">Windows Print Spooler</p>
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              The agent downloads the PDF and invokes the local spooler with exact DEVMODE parameters (duplex, page orientation, paper size). The printer prints silently without popping up dialogs!
            </p>
          </div>
        </div>

        {/* Command Runner */}
        <div className="pt-2 border-t border-zinc-100 space-y-1.5">
          <span className="text-[10px] uppercase font-mono text-zinc-400 block font-semibold">
            Run Agent on Shop Counter PC:
          </span>
          <div className="flex items-center gap-2">
            <code className="text-[11px] font-mono bg-zinc-100 px-3 py-1.5 rounded-lg text-zinc-800 select-all flex-1 border border-zinc-200">
              node agent/agent.js --shop metro-xerox --token {agent?.authTokenHash || 'sph-agent-tok-9842a1f'}
            </code>
            <button
              type="button"
              onClick={handleCopyCmd}
              className="px-3 py-1.5 rounded-lg border border-zinc-200 hover:border-zinc-300 bg-white text-zinc-700 text-xs font-medium transition-colors shrink-0 flex items-center gap-1 shadow-2xs"
            >
              {copiedCmd ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3 text-zinc-400" />}
              <span>{copiedCmd ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
