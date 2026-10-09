'use client';

import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  Monitor, 
  Check, 
  AlertCircle, 
  RefreshCw, 
  Copy, 
  Plus, 
  CheckCircle2, 
  Search,
  Lock,
  MoreHorizontal,
  Zap,
  Sliders,
  X
} from 'lucide-react';
import {
  LaserPrinterIcon,
  InkjetPrinterIcon,
  MfpPrinterIcon,
  DotMatrixPrinterIcon,
  ThermalPrinterIcon,
  AllInOnePrinterIcon,
  PhotocopierIcon,
  LabelPrinterIcon,
  PortablePrinterIcon,
  PrinterOnlineIcon,
  PrinterOfflineIcon,
  PrintingIcon,
  InQueueIcon,
  CompletedIcon,
  FailedIcon,
  PausedIcon,
  RetryIcon,
  CancelIcon,
  ErrorIcon,
  DocumentIcon,
  PdfFileIcon,
  ImageFileIcon,
  TextFileIcon,
  MultiplePagesIcon,
  DuplexPrintingIcon,
  OneSidedIcon,
  TwoSidedIcon,
  A4SizeIcon,
  BlackWhiteIcon,
  ColorPrintingIcon,
  NetworkPrinterIcon,
  UsbConnectionIcon,
  BluetoothIcon,
  PrinterSettingsIcon,
  CalibrationIcon,
  InkTonerIcon,
  MaintenanceIcon,
  AddPrinterIcon,
  ManagePrinterIcon,
  ViewDetailsIcon,
  SharePrinterIcon,
  ALL_PRINT_ICONS,
  getPrinterModelIcon,
  getConnectionIcon,
} from '@/components/icons/PrintIcons';

interface PrinterItem {
  id: string;
  displayName: string;
  windowsPrinterName: string;
  manufacturer?: string | null;
  model?: string | null;
  location?: string | null;
  connectionType: string;
  ipAddress?: string | null;
  supportsColor: boolean;
  supportsDuplex: boolean;
  supportedPaperSizes: string;
  status: 'ONLINE' | 'OFFLINE';
  isActive: boolean;
  currentQueueCount: number;
  activeCount: number;
}

const INITIAL_PRINTERS: PrinterItem[] = [
  {
    id: 'p1',
    displayName: 'Main Machine',
    windowsPrinterName: 'Canon iR 2520',
    model: 'Canon iR 2520',
    location: 'Shop Main Counter',
    connectionType: 'Network',
    ipAddress: '192.168.1.150',
    supportsColor: true,
    supportsDuplex: true,
    supportedPaperSizes: 'A4, A3, Legal',
    status: 'ONLINE',
    isActive: true,
    currentQueueCount: 2,
    activeCount: 1,
  },
  {
    id: 'p2',
    displayName: 'Counter 1',
    windowsPrinterName: 'HP LaserJet Pro',
    model: 'HP LaserJet Pro',
    location: 'Counter 1 Self Service',
    connectionType: 'Windows Spooler',
    ipAddress: null,
    supportsColor: false,
    supportsDuplex: true,
    supportedPaperSizes: 'A4, Legal',
    status: 'ONLINE',
    isActive: false,
    currentQueueCount: 0,
    activeCount: 0,
  },
  {
    id: 'p3',
    displayName: 'Counter 2',
    windowsPrinterName: 'Brother DCP-L2540',
    model: 'Brother DCP-L2540',
    location: 'Counter 2 Customer',
    connectionType: 'USB',
    ipAddress: null,
    supportsColor: false,
    supportsDuplex: false,
    supportedPaperSizes: 'A4, A5',
    status: 'OFFLINE',
    isActive: false,
    currentQueueCount: 0,
    activeCount: 0,
  },
  {
    id: 'p4',
    displayName: 'Accounts',
    windowsPrinterName: 'Epson L3210',
    model: 'Epson L3210',
    location: 'Back Office',
    connectionType: 'Network',
    ipAddress: '192.168.1.160',
    supportsColor: true,
    supportsDuplex: true,
    supportedPaperSizes: 'A4, Legal',
    status: 'ONLINE',
    isActive: false,
    currentQueueCount: 1,
    activeCount: 0,
  },
];

