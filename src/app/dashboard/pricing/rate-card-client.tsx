'use client';

import React, { useState, useEffect } from 'react';
import { 
  Check, 
  AlertCircle, 
  Sparkles, 
  Save, 
  RefreshCw, 
  Percent, 
  Layers, 
  Calculator,
  IndianRupee,
  Sliders,
  CheckCircle2
} from 'lucide-react';

interface PricingRule {
  id?: string;
  paperSize: string;
  bwSinglePrice: number;
  bwDoublePrice: number;
  colorSinglePrice: number;
  colorDoublePrice: number;
  isActive: boolean;
}

interface FinishingRates {
  stapleCorner: number;
  stapleSide: number;
  bindingSpiral: number;
  bindingHardcover: number;
  bindingProject: number;
  laminationGlossy: number;
  laminationMatte: number;
}

interface BulkDiscountTier {
  minPages: number;
  discountPercent: number;
}

const DEFAULT_PAPER_SIZES: Array<{
  size: string;
  label: string;
  dimensions: string;
  popular?: boolean;
}> = [
  { size: 'A4', label: 'Standard Office & Xerox (Default)', dimensions: '210 × 297 mm', popular: true },
  { size: 'A3', label: 'Ledger / Large Drawing Sheet', dimensions: '297 × 420 mm', popular: true },
  { size: 'A5', label: 'Booklet / Prescription / Pocket Memo', dimensions: '148 × 210 mm' },
  { size: 'A6', label: 'Flyer / Postcard / Small Card', dimensions: '105 × 148 mm' },
  { size: 'LEGAL', label: 'Legal / Court Affidavit (8.5 × 14 in)', dimensions: '216 × 356 mm', popular: true },
  { size: 'A2', label: 'Medium Blueprint / Poster', dimensions: '420 × 594 mm' },
  { size: 'A1', label: 'Full Engineering Drawing / Blueprint', dimensions: '594 × 841 mm' },
];

const MARKET_STANDARD_RULES: Record<string, Omit<PricingRule, 'id' | 'paperSize'>> = {
  A4: { bwSinglePrice: 2.0, bwDoublePrice: 3.0, colorSinglePrice: 10.0, colorDoublePrice: 18.0, isActive: true },
  A3: { bwSinglePrice: 5.0, bwDoublePrice: 8.0, colorSinglePrice: 20.0, colorDoublePrice: 35.0, isActive: true },
  A5: { bwSinglePrice: 1.5, bwDoublePrice: 2.5, colorSinglePrice: 8.0, colorDoublePrice: 14.0, isActive: true },
  A6: { bwSinglePrice: 1.0, bwDoublePrice: 1.8, colorSinglePrice: 5.0, colorDoublePrice: 9.0, isActive: true },
  LEGAL: { bwSinglePrice: 3.0, bwDoublePrice: 4.5, colorSinglePrice: 12.0, colorDoublePrice: 20.0, isActive: true },
  A2: { bwSinglePrice: 15.0, bwDoublePrice: 25.0, colorSinglePrice: 40.0, colorDoublePrice: 70.0, isActive: true },
  A1: { bwSinglePrice: 30.0, bwDoublePrice: 50.0, colorSinglePrice: 80.0, colorDoublePrice: 140.0, isActive: true },
};

const MARKET_STANDARD_FINISHING: FinishingRates = {
  stapleCorner: 2.0,
  stapleSide: 5.0,
  bindingSpiral: 35.0,
  bindingHardcover: 65.0,
  bindingProject: 150.0,
  laminationGlossy: 15.0,
  laminationMatte: 25.0,
};

const MARKET_STANDARD_DISCOUNTS: BulkDiscountTier[] = [
  { minPages: 50, discountPercent: 10 },
  { minPages: 150, discountPercent: 15 },
  { minPages: 500, discountPercent: 25 },
];

