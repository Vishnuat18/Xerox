'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Wallet,
  TrendingUp,
  Receipt,
  CreditCard,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Plus,
  Trash2,
  Printer,
  FileText,
  Search,
  Filter,
  RefreshCw,
  Send,
  HelpCircle,
  Download,
  Percent,
  Layers,
  Sparkles,
  Calculator,
  ChevronRight,
  Sliders
} from 'lucide-react';

interface FinanceSummary {
  totalOrders: number;
  totalGrossRevenue: number;
  cashRevenue: number;
  upiRevenue: number;
  pendingRevenue: number;
  totalPagesCount: number;
  bwPagesCount: number;
  colorPagesCount: number;
  today: {
    grossRevenue: number;
    cashRevenue: number;
    upiRevenue: number;
    pendingRevenue: number;
  };
}

interface KhataCustomer {
  customerId: string;
  customerName: string;
  customerPhone: string;
  pendingAmount: number;
  orderCount: number;
  orders: {
    id: string;
    orderNumber: string;
    amount: number;
    date: string;
    pages: number;
  }[];
}

interface TransactionItem {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  amount: number;
  paymentStatus: string;
  paymentMethod: string;
  totalPages: number;
  createdAt: string;
}

interface ExpenseItem {
  id: string;
  category: 'PAPER' | 'TONER' | 'ELECTRICITY' | 'MAINTENANCE' | 'SALARY' | 'OTHER';
  title: string;
  amount: number;
  paymentMode: 'CASH' | 'UPI';
  date: string;
  notes?: string;
}