export function PrintersClient() {
  const [printers, setPrinters] = useState<PrinterItem[]>(INITIAL_PRINTERS);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'PRINTERS' | 'LOGS' | 'ICONS'>('PRINTERS');
  const [selectedIconCategory, setSelectedIconCategory] = useState<string>('ALL');
  const [selectedIconName, setSelectedIconName] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ONLINE' | 'OFFLINE'>('ALL');
  const [copiedToken, setCopiedToken] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [testPrintSuccess, setTestPrintSuccess] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  
  // New printer form state
  const [newPrinterName, setNewPrinterName] = useState('');
  const [newPrinterModel, setNewPrinterModel] = useState('');
  const [newPrinterLocation, setNewPrinterLocation] = useState('');
  const [newPrinterConnectionType, setNewPrinterConnectionType] = useState('Windows Spooler');
  const [newPrinterColor, setNewPrinterColor] = useState(false);
  const [newPrinterDuplex, setNewPrinterDuplex] = useState(true);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  const handleRotateToken = () => {
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  const handleCopyCmd = () => {
    const cmd = `cd agent && node agent.js --shop metro-xerox --token sph-agent-tok-9842a1f`;
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const handleTestPrint = (printerName: string) => {
    setTestPrintSuccess(printerName);
    setTimeout(() => setTestPrintSuccess(null), 3000);
  };

  const handleAddPrinterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPrinterName) return;

    const newP: PrinterItem = {
      id: `p-${Date.now()}`,
      displayName: newPrinterName,
      windowsPrinterName: newPrinterModel || newPrinterName,
      model: newPrinterModel || 'Generic Printer',
      location: newPrinterLocation || 'Shop Counter',
      connectionType: newPrinterConnectionType,
      supportsColor: newPrinterColor,
      supportsDuplex: newPrinterDuplex,
      supportedPaperSizes: 'A4, Legal',
      status: 'ONLINE',
      isActive: false,
      currentQueueCount: 0,
      activeCount: 0,
    };

    setPrinters((prev) => [...prev, newP]);
    setShowAddModal(false);
    setNewPrinterName('');
    setNewPrinterModel('');
    setNewPrinterLocation('');
  };

  const filteredPrinters = printers.filter((p) => {
    if (statusFilter !== 'ALL' && p.status !== statusFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        p.displayName.toLowerCase().includes(q) ||
        p.windowsPrinterName.toLowerCase().includes(q) ||
        (p.location && p.location.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* Toast Alert */}
      {testPrintSuccess && (
        <div className="fixed top-5 right-5 z-50 p-4 rounded-xl bg-zinc-950 text-white shadow-2xl border border-zinc-800 flex items-center gap-3 animate-in fade-in slide-from-top-4">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <p className="text-xs font-medium">
            Test print dispatched to <strong>{testPrintSuccess}</strong>!
          </p>
        </div>
      )}

      {selectedIconName && (
        <div className="fixed bottom-5 right-5 z-50 p-4 rounded-xl bg-zinc-900 text-white shadow-2xl border border-zinc-700 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          <p className="text-xs font-medium">
            Icon active &amp; ready: <strong>{selectedIconName}</strong>
          </p>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Printers &amp; Windows Agent
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Monitor Windows agents and manage multiple printers across your shop counters.
          </p>
        </div>

        {/* Top Right Action Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleRefresh}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 transition-all shadow-2xs disabled:opacity-50"
          >
            <RetryIcon className={`h-4 w-4 text-zinc-500 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white transition-all shadow-sm"
          >
            <AddPrinterIcon className="h-4 w-4" />
            <span>Add Printer</span>
          </button>
        </div>
      </div>

      {/* TOP AGENT STATUS CARD */}
      <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        
        {/* Left Side: Agent Telemetry Specs */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center text-zinc-800 shrink-0">
              <Monitor className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="text-sm font-bold text-zinc-900">
                  Windows Agent (Counter-PC-Win11)
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </span>
              </div>
            </div>
          </div>

          {/* 6 Metric Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-1 text-xs">
            <div>
              <span className="text-zinc-400 block text-[11px]">Host name</span>
              <span className="font-bold text-zinc-900 text-xs">XEROX-DESKTOP-01</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[11px]">IP Address</span>
              <span className="font-bold text-zinc-900 text-xs">192.168.1.100</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[11px]">Agent Version</span>
              <span className="font-bold text-zinc-900 text-xs">v1.2.3</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[11px]">Last Seen</span>
              <span className="font-bold text-emerald-600 text-xs">2 sec ago</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[11px]">Heartbeat</span>
              <span className="font-bold text-emerald-600 text-xs">18 ms</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[11px]">Pending Jobs</span>
              <span className="font-bold text-emerald-600 text-xs">0</span>
            </div>
          </div>
        </div>

        {/* Right Side: Agent Token & Install Commands */}
        <div className="lg:col-span-4 space-y-3 lg:border-l lg:border-zinc-100 lg:pl-6">
          <div>
            <span className="text-xs font-semibold text-zinc-500 block mb-1">
              Agent Token
            </span>
            <div className="relative">
              <input
                type="password"
                readOnly
                value="sph-agent-tok-9842a1f99"
                className="w-full pl-3 pr-16 py-2 rounded-xl border border-zinc-200 bg-zinc-50/70 text-xs font-mono text-zinc-700 focus:outline-none"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleRotateToken}
                  className="p-1 text-zinc-400 hover:text-zinc-900 transition-colors"
                  title="Copy Token"
                >
                  {copiedToken ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={handleRotateToken}
              className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-all"
            >
              Rotate Token
            </button>
            <button
              type="button"
              onClick={handleCopyCmd}
              className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-all inline-flex items-center gap-1.5"
            >
              {copiedCmd ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>Copy Install Command</span>
            </button>
          </div>

          {/* Quick Hardware Status Indicators */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-zinc-500 border-t border-zinc-100">
            <span className="inline-flex items-center gap-1">
              <CalibrationIcon className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
              Calibrated
            </span>
            <span className="inline-flex items-center gap-1">
              <InkTonerIcon className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
              Ink OK (92%)
            </span>
            <span className="inline-flex items-center gap-1">
              <MaintenanceIcon className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
              Cleaned
            </span>
            <span className="inline-flex items-center gap-1">
              <SharePrinterIcon className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
              Shared
            </span>
          </div>
        </div>

      </div>

      {/* MIDDLE CONTROLS BAR: Pill Tabs + Search/Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        {/* Left: Pill Tabs */}
        <div className="inline-flex p-1 rounded-full bg-zinc-100/90 border border-zinc-200/80 text-xs gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('PRINTERS')}
            className={`px-4 py-1.5 rounded-full font-semibold transition-all ${
              activeTab === 'PRINTERS'
                ? 'bg-zinc-900 text-white shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Printers ({printers.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('LOGS')}
            className={`px-4 py-1.5 rounded-full font-semibold transition-all ${
              activeTab === 'LOGS'
                ? 'bg-zinc-900 text-white shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Agent Logs
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ICONS')}
            className={`px-4 py-1.5 rounded-full font-semibold transition-all inline-flex items-center gap-1.5 ${
              activeTab === 'ICONS'
                ? 'bg-zinc-900 text-white shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <span>Reference Icons</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              activeTab === 'ICONS' ? 'bg-zinc-700 text-white' : 'bg-zinc-200 text-zinc-700'
            }`}>
              41
            </span>
          </button>
        </div>

        {/* Right: Search + Status Filter */}
        {activeTab === 'PRINTERS' && (
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search printers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-52 pl-8 pr-3 py-1.5 rounded-xl border border-zinc-200 bg-white text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900/10"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-3.5 py-1.5 rounded-xl border border-zinc-200 bg-white text-xs text-zinc-700 focus:outline-none font-medium"
            >
              <option value="ALL">All Status</option>
              <option value="ONLINE">Online</option>
              <option value="OFFLINE">Offline</option>
            </select>
          </div>
        )}

        {activeTab === 'ICONS' && (
          <div className="flex items-center gap-2">
            <select
              value={selectedIconCategory}
              onChange={(e) => setSelectedIconCategory(e.target.value)}
              className="px-3.5 py-1.5 rounded-xl border border-zinc-200 bg-white text-xs text-zinc-700 focus:outline-none font-medium"
            >
              <option value="ALL">All Categories (41)</option>
              <option value="Printers">Row 1: Printers (9)</option>
              <option value="Status & Process">Row 2: Status &amp; Process (10)</option>
              <option value="Document & Specs">Row 3: Document &amp; Specs (11)</option>
              <option value="Connectivity & Tools">Row 4: Connectivity &amp; Tools (11)</option>
            </select>
          </div>
        )}
      </div>

      {/* PRINTERS DATA TABLE */}
      {activeTab === 'PRINTERS' && (
        <div className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden shadow-xs">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-[40px_1.5fr_1fr_1fr_1.2fr_0.8fr_1fr_0.6fr_0.6fr_0.5fr_0.5fr_1fr] gap-0 px-4 py-3 bg-zinc-50/70 border-b border-zinc-200/80 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider items-center">
            <span>#</span>
            <span>Printer Name</span>
            <span>Model</span>
            <span>Location</span>
            <span>Connection</span>
            <span>Status</span>
            <span>Paper Sizes</span>
            <span>Color</span>
            <span>Duplex</span>
            <span>Queue</span>
            <span>Active</span>
            <span className="text-right">Actions</span>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-zinc-100">
            {filteredPrinters.map((printer, index) => {
              const ModelIcon = getPrinterModelIcon(printer.windowsPrinterName || printer.model);
              const ConnIcon = getConnectionIcon(printer.connectionType);

              return (
                <div 
                  key={printer.id}
                  className="grid grid-cols-1 md:grid-cols-[40px_1.5fr_1fr_1fr_1.2fr_0.8fr_1fr_0.6fr_0.6fr_0.5fr_0.5fr_1fr] gap-0 px-4 py-3.5 hover:bg-zinc-50/50 transition-colors items-center text-xs"
                >
                  {/* # */}
                  <span className="hidden md:block font-mono text-zinc-400">
                    {index + 1}
                  </span>

                  {/* Printer Name */}
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 flex items-center justify-center shrink-0">
                      <ModelIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 leading-tight">
                        {printer.displayName}
                      </h4>
                      <p className="text-[11px] text-zinc-400 leading-tight">
                        {printer.windowsPrinterName}
                      </p>
                    </div>
                  </div>

                  {/* Model */}
                  <div className="text-zinc-600 font-medium">
                    {printer.model || 'Standard'}
                  </div>

                  {/* Location */}
                  <div className="text-zinc-600">
                    <span className="block font-medium text-zinc-800">{printer.location?.split(' ')[0] || 'Shop'}</span>
                    <span className="text-[11px] text-zinc-400">{printer.location?.split(' ').slice(1).join(' ') || 'Counter'}</span>
                  </div>

                  {/* Connection */}
                  <div>
                    <span className="font-medium text-zinc-800 flex items-center gap-1.5">
                      <ConnIcon className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
                      {printer.connectionType}
                    </span>
                    {printer.ipAddress && (
                      <span className="text-[11px] font-mono text-zinc-400 pl-5">{printer.ipAddress}</span>
                    )}
                  </div>

                  {/* Status */}
                  <div>
                    {printer.status === 'ONLINE' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                        <PrinterOnlineIcon className="h-4 w-4 shrink-0" />
                        Online
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200/80">
                        <PrinterOfflineIcon className="h-4 w-4 shrink-0" />
                        Offline
                      </span>
                    )}
                  </div>

                  {/* Paper Sizes */}
                  <div className="font-medium text-zinc-700 flex items-center gap-1">
                    <A4SizeIcon className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                    <span>{printer.supportedPaperSizes}</span>
                  </div>

                  {/* Color */}
                  <div>
                    {printer.supportsColor ? (
                      <span className="font-semibold text-zinc-800 flex items-center gap-1">
                        <ColorPrintingIcon className="h-4 w-4 shrink-0" />
                        <span>Color</span>
                      </span>
                    ) : (
                      <span className="text-zinc-500 flex items-center gap-1">
                        <BlackWhiteIcon className="h-4 w-4 text-zinc-400 shrink-0" />
                        <span>B&amp;W</span>
                      </span>
                    )}
                  </div>

                  {/* Duplex */}
                  <div>
                    {printer.supportsDuplex ? (
                      <span className="font-semibold text-emerald-700 flex items-center gap-1">
                        <TwoSidedIcon className="h-4 w-4 shrink-0" />
                        <span>Duplex</span>
                      </span>
                    ) : (
                      <span className="text-zinc-400 flex items-center gap-1">
                        <OneSidedIcon className="h-4 w-4 shrink-0" />
                        <span>1-Sided</span>
                      </span>
                    )}
                  </div>

                  {/* Queue Count */}
                  <div className="font-bold text-zinc-900 font-mono">
                    {printer.currentQueueCount}
                  </div>

                  {/* Active Count */}
                  <div className="font-bold text-zinc-900 font-mono">
                    {printer.activeCount}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5 justify-end">
                    <button
                      type="button"
                      onClick={() => handleTestPrint(printer.displayName)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-semibold text-zinc-700 transition-colors shadow-2xs"
                    >
                      <PrintingIcon className="h-3.5 w-3.5 text-zinc-600 shrink-0" />
                      <span>Test</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedIconName(`${printer.displayName} Settings`)}
                      className="h-7 w-7 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-400 hover:text-zinc-900 flex items-center justify-center transition-colors"
                      title="Printer Settings"
                    >
                      <PrinterSettingsIcon className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedIconName(`${printer.displayName} Calibration`)}
                      className="h-7 w-7 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-400 hover:text-zinc-900 flex items-center justify-center transition-colors"
                      title="Calibrate Printer"
                    >
                      <CalibrationIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* REFERENCE ICONS SHOWCASE VIEW (Exact 41 Icons from Reference Image) */}
      {activeTab === 'ICONS' && (
        <div className="space-y-6">
          <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-zinc-900">
                  Reference Print &amp; Hardware Icons (41 Total)
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Vector SVGs created from your reference image. Click any icon to inspect, copy, or trigger its workflow.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-900 text-white shadow-2xs">
                Active &amp; Workable
              </span>
            </div>
          </div>

          {/* 4 Rows Breakdown */}
          {[1, 2, 3, 4].map((rowNum) => {
            const rowTitles: Record<number, { title: string; subtitle: string }> = {
              1: { title: 'Row 1: Printer Hardware Types', subtitle: '9 Physical Printer Devices (Laser, Inkjet, MFP, Photocopier, etc.)' },
              2: { title: 'Row 2: Status & Process Actions', subtitle: '10 Job States (Online, Offline, Printing, Queued, Completed, etc.)' },
              3: { title: 'Row 3: Document & Print Specifications', subtitle: '11 File and Paper Specs (PDF, Image, Duplex, A4, B&W, Color, etc.)' },
              4: { title: 'Row 4: Connectivity & Hardware Management', subtitle: '11 Network & Tool Controls (Wi-Fi, USB, Bluetooth, Ink/Toner, etc.)' },
            };

            const rowIcons = ALL_PRINT_ICONS.filter((item) => {
              if (selectedIconCategory !== 'ALL' && item.category !== selectedIconCategory) {
                return false;
              }
              return item.row === rowNum;
            });

            if (rowIcons.length === 0) return null;

            return (
              <div key={rowNum} className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">{rowTitles[rowNum].title}</h4>
                    <p className="text-[11px] text-zinc-500">{rowTitles[rowNum].subtitle}</p>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {rowIcons.length} icons
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {rowIcons.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSelectedIconName(item.name);
                          setTimeout(() => setSelectedIconName(null), 2500);
                        }}
                        className="p-4 rounded-2xl border border-zinc-200/90 bg-white hover:border-zinc-400 hover:shadow-md transition-all text-center flex flex-col items-center justify-between group space-y-3"
                      >
                        <div className="h-12 w-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 group-hover:scale-110 group-hover:bg-zinc-100 transition-all">
                          <IconComp className="h-7 w-7" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-zinc-900 block leading-tight">
                            {item.name}
                          </span>
                          <span className="text-[10px] text-zinc-400 block mt-0.5 leading-tight line-clamp-2">
                            {item.description}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                          Workable
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* AGENT LOGS VIEW */}
      {activeTab === 'LOGS' && (
        <div className="bg-zinc-900 text-zinc-200 rounded-2xl p-5 border border-zinc-800 font-mono text-xs space-y-2">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-400 text-[11px]">
            <span>[WebSocket] Local Windows Spooler Agent Log Output</span>
            <span className="text-emerald-400">STATUS: CONNECTED</span>
          </div>
          <div className="space-y-1.5 pt-2 text-[11px] text-zinc-300">
            <p className="text-zinc-500">[12:00:01 AM] Agent connected to ws://localhost:3000/api/v1/agent/ws (Token authenticated)</p>
            <p className="text-emerald-400">[12:00:02 AM] Enumerated 4 Win32 printers: Canon iR 2520, HP LaserJet Pro, Brother DCP-L2540, Epson L3210</p>
            <p className="text-zinc-300">[12:00:15 AM] Heartbeat ping (18ms latency)</p>
            <p className="text-blue-400">[12:01:04 AM] Received job #102 for Canon iR 2520 (Pages: 12, Duplex: True, Color: False)</p>
            <p className="text-emerald-400">[12:01:05 AM] Silent spooling completed successfully (DEVMODE paper size A4)</p>
          </div>
        </div>
      )}

      {/* ADD PRINTER MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl border border-zinc-200 max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <h3 className="text-base font-bold text-zinc-900">Add New Printer</h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleAddPrinterSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-zinc-800 mb-1">Printer Display Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Counter 3 Fast Print"
                  value={newPrinterName}
                  onChange={(e) => setNewPrinterName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-zinc-800 mb-1">Windows Printer Driver / Model</label>
                <input
                  type="text"
                  placeholder="e.g. HP LaserJet Pro M404"
                  value={newPrinterModel}
                  onChange={(e) => setNewPrinterModel(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-zinc-800 mb-1">Shop Location</label>
                <input
                  type="text"
                  placeholder="e.g. Counter 3 Self Service"
                  value={newPrinterLocation}
                  onChange={(e) => setNewPrinterLocation(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-zinc-800 mb-1">Connection Type</label>
                <select
                  value={newPrinterConnectionType}
                  onChange={(e) => setNewPrinterConnectionType(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 text-xs text-zinc-900 focus:outline-none font-medium"
                >
                  <option value="Windows Spooler">Windows Spooler</option>
                  <option value="Network">Network IP</option>
                  <option value="USB">USB Direct</option>
                </select>
              </div>

              <div className="flex items-center gap-6 pt-1">
                <label className="flex items-center gap-2 cursor-pointer font-medium text-zinc-800">
                  <input
                    type="checkbox"
                    checked={newPrinterColor}
                    onChange={(e) => setNewPrinterColor(e.target.checked)}
                    className="rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                  />
                  <span>Supports Color</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer font-medium text-zinc-800">
                  <input
                    type="checkbox"
                    checked={newPrinterDuplex}
                    onChange={(e) => setNewPrinterDuplex(e.target.checked)}
                    className="rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                  />
                  <span>Supports Duplex</span>
                </label>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-zinc-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2 rounded-xl border border-zinc-200 text-zinc-700 font-semibold hover:bg-zinc-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-zinc-900 text-white font-semibold hover:bg-zinc-800 shadow-xs"
                >
                  Save Printer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