export function RateCardClient() {
  const [activeTab, setActiveTab] = useState<'paper' | 'finishing' | 'discounts' | 'simulator'>('paper');
  const [rules, setRules] = useState<PricingRule[]>([]);
  const [finishing, setFinishing] = useState<FinishingRates>(MARKET_STANDARD_FINISHING);
  const [bulkDiscounts, setBulkDiscounts] = useState<BulkDiscountTier[]>(MARKET_STANDARD_DISCOUNTS);
  const [volumeDiscountsEnabled, setVolumeDiscountsEnabled] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Simulator state
  const [simSize, setSimSize] = useState('A4');
  const [simColor, setSimColor] = useState<'BW' | 'COLOR'>('BW');
  const [simDuplex, setSimDuplex] = useState<'SIMPLEX' | 'DUPLEX'>('DUPLEX');
  const [simPages, setSimPages] = useState(30);
  const [simCopies, setSimCopies] = useState(1);
  const [simStaple, setSimStaple] = useState<'NONE' | 'CORNER' | 'SIDE'>('NONE');
  const [simBinding, setSimBinding] = useState<'NONE' | 'SPIRAL' | 'HARDCOVER' | 'PROJECT'>('NONE');
  const [simLamination, setSimLamination] = useState<'NONE' | 'GLOSSY' | 'MATTE'>('NONE');

  useEffect(() => {
    fetch('/api/v1/shops/pricing')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data) {
          const incomingRules: PricingRule[] = json.data.rules || [];
          // Ensure all standard sizes have an entry
          const mergedRules = DEFAULT_PAPER_SIZES.map(({ size }) => {
            const found = incomingRules.find((r) => r.paperSize.toUpperCase() === size);
            if (found) return found;
            const standard = MARKET_STANDARD_RULES[size];
            return {
              paperSize: size,
              ...standard,
            };
          });
          setRules(mergedRules);
          if (json.data.finishing) setFinishing(json.data.finishing);
          if (json.data.bulkDiscounts) setBulkDiscounts(json.data.bulkDiscounts);
          if (json.data.volumeDiscountsEnabled !== undefined) {
            setVolumeDiscountsEnabled(json.data.volumeDiscountsEnabled);
          }
        }
      })
      .catch((err) => setErrorMessage(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  const handlePriceChange = (
    paperSize: string,
    field: 'bwSinglePrice' | 'bwDoublePrice' | 'colorSinglePrice' | 'colorDoublePrice',
    value: string
  ) => {
    const num = Math.max(0, parseFloat(value) || 0);
    setRules((prev) =>
      prev.map((r) => (r.paperSize === paperSize ? { ...r, [field]: num } : r))
    );
  };

  const handleToggleActive = (paperSize: string) => {
    setRules((prev) =>
      prev.map((r) => (r.paperSize === paperSize ? { ...r, isActive: !r.isActive } : r))
    );
  };

  const handleResetToStandard = () => {
    if (!window.confirm('Reset all prices and finishing fees to industry standards?')) return;
    const reset = DEFAULT_PAPER_SIZES.map(({ size }) => ({
      paperSize: size,
      ...MARKET_STANDARD_RULES[size],
    }));
    setRules(reset);
    setFinishing(MARKET_STANDARD_FINISHING);
    setBulkDiscounts(MARKET_STANDARD_DISCOUNTS);
    setVolumeDiscountsEnabled(true);
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    setErrorMessage('');

    try {
      const res = await fetch('/api/v1/shops/pricing', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rules,
          finishing,
          bulkDiscounts,
          volumeDiscountsEnabled,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error?.message || 'Failed to save pricing configuration');
      }

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3500);
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsSaving(false);
    }
  };

  // Simulator Calculations
  const calculateSimulatedPrice = () => {
    const matchedRule = rules.find((r) => r.paperSize === simSize) || MARKET_STANDARD_RULES[simSize];
    let unitRate = matchedRule?.bwSinglePrice || 2.0;

    if (simColor === 'COLOR' && simDuplex === 'DUPLEX') {
      unitRate = (matchedRule?.colorDoublePrice || 18.0) / 2;
    } else if (simColor === 'COLOR' && simDuplex === 'SIMPLEX') {
      unitRate = matchedRule?.colorSinglePrice || 10.0;
    } else if (simColor === 'BW' && simDuplex === 'DUPLEX') {
      unitRate = (matchedRule?.bwDoublePrice || 3.0) / 2;
    } else {
      unitRate = matchedRule?.bwSinglePrice || 2.0;
    }

    const totalPages = simPages * simCopies;
    const printSubtotal = unitRate * totalPages;

    // Finishing
    let finishingSubtotal = 0;
    if (simStaple === 'CORNER') finishingSubtotal += finishing.stapleCorner * simCopies;
    else if (simStaple === 'SIDE') finishingSubtotal += finishing.stapleSide * simCopies;

    if (simBinding === 'SPIRAL') finishingSubtotal += finishing.bindingSpiral * simCopies;
    else if (simBinding === 'HARDCOVER') finishingSubtotal += finishing.bindingHardcover * simCopies;
    else if (simBinding === 'PROJECT') finishingSubtotal += finishing.bindingProject * simCopies;

    if (simLamination === 'GLOSSY') finishingSubtotal += finishing.laminationGlossy * totalPages;
    else if (simLamination === 'MATTE') finishingSubtotal += finishing.laminationMatte * totalPages;

    // Volume discount
    let discountAmount = 0;
    let appliedPercent = 0;
    if (volumeDiscountsEnabled) {
      const sortedTiers = [...bulkDiscounts].sort((a, b) => b.minPages - a.minPages);
      const tier = sortedTiers.find((t) => totalPages >= t.minPages);
      if (tier) {
        appliedPercent = tier.discountPercent;
        discountAmount = (printSubtotal * tier.discountPercent) / 100;
      }
    }

    const grandTotal = Math.max(1, printSubtotal - discountAmount + finishingSubtotal);

    return {
      unitRate,
      totalPages,
      printSubtotal,
      finishingSubtotal,
      appliedPercent,
      discountAmount,
      grandTotal,
    };
  };

  const simResult = calculateSimulatedPrice();

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center text-zinc-400 text-xs">
        <RefreshCw className="h-4 w-4 animate-spin mr-2" />
        Loading shop pricing matrix...
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-200/80">
        <div>
          <h1 className="text-lg font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
            Rate Card & Pricing Matrix
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
              Milestone 6 Active
            </span>
          </h1>
          <p className="text-xs text-zinc-500 mt-0.5">
            Configure real-time per-sheet Xerox rates, bindery add-ons, and automated volume discount tiers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleResetToStandard}
            className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-medium text-zinc-600 transition-colors flex items-center gap-1.5"
            title="Reset to industry standard Xerox pricing"
          >
            <RefreshCw className="h-3 w-3 text-zinc-400" />
            Standard Rates
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-all shadow-2xs flex items-center gap-1.5 disabled:opacity-50"
          >
            {isSaving ? (
              <>
                <RefreshCw className="h-3 w-3 animate-spin" />
                Saving...
              </>
            ) : saveSuccess ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" />
                Saved!
              </>
            ) : (
              <>
                <Save className="h-3 w-3" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      {/* Notifications */}
      {errorMessage && (
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {saveSuccess && (
        <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
          <span>Rate card and pricing configuration saved successfully. Customer portal updated in real-time.</span>
        </div>
      )}

      {/* Minimal Tabs */}
      <div className="flex items-center gap-1 p-1 bg-zinc-100/80 rounded-xl border border-zinc-200/60 w-fit text-xs font-medium">
        <button
          type="button"
          onClick={() => setActiveTab('paper')}
          className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'paper'
              ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <Layers className="h-3.5 w-3.5" />
          Paper Sizes & Base Rates
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('finishing')}
          className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'finishing'
              ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <Sliders className="h-3.5 w-3.5" />
          Finishing & Bindery
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('discounts')}
          className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'discounts'
              ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <Percent className="h-3.5 w-3.5" />
          Bulk Volume Tiers
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('simulator')}
          className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
            activeTab === 'simulator'
              ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          <Calculator className="h-3.5 w-3.5" />
          Live Price Simulator
        </button>
      </div>

      {/* TAB 1: PAPER SIZES & BASE RATES */}
      {activeTab === 'paper' && (
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-zinc-200/90 overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-zinc-50/80 border-b border-zinc-200/80 text-[11px] font-mono uppercase text-zinc-500">
                    <th className="py-2.5 px-4 font-medium">Paper Format</th>
                    <th className="py-2.5 px-4 font-medium text-center">Status</th>
                    <th className="py-2.5 px-4 font-medium">B&W 1-Sided (₹)</th>
                    <th className="py-2.5 px-4 font-medium">B&W 2-Sided (₹/sheet)</th>
                    <th className="py-2.5 px-4 font-medium">Color 1-Sided (₹)</th>
                    <th className="py-2.5 px-4 font-medium">Color 2-Sided (₹/sheet)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {DEFAULT_PAPER_SIZES.map((meta) => {
                    const rule = rules.find((r) => r.paperSize === meta.size) || {
                      paperSize: meta.size,
                      ...MARKET_STANDARD_RULES[meta.size],
                    };

                    return (
                      <tr key={meta.size} className={`hover:bg-zinc-50/50 transition-colors ${!rule.isActive ? 'opacity-50 bg-zinc-50/20' : ''}`}>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-zinc-900 font-mono">{meta.size}</span>
                            {meta.popular && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 font-medium">
                                Popular
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-zinc-400 block mt-0.5">
                            {meta.dimensions} — {meta.label}
                          </span>
                        </td>

                        <td className="py-3 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => handleToggleActive(meta.size)}
                            className={`px-2 py-0.5 rounded-full text-[10px] font-mono transition-colors ${
                              rule.isActive
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium hover:bg-emerald-100'
                                : 'bg-zinc-100 text-zinc-500 border border-zinc-200 hover:bg-zinc-200'
                            }`}
                          >
                            {rule.isActive ? 'Enabled' : 'Disabled'}
                          </button>
                        </td>

                        <td className="py-3 px-4">
                          <div className="relative w-24">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                            <input
                              type="number"
                              step="0.5"
                              min="0"
                              disabled={!rule.isActive}
                              value={rule.bwSinglePrice}
                              onChange={(e) => handlePriceChange(meta.size, 'bwSinglePrice', e.target.value)}
                              className="w-full pl-6 pr-2 py-1 rounded-lg border border-zinc-200 bg-white text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900 disabled:bg-zinc-100"
                            />
                          </div>
                        </td>

                        <td className="py-3 px-4">
                          <div className="relative w-24">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                            <input
                              type="number"
                              step="0.5"
                              min="0"
                              disabled={!rule.isActive}
                              value={rule.bwDoublePrice}
                              onChange={(e) => handlePriceChange(meta.size, 'bwDoublePrice', e.target.value)}
                              className="w-full pl-6 pr-2 py-1 rounded-lg border border-zinc-200 bg-white text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900 disabled:bg-zinc-100"
                            />
                          </div>
                        </td>

                        <td className="py-3 px-4">
                          <div className="relative w-24">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                            <input
                              type="number"
                              step="0.5"
                              min="0"
                              disabled={!rule.isActive}
                              value={rule.colorSinglePrice}
                              onChange={(e) => handlePriceChange(meta.size, 'colorSinglePrice', e.target.value)}
                              className="w-full pl-6 pr-2 py-1 rounded-lg border border-zinc-200 bg-white text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900 disabled:bg-zinc-100"
                            />
                          </div>
                        </td>

                        <td className="py-3 px-4">
                          <div className="relative w-24">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                            <input
                              type="number"
                              step="0.5"
                              min="0"
                              disabled={!rule.isActive}
                              value={rule.colorDoublePrice}
                              onChange={(e) => handlePriceChange(meta.size, 'colorDoublePrice', e.target.value)}
                              className="w-full pl-6 pr-2 py-1 rounded-lg border border-zinc-200 bg-white text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900 disabled:bg-zinc-100"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[11px] text-zinc-400">
            * 2-Sided (Duplex) price represents the total cost charged per sheet printed front-and-back.
          </p>
        </div>
      )}

      {/* TAB 2: FINISHING & BINDERY */}
      {activeTab === 'finishing' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stapling */}
          <div className="bg-white rounded-xl border border-zinc-200/90 p-4 space-y-3 shadow-2xs">
            <h3 className="text-xs font-semibold text-zinc-900 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Stapling & Securing
            </h3>
            <p className="text-[11px] text-zinc-400">Fixed rate charged per document set.</p>

            <div className="space-y-2.5 pt-1">
              <div>
                <label className="text-[11px] text-zinc-600 block mb-1">Corner Staple (1 Pin)</label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                  <input
                    type="number"
                    min="0"
                    step="0.5"
                    value={finishing.stapleCorner}
                    onChange={(e) => setFinishing({ ...finishing, stapleCorner: parseFloat(e.target.value) || 0 })}
                    className="w-full pl-6 pr-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-zinc-600 block mb-1">Double / Side Staple (2 Pins)</label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                  <input
                    type="number"
                    min="0"
                    step="0.5"
                    value={finishing.stapleSide}
                    onChange={(e) => setFinishing({ ...finishing, stapleSide: parseFloat(e.target.value) || 0 })}
                    className="w-full pl-6 pr-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Book Binding */}
          <div className="bg-white rounded-xl border border-zinc-200/90 p-4 space-y-3 shadow-2xs">
            <h3 className="text-xs font-semibold text-zinc-900 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Document Binding
            </h3>
            <p className="text-[11px] text-zinc-400">Fixed fee charged per bound copy.</p>

            <div className="space-y-2.5 pt-1">
              <div>
                <label className="text-[11px] text-zinc-600 block mb-1">Spiral Binding (PVC Sheet)</label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={finishing.bindingSpiral}
                    onChange={(e) => setFinishing({ ...finishing, bindingSpiral: parseFloat(e.target.value) || 0 })}
                    className="w-full pl-6 pr-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-zinc-600 block mb-1">Hardcover Thesis Binding</label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={finishing.bindingHardcover}
                    onChange={(e) => setFinishing({ ...finishing, bindingHardcover: parseFloat(e.target.value) || 0 })}
                    className="w-full pl-6 pr-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-zinc-600 block mb-1">Project Gold Letter Emboss</label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                  <input
                    type="number"
                    min="0"
                    step="5"
                    value={finishing.bindingProject}
                    onChange={(e) => setFinishing({ ...finishing, bindingProject: parseFloat(e.target.value) || 0 })}
                    className="w-full pl-6 pr-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Lamination */}
          <div className="bg-white rounded-xl border border-zinc-200/90 p-4 space-y-3 shadow-2xs">
            <h3 className="text-xs font-semibold text-zinc-900 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Thermal Lamination
            </h3>
            <p className="text-[11px] text-zinc-400">Rate charged per laminated page / pouch.</p>

            <div className="space-y-2.5 pt-1">
              <div>
                <label className="text-[11px] text-zinc-600 block mb-1">Glossy Lamination (A4)</label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={finishing.laminationGlossy}
                    onChange={(e) => setFinishing({ ...finishing, laminationGlossy: parseFloat(e.target.value) || 0 })}
                    className="w-full pl-6 pr-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-zinc-600 block mb-1">Matte Premium Lamination</label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs">₹</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={finishing.laminationMatte}
                    onChange={(e) => setFinishing({ ...finishing, laminationMatte: parseFloat(e.target.value) || 0 })}
                    className="w-full pl-6 pr-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-mono text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: BULK VOLUME DISCOUNTS */}
      {activeTab === 'discounts' && (
        <div className="space-y-4 max-w-2xl">
          <div className="bg-white rounded-xl border border-zinc-200/90 p-4 space-y-4 shadow-2xs">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
              <div>
                <h3 className="text-xs font-semibold text-zinc-900">Automated Bulk Tier Discounts</h3>
                <p className="text-[11px] text-zinc-400">Encourage larger orders by automatically discounting print costs.</p>
              </div>

              <button
                type="button"
                onClick={() => setVolumeDiscountsEnabled(!volumeDiscountsEnabled)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  volumeDiscountsEnabled
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-zinc-100 text-zinc-500 border border-zinc-200'
                }`}
              >
                {volumeDiscountsEnabled ? 'Enabled' : 'Disabled'}
              </button>
            </div>

            <div className="space-y-3">
              {bulkDiscounts.map((tier, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-50/80 border border-zinc-200/60">
                  <div className="flex-1">
                    <label className="text-[10px] text-zinc-400 uppercase font-mono block mb-1">
                      Threshold Pages
                    </label>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-zinc-500">Min.</span>
                      <input
                        type="number"
                        min="1"
                        value={tier.minPages}
                        onChange={(e) => {
                          const val = parseInt(e.target.value, 10) || 1;
                          setBulkDiscounts((prev) =>
                            prev.map((t, i) => (i === idx ? { ...t, minPages: val } : t))
                          );
                        }}
                        className="w-24 px-2.5 py-1 rounded border border-zinc-200 bg-white text-xs font-mono text-zinc-800"
                      />
                      <span className="text-xs text-zinc-500">pages</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="text-[10px] text-zinc-400 uppercase font-mono block mb-1">
                      Discount Percentage
                    </label>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={tier.discountPercent}
                        onChange={(e) => {
                          const val = Math.min(100, Math.max(0, parseFloat(e.target.value) || 0));
                          setBulkDiscounts((prev) =>
                            prev.map((t, i) => (i === idx ? { ...t, discountPercent: val } : t))
                          );
                        }}
                        className="w-20 px-2.5 py-1 rounded border border-zinc-200 bg-white text-xs font-mono text-zinc-800"
                      />
                      <span className="text-xs font-semibold text-emerald-700">% off</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: LIVE PRICE SIMULATOR */}
      {activeTab === 'simulator' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Controls */}
          <div className="bg-white rounded-xl border border-zinc-200/90 p-5 space-y-4 shadow-2xs text-xs">
            <h3 className="text-xs font-semibold text-zinc-900 flex items-center gap-1.5">
              <Calculator className="h-3.5 w-3.5 text-zinc-500" />
              Customer Order Parameters
            </h3>

            {/* Paper Size */}
            <div>
              <span className="text-[10px] text-zinc-400 uppercase font-mono block mb-1">Paper Size</span>
              <div className="grid grid-cols-4 gap-1.5">
                {(['A4', 'A3', 'A5', 'LEGAL'] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSimSize(size)}
                    className={`py-1.5 rounded-lg border text-center font-mono ${
                      simSize === size ? 'border-zinc-900 bg-zinc-900 text-white font-semibold' : 'border-zinc-200 bg-white text-zinc-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Mode & Duplex */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-mono block mb-1">Color Mode</span>
                <div className="grid grid-cols-2 p-0.5 rounded-lg bg-zinc-100 border border-zinc-200/70 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setSimColor('BW')}
                    className={`py-1 rounded font-medium ${simColor === 'BW' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500'}`}
                  >
                    B&W
                  </button>
                  <button
                    type="button"
                    onClick={() => setSimColor('COLOR')}
                    className={`py-1 rounded font-medium ${simColor === 'COLOR' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-zinc-500'}`}
                  >
                    Color
                  </button>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-mono block mb-1">Duplex / Sides</span>
                <div className="grid grid-cols-2 p-0.5 rounded-lg bg-zinc-100 border border-zinc-200/70 text-[11px]">
                  <button
                    type="button"
                    onClick={() => setSimDuplex('SIMPLEX')}
                    className={`py-1 rounded font-medium ${simDuplex === 'SIMPLEX' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500'}`}
                  >
                    1-Sided
                  </button>
                  <button
                    type="button"
                    onClick={() => setSimDuplex('DUPLEX')}
                    className={`py-1 rounded font-medium ${simDuplex === 'DUPLEX' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500'}`}
                  >
                    2-Sided
                  </button>
                </div>
              </div>
            </div>

            {/* Pages & Copies */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-mono block mb-1">Page Count</span>
                <input
                  type="number"
                  min="1"
                  value={simPages}
                  onChange={(e) => setSimPages(Math.max(1, parseInt(e.target.value, 10) || 1))}
                  className="w-full px-3 py-1.5 rounded-lg border border-zinc-200 font-mono text-zinc-800"
                />
              </div>

              <div>
                <span className="text-[10px] text-zinc-400 uppercase font-mono block mb-1">Copies</span>
                <input
                  type="number"
                  min="1"
                  value={simCopies}
                  onChange={(e) => setSimCopies(Math.max(1, parseInt(e.target.value, 10) || 1))}
                  className="w-full px-3 py-1.5 rounded-lg border border-zinc-200 font-mono text-zinc-800"
                />
              </div>
            </div>

            {/* Finishing Selection */}
            <div className="pt-2 border-t border-zinc-100 space-y-2">
              <span className="text-[10px] text-zinc-400 uppercase font-mono block">Add-On Finishing</span>
              
              <div className="flex items-center gap-2">
                <span className="w-20 text-[11px] text-zinc-500">Stapling:</span>
                <select
                  value={simStaple}
                  onChange={(e) => setSimStaple(e.target.value as any)}
                  className="flex-1 px-2.5 py-1 rounded-lg border border-zinc-200 bg-white text-xs text-zinc-800"
                >
                  <option value="NONE">None (₹0)</option>
                  <option value="CORNER">Corner Staple (+₹{finishing.stapleCorner})</option>
                  <option value="SIDE">Double Side Staple (+₹{finishing.stapleSide})</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-20 text-[11px] text-zinc-500">Binding:</span>
                <select
                  value={simBinding}
                  onChange={(e) => setSimBinding(e.target.value as any)}
                  className="flex-1 px-2.5 py-1 rounded-lg border border-zinc-200 bg-white text-xs text-zinc-800"
                >
                  <option value="NONE">None (₹0)</option>
                  <option value="SPIRAL">Spiral Binding (+₹{finishing.bindingSpiral})</option>
                  <option value="HARDCOVER">Hardcover (+₹{finishing.bindingHardcover})</option>
                  <option value="PROJECT">Project Gold Lettering (+₹{finishing.bindingProject})</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-20 text-[11px] text-zinc-500">Lamination:</span>
                <select
                  value={simLamination}
                  onChange={(e) => setSimLamination(e.target.value as any)}
                  className="flex-1 px-2.5 py-1 rounded-lg border border-zinc-200 bg-white text-xs text-zinc-800"
                >
                  <option value="NONE">None (₹0)</option>
                  <option value="GLOSSY">Glossy Lamination (+₹{finishing.laminationGlossy}/page)</option>
                  <option value="MATTE">Matte Lamination (+₹{finishing.laminationMatte}/page)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Real-Time Price Output */}
          <div className="bg-white rounded-xl border border-zinc-200/90 p-5 space-y-4 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-zinc-900">Price Breakdown Calculation</h3>
              
              <div className="space-y-2 text-xs divide-y divide-zinc-100">
                <div className="flex items-center justify-between pt-1">
                  <span className="text-zinc-500">Base Rate per Impression:</span>
                  <span className="font-mono text-zinc-800">₹{simResult.unitRate.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-zinc-500">Total Printed Impressions:</span>
                  <span className="font-mono text-zinc-800">{simResult.totalPages} pages</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-zinc-500">Print Subtotal:</span>
                  <span className="font-mono font-medium text-zinc-900">₹{simResult.printSubtotal.toFixed(2)}</span>
                </div>

                {simResult.appliedPercent > 0 && (
                  <div className="flex items-center justify-between pt-1 text-emerald-700">
                    <span>Bulk Tier Discount ({simResult.appliedPercent}% off):</span>
                    <span className="font-mono font-medium">- ₹{simResult.discountAmount.toFixed(2)}</span>
                  </div>
                )}

                {simResult.finishingSubtotal > 0 && (
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-zinc-500">Finishing & Bindery:</span>
                    <span className="font-mono text-zinc-800">+ ₹{simResult.finishingSubtotal.toFixed(2)}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex items-baseline justify-between">
              <div>
                <span className="text-[10px] text-zinc-400 block uppercase font-mono">Final Customer Charge</span>
                <span className="text-2xl font-bold text-zinc-900">₹{simResult.grandTotal.toFixed(2)}</span>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono">
                ₹{(simResult.grandTotal / (simPages * simCopies)).toFixed(2)} / page effective
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