export function FinanceClient() {
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'KHATA' | 'CPP' | 'EXPENSES' | 'SETTLEMENT'>('OVERVIEW');
  const [range, setRange] = useState<'today' | 'week' | 'month' | 'all'>('today');
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Summary & Ledger Data
  const [summary, setSummary] = useState<FinanceSummary | null>(null);
  const [khataCustomers, setKhataCustomers] = useState<KhataCustomer[]>([]);
  const [transactions, setTransactions] = useState<TransactionItem[]>([]);
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  // Search & Filters
  const [khataSearch, setKhataSearch] = useState('');
  const [txSearch, setTxSearch] = useState('');

  // Unit Economics State (Cost per page calculator)
  const [reamPrice, setReamPrice] = useState(240); // ₹240 for 500 sheets
  const [bwTonerPrice, setBwTonerPrice] = useState(1200); // ₹1,200 for 8,000 pages
  const [bwTonerYield, setBwTonerYield] = useState(8000);
  const [colorCartridgePrice, setColorCartridgePrice] = useState(6000); // ₹6,000 for 5,000 pages
  const [colorYield, setColorYield] = useState(5000);
  const [overheadPerSheet, setOverheadPerSheet] = useState(0.15); // electricity & maintenance
  const [bwSellingPrice, setBwSellingPrice] = useState(2.0);
  const [colorSellingPrice, setColorSellingPrice] = useState(10.0);

  // New Expense Modal State
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [newExpTitle, setNewExpTitle] = useState('');
  const [newExpAmount, setNewExpAmount] = useState('');
  const [newExpCategory, setNewExpCategory] = useState<'PAPER' | 'TONER' | 'ELECTRICITY' | 'MAINTENANCE' | 'SALARY' | 'OTHER'>('PAPER');
  const [newExpMode, setNewExpMode] = useState<'CASH' | 'UPI'>('CASH');
  const [newExpNotes, setNewExpNotes] = useState('');
  const [submittingExpense, setSubmittingExpense] = useState(false);

  // Day-End Settlement State
  const [openingFloat, setOpeningFloat] = useState(500); // ₹500 change in till
  const [physicalCashCount, setPhysicalCashCount] = useState<number | ''>('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const loadFinanceData = async (isManual = false) => {
    if (isManual) setIsRefreshing(true);
    try {
      const [sumRes, expRes] = await Promise.all([
        fetch(`/api/v1/finance/summary?range=${range}`),
        fetch('/api/v1/finance/expenses'),
      ]);

      const sumJson = await sumRes.json();
      const expJson = await expRes.json();

      if (sumJson.success && sumJson.data) {
        setSummary(sumJson.data.summary);
        setKhataCustomers(sumJson.data.khataCustomers || []);
        setTransactions(sumJson.data.transactions || []);
      }

      if (expJson.success && expJson.data) {
        setExpenses(expJson.data.expenses || []);
        setTotalExpenses(expJson.data.totalExpenses || 0);
      }
    } catch (err) {
      console.error('Failed to load finance data:', err);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadFinanceData();
  }, [range]);

  // Unit Economics Calculations
  const paperCostPerSheet = useMemo(() => reamPrice / 500, [reamPrice]);
  const bwTonerCostPerSheet = useMemo(() => bwTonerPrice / bwTonerYield, [bwTonerPrice, bwTonerYield]);
  const colorTonerCostPerSheet = useMemo(() => colorCartridgePrice / colorYield, [colorCartridgePrice, colorYield]);

  const bwTotalCost = useMemo(() => paperCostPerSheet + bwTonerCostPerSheet + overheadPerSheet, [paperCostPerSheet, bwTonerCostPerSheet, overheadPerSheet]);
  const colorTotalCost = useMemo(() => paperCostPerSheet + colorTonerCostPerSheet + overheadPerSheet, [paperCostPerSheet, colorTonerCostPerSheet, overheadPerSheet]);

  const bwMarginPct = useMemo(() => {
    if (bwSellingPrice <= 0) return 0;
    return Math.max(0, Math.round(((bwSellingPrice - bwTotalCost) / bwSellingPrice) * 100));
  }, [bwSellingPrice, bwTotalCost]);

  const colorMarginPct = useMemo(() => {
    if (colorSellingPrice <= 0) return 0;
    return Math.max(0, Math.round(((colorSellingPrice - colorTotalCost) / colorSellingPrice) * 100));
  }, [colorSellingPrice, colorTotalCost]);

  // Handle Mark as Paid in Khata / Ledger
  const handleSettleOrder = async (orderId: string, currentAmount: number) => {
    try {
      const res = await fetch(`/api/v1/orders/${orderId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentStatus: 'PAID',
          paymentMethod: 'CASH',
        }),
      });
      const json = await res.json();
      if (json.success) {
        showToast(`Payment of ₹${currentAmount} received & marked as Paid!`);
        loadFinanceData();
      } else {
        alert(json.error?.message || 'Failed to settle order');
      }
    } catch (e) {
      alert('Network error while settling order');
    }
  };

  // Handle Add Expense
  const handleAddExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpTitle.trim() || !newExpAmount || isNaN(Number(newExpAmount))) {
      alert('Please enter a valid expense title and amount');
      return;
    }

    setSubmittingExpense(true);
    try {
      const res = await fetch('/api/v1/finance/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: newExpCategory,
          title: newExpTitle.trim(),
          amount: parseFloat(newExpAmount),
          paymentMode: newExpMode,
          notes: newExpNotes.trim(),
        }),
      });
      const json = await res.json();
      if (json.success) {
        showToast(`Expense of ₹${newExpAmount} logged successfully!`);
        setShowExpenseModal(false);
        setNewExpTitle('');
        setNewExpAmount('');
        setNewExpNotes('');
        loadFinanceData();
      } else {
        alert(json.error?.message || 'Failed to save expense');
      }
    } catch (e) {
      alert('Network error while saving expense');
    } finally {
      setSubmittingExpense(false);
    }
  };

  // Handle Delete Expense
  const handleDeleteExpense = async (id: string) => {
    if (!confirm('Are you sure you want to delete this expense record?')) return;
    try {
      const res = await fetch(`/api/v1/finance/expenses?id=${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (json.success) {
        showToast('Expense record deleted');
        loadFinanceData();
      }
    } catch (e) {
      alert('Failed to delete expense');
    }
  };

  // Day-End Settlement math
  const expectedCashInTill = useMemo(() => {
    const grossCash = summary?.cashRevenue || 0;
    const cashExpenses = expenses
      .filter((exp) => exp.paymentMode === 'CASH')
      .reduce((sum, e) => sum + e.amount, 0);
    return openingFloat + grossCash - cashExpenses;
  }, [summary, expenses, openingFloat]);

  const cashDiscrepancy = useMemo(() => {
    if (physicalCashCount === '') return 0;
    return Number(physicalCashCount) - expectedCashInTill;
  }, [physicalCashCount, expectedCashInTill]);

  // Filtered Khata
  const filteredKhata = useMemo(() => {
    if (!khataSearch.trim()) return khataCustomers;
    const q = khataSearch.toLowerCase();
    return khataCustomers.filter(
      (c) =>
        c.customerName.toLowerCase().includes(q) ||
        c.customerPhone.includes(q) ||
        c.orders.some((o) => o.orderNumber.toLowerCase().includes(q))
    );
  }, [khataCustomers, khataSearch]);

  // Filtered Transactions
  const filteredTransactions = useMemo(() => {
    if (!txSearch.trim()) return transactions;
    const q = txSearch.toLowerCase();
    return transactions.filter(
      (t) =>
        t.orderNumber.toLowerCase().includes(q) ||
        t.customerName.toLowerCase().includes(q) ||
        t.customerPhone.includes(q)
    );
  }, [transactions, txSearch]);

  // Overall Net Margin
  const totalGrossRev = summary?.totalGrossRevenue || 0;
  const netEstimatedProfit = Math.max(0, totalGrossRev - totalExpenses);
  const overallMargin = totalGrossRev > 0 ? Math.round((netEstimatedProfit / totalGrossRev) * 100) : 0;

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center space-y-3">
        <div className="animate-spin h-7 w-7 border-2 border-zinc-900 border-t-transparent rounded-full" />
        <p className="text-xs font-medium text-zinc-500">Loading Smart Print Finance & Cashflow...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 p-4 rounded-xl bg-zinc-950 text-white shadow-2xl border border-zinc-800 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <p className="text-xs font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
              <Wallet className="h-4 w-4" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
              Finance & Cashflow Management
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Real-time cash vs UPI revenue, Khata customer credit ledger, unit economics & day-end drawer settlement.
          </p>
        </div>

        {/* Right Tools: Time Range & Refresh */}
        <div className="flex items-center gap-2">
          {/* Range Switcher */}
          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-zinc-100/90 border border-zinc-200/80 text-xs">
            {(['today', 'week', 'month', 'all'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRange(r)}
                className={`px-3 py-1 rounded-md font-semibold capitalize transition-all ${
                  range === r ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {r === 'all' ? 'All Time' : r}
              </button>
            ))}
          </div>

          {/* Refresh Button */}
          <button
            onClick={() => loadFinanceData(true)}
            disabled={isRefreshing}
            className="h-8 w-8 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-600 flex items-center justify-center transition-all disabled:opacity-50"
            title="Refresh Finance Data"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex overflow-x-auto gap-1.5 p-1 rounded-xl bg-zinc-100/80 border border-zinc-200/70 text-xs font-semibold">
        <button
          onClick={() => setActiveTab('OVERVIEW')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'OVERVIEW'
              ? 'bg-white text-zinc-900 shadow-2xs font-bold'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <TrendingUp className="h-4 w-4" />
          Cashflow Overview
        </button>

        <button
          onClick={() => setActiveTab('KHATA')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'KHATA'
              ? 'bg-white text-zinc-900 shadow-2xs font-bold'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <Receipt className="h-4 w-4" />
          Customer Khata (Credit Book)
          {khataCustomers.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-100 text-rose-800 font-bold">
              {khataCustomers.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('CPP')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'CPP'
              ? 'bg-white text-zinc-900 shadow-2xs font-bold'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <Calculator className="h-4 w-4" />
          Cost-Per-Page (CPP) & Margins
        </button>

        <button
          onClick={() => setActiveTab('EXPENSES')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'EXPENSES'
              ? 'bg-white text-zinc-900 shadow-2xs font-bold'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <ArrowDownRight className="h-4 w-4" />
          Shop Expenses ({expenses.length})
        </button>

        <button
          onClick={() => setActiveTab('SETTLEMENT')}
          className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
            activeTab === 'SETTLEMENT'
              ? 'bg-white text-zinc-900 shadow-2xs font-bold'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <Printer className="h-4 w-4" />
          Day-End Z-Report Settlement
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: OVERVIEW & CASHFLOW */}
      {/* ========================================================================= */}
      {activeTab === 'OVERVIEW' && (
        <div className="space-y-6">
          {/* Top 5 KPI Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
            {/* 1. Gross Revenue */}
            <div className="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-2xs relative overflow-hidden">
              <div className="flex items-center justify-between text-zinc-500 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider">Gross Revenue</span>
                <DollarSign className="h-4 w-4 text-zinc-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-zinc-900">
                ₹{summary?.totalGrossRevenue.toFixed(0) || 0}
              </div>
              <div className="flex items-center gap-1.5 mt-1.5 text-[11px] text-zinc-500 font-medium">
                <span>{summary?.totalOrders || 0} customer orders</span>
              </div>
            </div>

            {/* 2. Cash Collected */}
            <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-4 shadow-2xs relative overflow-hidden">
              <div className="flex items-center justify-between text-emerald-800 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider">Cash in Till</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-emerald-950">
                ₹{summary?.cashRevenue.toFixed(0) || 0}
              </div>
              <div className="text-[11px] text-emerald-700 mt-1.5 font-medium">
                Physical drawer cash
              </div>
            </div>

            {/* 3. UPI / Digital */}
            <div className="rounded-xl border border-blue-200/80 bg-blue-50/40 p-4 shadow-2xs relative overflow-hidden">
              <div className="flex items-center justify-between text-blue-800 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider">UPI / Bank</span>
                <CreditCard className="h-4 w-4 text-blue-500" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-blue-950">
                ₹{summary?.upiRevenue.toFixed(0) || 0}
              </div>
              <div className="text-[11px] text-blue-700 mt-1.5 font-medium">
                GPay, PhonePe, QR
              </div>
            </div>

            {/* 4. Pending Khata Balance */}
            <div className="rounded-xl border border-amber-200/80 bg-amber-50/40 p-4 shadow-2xs relative overflow-hidden">
              <div className="flex items-center justify-between text-amber-800 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider">Pending (Khata)</span>
                <AlertCircle className="h-4 w-4 text-amber-500" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-amber-950">
                ₹{summary?.pendingRevenue.toFixed(0) || 0}
              </div>
              <div className="text-[11px] text-amber-700 mt-1.5 font-medium">
                {khataCustomers.length} clients unpaid
              </div>
            </div>

            {/* 5. Net Profit Margin */}
            <div className="col-span-2 sm:col-span-1 rounded-xl border border-zinc-900 bg-zinc-900 text-white p-4 shadow-2xs relative overflow-hidden">
              <div className="flex items-center justify-between text-zinc-400 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider">Est. Net Profit</span>
                <Sparkles className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">
                ₹{netEstimatedProfit.toFixed(0)}
              </div>
              <div className="text-[11px] text-zinc-300 mt-1.5 flex items-center justify-between">
                <span>Margin: {overallMargin}%</span>
                <span className="text-zinc-400">Exp: ₹{totalExpenses}</span>
              </div>
            </div>
          </div>

          {/* Revenue Distribution & Paper Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Left: Cash vs UPI Breakdown Card */}
            <div className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-zinc-900">Payment Collection Channels</h3>
                <span className="text-xs text-zinc-500">
                  Total Collected: ₹{((summary?.cashRevenue || 0) + (summary?.upiRevenue || 0)).toFixed(0)}
                </span>
              </div>

              {/* Progress Split Bar */}
              {(() => {
                const cash = summary?.cashRevenue || 0;
                const upi = summary?.upiRevenue || 0;
                const totalPaid = cash + upi || 1;
                const cashPct = Math.round((cash / totalPaid) * 100);
                const upiPct = 100 - cashPct;

                return (
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden flex">
                      <div
                        style={{ width: `${cashPct}%` }}
                        className="bg-emerald-500 transition-all duration-500"
                        title={`Cash: ${cashPct}%`}
                      />
                      <div
                        style={{ width: `${upiPct}%` }}
                        className="bg-blue-600 transition-all duration-500"
                        title={`UPI: ${upiPct}%`}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium pt-1">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        <span className="text-zinc-700">Cash: ₹{cash.toFixed(0)}</span>
                        <span className="text-zinc-400 font-mono">({cashPct}%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                        <span className="text-zinc-700">UPI / QR: ₹{upi.toFixed(0)}</span>
                        <span className="text-zinc-400 font-mono">({upiPct}%)</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-100 text-xs">
                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <p className="text-zinc-500 font-medium">Average Order Ticket</p>
                  <p className="text-base font-bold text-zinc-900 mt-0.5">
                    ₹{summary && summary.totalOrders > 0
                      ? (summary.totalGrossRevenue / summary.totalOrders).toFixed(1)
                      : '0'}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                  <p className="text-zinc-500 font-medium">Collection Success Rate</p>
                  <p className="text-base font-bold text-zinc-900 mt-0.5">
                    {summary && summary.totalGrossRevenue > 0
                      ? Math.round(
                          (((summary.cashRevenue + summary.upiRevenue) / summary.totalGrossRevenue) * 100)
                        )
                      : 100}%
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Print Volume & Sheet Telemetry */}
            <div className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-zinc-900">Paper Consumed & Sheet Telemetry</h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700">
                  {summary?.totalPagesCount || 0} Total Sheets
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/60">
                  <span className="text-[11px] font-semibold text-zinc-500 uppercase">B&W Sheets</span>
                  <p className="text-lg font-bold text-zinc-900 mt-1">{summary?.bwPagesCount || 0}</p>
                  <span className="text-[10px] text-zinc-400">Standard Docucentre</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-200/60">
                  <span className="text-[11px] font-semibold text-purple-700 uppercase">Color Sheets</span>
                  <p className="text-lg font-bold text-purple-950 mt-1">{summary?.colorPagesCount || 0}</p>
                  <span className="text-[10px] text-purple-600">High-yield color laser</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/60">
                  <span className="text-[11px] font-semibold text-zinc-500 uppercase">Reams Used</span>
                  <p className="text-lg font-bold text-zinc-900 mt-1">
                    {((summary?.totalPagesCount || 0) / 500).toFixed(1)}
                  </p>
                  <span className="text-[10px] text-zinc-400">@ 500 sheets/ream</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200/60 text-xs text-emerald-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                  <span>Cost per Page Target: <strong>~₹0.74 B&W</strong> • <strong>~₹1.79 Color</strong></span>
                </div>
                <button
                  onClick={() => setActiveTab('CPP')}
                  className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 underline"
                >
                  Configure Rates
                </button>
              </div>
            </div>
          </div>

          {/* Recent Financial Transactions Table */}
          <div className="rounded-xl border border-zinc-200/80 bg-white overflow-hidden shadow-2xs">
            <div className="p-4 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-50/50">
              <div>
                <h3 className="text-sm font-bold text-zinc-900">Recent Order Settlements</h3>
                <p className="text-xs text-zinc-500">Live transaction stream with payment mode and settlement status.</p>
              </div>

              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Filter transactions..."
                  value={txSearch}
                  onChange={(e) => setTxSearch(e.target.value)}
                  className="w-52 pl-8 pr-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900/10"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-50 border-b border-zinc-100 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                  <tr>
                    <th className="py-2.5 px-4">Order ID</th>
                    <th className="py-2.5 px-4">Customer</th>
                    <th className="py-2.5 px-4">Pages</th>
                    <th className="py-2.5 px-4">Amount</th>
                    <th className="py-2.5 px-4">Payment Method</th>
                    <th className="py-2.5 px-4">Status</th>
                    <th className="py-2.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-700">
                  {filteredTransactions.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-10 text-zinc-400">
                        No transactions recorded for this period
                      </td>
                    </tr>
                  ) : (
                    filteredTransactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-zinc-50/70 transition-colors">
                        <td className="py-2.5 px-4 font-mono font-medium text-zinc-900">
                          {tx.orderNumber}
                        </td>
                        <td className="py-2.5 px-4">
                          <span className="font-semibold text-zinc-800 block">{tx.customerName}</span>
                          <span className="text-[10px] text-zinc-400 font-mono">{tx.customerPhone}</span>
                        </td>
                        <td className="py-2.5 px-4 font-mono">{tx.totalPages} pgs</td>
                        <td className="py-2.5 px-4 font-bold text-zinc-900">
                          ₹{tx.amount.toFixed(0)}
                        </td>
                        <td className="py-2.5 px-4">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 text-zinc-700">
                            {tx.paymentMethod}
                          </span>
                        </td>
                        <td className="py-2.5 px-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                              tx.paymentStatus === 'PAID'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                                : 'bg-amber-50 text-amber-700 border border-amber-200/60'
                            }`}
                          >
                            {tx.paymentStatus === 'PAID' ? 'Paid' : 'Unpaid'}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-right">
                          {tx.paymentStatus !== 'PAID' ? (
                            <button
                              onClick={() => handleSettleOrder(tx.id, tx.amount)}
                              className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] transition-colors"
                            >
                              Collect ₹{tx.amount}
                            </button>
                          ) : (
                            <span className="text-[11px] text-emerald-600 font-medium">Settled</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: KHATA / CUSTOMER CREDIT BOOK */}
      {/* ========================================================================= */}
      {activeTab === 'KHATA' && (
        <div className="space-y-5">
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <Receipt className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-amber-950">Customer Khata (Credit Book)</h3>
                <p className="text-xs text-amber-800 mt-0.5">
                  Tracks regular customers, university students, and lawyers who print now and pay later.
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-amber-700 block font-medium">Total Pending Credit</span>
              <span className="text-xl font-bold text-amber-950">
                ₹{summary?.pendingRevenue.toFixed(0) || 0}
              </span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search Khata by customer name or phone..."
                value={khataSearch}
                onChange={(e) => setKhataSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-zinc-200 bg-white text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900/10"
              />
            </div>
            <span className="text-xs text-zinc-500 font-medium">
              Showing {filteredKhata.length} customers with outstanding balance
            </span>
          </div>

          {/* Khata Customer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredKhata.length === 0 ? (
              <div className="col-span-full py-16 text-center border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50">
                <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-zinc-800">All Khata Accounts Cleared!</p>
                <p className="text-xs text-zinc-400 mt-1">There are no outstanding customer credit balances.</p>
              </div>
            ) : (
              filteredKhata.map((customer) => {
                const waMessage = encodeURIComponent(
                  `Namaste ${customer.customerName}, your Xerox & print jobs at Metro Xerox are completed. Your pending balance is ₹${customer.pendingAmount.toFixed(0)}. Kindly clear via UPI or cash at your convenience. Thank you!`
                );
                const waLink = customer.customerPhone
                  ? `https://wa.me/91${customer.customerPhone.replace(/[^0-9]/g, '').slice(-10)}?text=${waMessage}`
                  : null;

                return (
                  <div
                    key={customer.customerId}
                    className="rounded-xl border border-zinc-200 bg-white p-4 shadow-2xs space-y-3.5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-zinc-900">{customer.customerName}</h4>
                          <p className="text-xs text-zinc-500 font-mono mt-0.5">
                            {customer.customerPhone ? `+91 ${customer.customerPhone}` : 'No phone registered'}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-rose-600 font-bold block">
                            ₹{customer.pendingAmount.toFixed(0)}
                          </span>
                          <span className="text-[10px] text-zinc-400">
                            {customer.orderCount} order{customer.orderCount > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>

                      {/* Orders mini-list */}
                      <div className="mt-3 pt-2.5 border-t border-zinc-100 space-y-1.5">
                        <span className="text-[10px] font-semibold uppercase text-zinc-400 block tracking-wider">
                          Unpaid Print Jobs
                        </span>
                        {customer.orders.slice(0, 3).map((ord) => (
                          <div key={ord.id} className="flex items-center justify-between text-[11px] text-zinc-600">
                            <span className="font-mono">{ord.orderNumber}</span>
                            <span className="font-semibold text-zinc-900">₹{ord.amount}</span>
                          </div>
                        ))}
                        {customer.orders.length > 3 && (
                          <span className="text-[10px] text-zinc-400 block">
                            +{customer.orders.length - 3} more jobs
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2 border-t border-zinc-100">
                      {customer.orders[0] && (
                        <button
                          onClick={() => handleSettleOrder(customer.orders[0].id, customer.pendingAmount)}
                          className="flex-1 py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Mark Paid
                        </button>
                      )}

                      {waLink && (
                        <a
                          href={waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1.5 px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-xs transition-colors flex items-center gap-1.5 shrink-0"
                          title="Send payment reminder on WhatsApp"
                        >
                          <Send className="h-3 w-3 text-emerald-600" />
                          WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: UNIT ECONOMICS & COST-PER-PAGE (CPP) */}
      {/* ========================================================================= */}
      {activeTab === 'CPP' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-zinc-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 mb-1">
                <Calculator className="h-3 w-3" /> Profit Formula
              </div>
              <h3 className="text-base font-bold text-white">Cost-Per-Page (CPP) & Margin Simulator</h3>
              <p className="text-xs text-zinc-300 mt-0.5">
                Calculate your exact paper, toner powder, and electricity cost per sheet to maximize gross profits.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="bg-zinc-800/80 px-3.5 py-2 rounded-lg border border-zinc-700">
                <span className="text-zinc-400 block text-[10px]">B&W Margin</span>
                <span className="text-lg font-bold text-emerald-400">{bwMarginPct}%</span>
              </div>
              <div className="bg-zinc-800/80 px-3.5 py-2 rounded-lg border border-zinc-700">
                <span className="text-zinc-400 block text-[10px]">Color Margin</span>
                <span className="text-lg font-bold text-emerald-400">{colorMarginPct}%</span>
              </div>
            </div>
          </div>

          {/* Simulator Inputs & Margin Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Column 1 & 2: Raw Inputs */}
            <div className="lg:col-span-2 rounded-xl border border-zinc-200/80 bg-white p-5 shadow-2xs space-y-5">
              <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                <Sliders className="h-4 w-4" /> Consumable Input Parameters
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Paper Ream Price */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-zinc-700 flex justify-between">
                    <span>A4 Paper Ream Price (500 Sheets)</span>
                    <span className="font-mono text-zinc-500">₹{reamPrice}</span>
                  </label>
                  <input
                    type="range"
                    min="150"
                    max="400"
                    step="5"
                    value={reamPrice}
                    onChange={(e) => setReamPrice(Number(e.target.value))}
                    className="w-full accent-zinc-900 cursor-pointer"
                  />
                  <span className="text-[11px] text-zinc-400 block">
                    = ₹{paperCostPerSheet.toFixed(2)} per blank sheet
                  </span>
                </div>

                {/* B&W Toner Cartridge */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-zinc-700 flex justify-between">
                    <span>B&W Toner Cost (HP 12A / 88A)</span>
                    <span className="font-mono text-zinc-500">₹{bwTonerPrice}</span>
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="2500"
                    step="50"
                    value={bwTonerPrice}
                    onChange={(e) => setBwTonerPrice(Number(e.target.value))}
                    className="w-full accent-zinc-900 cursor-pointer"
                  />
                  <span className="text-[11px] text-zinc-400 block">
                    @ {bwTonerYield} pages = ₹{bwTonerCostPerSheet.toFixed(2)}/pg toner
                  </span>
                </div>

                {/* Color Cartridge Set */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-zinc-700 flex justify-between">
                    <span>Color Cartridge Set (CMYK)</span>
                    <span className="font-mono text-zinc-500">₹{colorCartridgePrice}</span>
                  </label>
                  <input
                    type="range"
                    min="2000"
                    max="12000"
                    step="200"
                    value={colorCartridgePrice}
                    onChange={(e) => setColorCartridgePrice(Number(e.target.value))}
                    className="w-full accent-zinc-900 cursor-pointer"
                  />
                  <span className="text-[11px] text-zinc-400 block">
                    @ {colorYield} pages = ₹{colorTonerCostPerSheet.toFixed(2)}/pg toner
                  </span>
                </div>

                {/* Electricity & Maintenance Overhead */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-zinc-700 flex justify-between">
                    <span>Power & Machine Wear Factor</span>
                    <span className="font-mono text-zinc-500">₹{overheadPerSheet.toFixed(2)}/pg</span>
                  </label>
                  <input
                    type="range"
                    min="0.05"
                    max="0.50"
                    step="0.05"
                    value={overheadPerSheet}
                    onChange={(e) => setOverheadPerSheet(Number(e.target.value))}
                    className="w-full accent-zinc-900 cursor-pointer"
                  />
                  <span className="text-[11px] text-zinc-400 block">
                    Electricity per kWh + drum maintenance
                  </span>
                </div>
              </div>

              {/* Selling Rates Config */}
              <div className="pt-4 border-t border-zinc-100">
                <h5 className="text-xs font-bold text-zinc-800 uppercase tracking-wider mb-3">
                  Your Current Selling Prices
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="text-zinc-600 block mb-1">Standard B&W Rate (₹/page)</label>
                    <input
                      type="number"
                      step="0.5"
                      value={bwSellingPrice}
                      onChange={(e) => setBwSellingPrice(Number(e.target.value))}
                      className="w-full px-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-zinc-600 block mb-1">Color Print Rate (₹/page)</label>
                    <input
                      type="number"
                      step="1"
                      value={colorSellingPrice}
                      onChange={(e) => setColorSellingPrice(Number(e.target.value))}
                      className="w-full px-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-bold"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Live Unit Margin Breakdown */}
            <div className="space-y-4">
              {/* B&W Card */}
              <div className="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-900">B&W 1-Sided Sheet</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {bwMarginPct}% Margin
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-zinc-600">
                  <div className="flex justify-between">
                    <span>Paper Sheet:</span>
                    <span className="font-mono">₹{paperCostPerSheet.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Toner Powder:</span>
                    <span className="font-mono">₹{bwTonerCostPerSheet.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Power & Wear:</span>
                    <span className="font-mono">₹{overheadPerSheet.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-zinc-100 font-bold text-zinc-900">
                    <span>True Cost:</span>
                    <span className="font-mono">₹{bwTotalCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-700">
                    <span>Net Profit / Sheet:</span>
                    <span className="font-mono">+₹{(bwSellingPrice - bwTotalCost).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Color Card */}
              <div className="rounded-xl border border-purple-200/80 bg-purple-50/30 p-4 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-950">Color Laser Sheet</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {colorMarginPct}% Margin
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-zinc-600">
                  <div className="flex justify-between">
                    <span>Paper Sheet:</span>
                    <span className="font-mono">₹{paperCostPerSheet.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Color Toner:</span>
                    <span className="font-mono">₹{colorTonerCostPerSheet.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Power & Wear:</span>
                    <span className="font-mono">₹{overheadPerSheet.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-purple-100 font-bold text-purple-950">
                    <span>True Cost:</span>
                    <span className="font-mono">₹{colorTotalCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-700">
                    <span>Net Profit / Sheet:</span>
                    <span className="font-mono">+₹{(colorSellingPrice - colorTotalCost).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: EXPENSE TRACKER */}
      {/* ========================================================================= */}
      {activeTab === 'EXPENSES' && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-zinc-900">Shop Operating Expenses</h3>
              <p className="text-xs text-zinc-500">
                Log paper ream bundles, toner refills, power bills, and shop consumables to calculate net take-home profit.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-zinc-700">
                Total Expenses: ₹{totalExpenses.toFixed(0)}
              </span>
              <button
                onClick={() => setShowExpenseModal(true)}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-2xs"
              >
                <Plus className="h-3.5 w-3.5" />
                Log Expense
              </button>
            </div>
          </div>

          {/* Expenses Table */}
          <div className="rounded-xl border border-zinc-200/80 bg-white overflow-hidden shadow-2xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-50 border-b border-zinc-100 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-4">Date</th>
                  <th className="py-2.5 px-4">Category</th>
                  <th className="py-2.5 px-4">Description</th>
                  <th className="py-2.5 px-4">Paid Via</th>
                  <th className="py-2.5 px-4">Amount</th>
                  <th className="py-2.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-zinc-700">
                {expenses.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-zinc-400">
                      No expenses logged yet. Click &quot;Log Expense&quot; to add your first expense record.
                    </td>
                  </tr>
                ) : (
                  expenses.map((exp) => (
                    <tr key={exp.id} className="hover:bg-zinc-50/70 transition-colors">
                      <td className="py-2.5 px-4 font-mono text-zinc-500">
                        {new Date(exp.date).toLocaleDateString()}
                      </td>
                      <td className="py-2.5 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-100 text-zinc-700">
                          {exp.category}
                        </span>
                      </td>
                      <td className="py-2.5 px-4">
                        <span className="font-semibold text-zinc-900 block">{exp.title}</span>
                        {exp.notes && <span className="text-[10px] text-zinc-400 block">{exp.notes}</span>}
                      </td>
                      <td className="py-2.5 px-4">
                        <span
                          className={`inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-semibold ${
                            exp.paymentMode === 'CASH'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          {exp.paymentMode}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 font-bold text-zinc-900">
                        ₹{exp.amount.toFixed(0)}
                      </td>
                      <td className="py-2.5 px-4 text-right">
                        <button
                          onClick={() => handleDeleteExpense(exp.id)}
                          className="p-1 rounded text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="Delete expense record"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: DAY-END SETTLEMENT (Z-REPORT) */}
      {/* ========================================================================= */}
      {activeTab === 'SETTLEMENT' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-zinc-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 mb-1">
                <Printer className="h-3 w-3" /> Register Closing
              </div>
              <h3 className="text-base font-bold text-white">Day-End Cash Drawer Reconciliation (Z-Report)</h3>
              <p className="text-xs text-zinc-300 mt-0.5">
                Reconcile physical cash counted in your till against order receipts and cash expenses.
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg bg-white text-zinc-900 hover:bg-zinc-100 font-bold text-xs transition-colors flex items-center gap-2 self-start md:self-center shadow-xs"
            >
              <Printer className="h-4 w-4" />
              Print Z-Report Slip
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left: Expected Cash Calculation */}
            <div className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-2xs space-y-4">
              <h4 className="text-sm font-bold text-zinc-900">Cash Flow in Drawer Today</h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 border border-zinc-100">
                  <span className="text-zinc-600">Starting Cash Float (Morning Change)</span>
                  <div className="flex items-center gap-1 font-bold text-zinc-900">
                    <span>₹</span>
                    <input
                      type="number"
                      value={openingFloat}
                      onChange={(e) => setOpeningFloat(Number(e.target.value) || 0)}
                      className="w-16 px-1.5 py-0.5 rounded border border-zinc-200 text-right font-bold text-xs"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-emerald-950 font-medium">
                  <span>+ Cash Collected from Print Orders</span>
                  <span className="font-bold">₹{summary?.cashRevenue.toFixed(0) || 0}</span>
                </div>

                {(() => {
                  const cashExp = expenses
                    .filter((e) => e.paymentMode === 'CASH')
                    .reduce((sum, e) => sum + e.amount, 0);

                  return (
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-rose-50/60 border border-rose-100 text-rose-950 font-medium">
                      <span>- Cash Spent on Shop Expenses</span>
                      <span className="font-bold">₹{cashExp.toFixed(0)}</span>
                    </div>
                  );
                })()}

                <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-sm font-bold text-zinc-900">
                  <span>Expected Cash in Till:</span>
                  <span className="text-base text-zinc-950 font-mono">₹{expectedCashInTill.toFixed(0)}</span>
                </div>
              </div>
            </div>

            {/* Right: Cash Count & Discrepancy */}
            <div className="rounded-xl border border-zinc-200/80 bg-white p-5 shadow-2xs space-y-4">
              <h4 className="text-sm font-bold text-zinc-900">Physical Cash Count Verification</h4>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-zinc-700 font-semibold block mb-1">
                    Counted Cash in Drawer (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter physical cash counted in drawer..."
                    value={physicalCashCount}
                    onChange={(e) => setPhysicalCashCount(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-300 text-base font-bold text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
                  />
                </div>

                {physicalCashCount !== '' && (
                  <div
                    className={`p-3.5 rounded-xl border flex items-center justify-between ${
                      cashDiscrepancy === 0
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : cashDiscrepancy > 0
                        ? 'bg-blue-50 border-blue-200 text-blue-900'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-xs block">
                        {cashDiscrepancy === 0
                          ? 'Exact Match — Register Balanced'
                          : cashDiscrepancy > 0
                          ? `Cash Surplus (+₹${cashDiscrepancy.toFixed(0)})`
                          : `Cash Deficit (-₹${Math.abs(cashDiscrepancy).toFixed(0)})`}
                      </span>
                      <span className="text-[11px] opacity-80">
                        {cashDiscrepancy === 0
                          ? 'Physical cash matches all order receipts perfectly.'
                          : cashDiscrepancy > 0
                          ? 'More cash in drawer than recorded receipts.'
                          : 'Shortage in drawer. Check for unrecorded cash expenses or change error.'}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-[11px] text-zinc-500">
                  <p>
                    <strong>Tip:</strong> Print the Z-Report slip at closing time every night and staple it to the day&apos;s physical cash bundle for accounting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ADD EXPENSE MODAL */}
      {/* ========================================================================= */}
      {showExpenseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden">
            <div className="p-5 border-b border-zinc-100 flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-900">Log Shop Expense</h3>
              <button
                onClick={() => setShowExpenseModal(false)}
                className="text-zinc-400 hover:text-zinc-700 text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddExpense} className="p-5 space-y-4 text-xs">
              <div>
                <label className="font-semibold text-zinc-700 block mb-1">Expense Title / Item</label>
                <input
                  type="text"
                  placeholder="e.g. 5x JK Copier A4 Ream (75 GSM)"
                  value={newExpTitle}
                  onChange={(e) => setNewExpTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-zinc-900"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-zinc-700 block mb-1">Amount (₹)</label>
                  <input
                    type="number"
                    placeholder="1200"
                    value={newExpAmount}
                    onChange={(e) => setNewExpAmount(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-zinc-900 font-bold"
                    required
                  />
                </div>

                <div>
                  <label className="font-semibold text-zinc-700 block mb-1">Category</label>
                  <select
                    value={newExpCategory}
                    onChange={(e: any) => setNewExpCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-zinc-900"
                  >
                    <option value="PAPER">Paper Stock</option>
                    <option value="TONER">Toner & Ink</option>
                    <option value="ELECTRICITY">Electricity</option>
                    <option value="MAINTENANCE">Machine Repair</option>
                    <option value="SALARY">Staff Salary</option>
                    <option value="OTHER">Other / Misc</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-zinc-700 block mb-1">Paid From</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setNewExpMode('CASH')}
                    className={`flex-1 py-1.5 rounded-lg border font-semibold ${
                      newExpMode === 'CASH'
                        ? 'bg-zinc-900 text-white border-zinc-900'
                        : 'bg-white text-zinc-700 border-zinc-200'
                    }`}
                  >
                    Cash Drawer
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewExpMode('UPI')}
                    className={`flex-1 py-1.5 rounded-lg border font-semibold ${
                      newExpMode === 'UPI'
                        ? 'bg-zinc-900 text-white border-zinc-900'
                        : 'bg-white text-zinc-700 border-zinc-200'
                    }`}
                  >
                    UPI / Bank
                  </button>
                </div>
              </div>

              <div>
                <label className="font-semibold text-zinc-700 block mb-1">Notes (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Purchased from local wholesale dealer"
                  value={newExpNotes}
                  onChange={(e) => setNewExpNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-zinc-900"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowExpenseModal(false)}
                  className="px-4 py-2 rounded-lg border border-zinc-200 text-zinc-700 font-semibold hover:bg-zinc-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submittingExpense}
                  className="px-4 py-2 rounded-lg bg-zinc-900 text-white font-semibold hover:bg-zinc-800 disabled:opacity-50"
                >
                  {submittingExpense ? 'Saving...' : 'Save Expense'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
