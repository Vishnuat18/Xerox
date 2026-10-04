'use client';

import React, { useState, useRef, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Trash2, 
  Check, 
  AlertCircle, 
  ArrowRight, 
  Printer, 
  Plus, 
  Minus, 
  Eye, 
  Upload, 
  Sparkles,
  CheckCircle2,
  Loader2,
  Layers,
  User,
  Phone,
  Clock,
  X,
  ChevronRight
} from 'lucide-react';
import { 
  PrintPreviewModal, 
  PaperSize, 
  Orientation, 
  ColorMode, 
  DuplexMode, 
  PrintPreviewSpec 
} from '@/components/customer/PrintPreviewModal';
import { countFilePages } from '@/lib/pdf-page-counter';

interface PricingRule {
  paperSize: string;
  bwSinglePrice: number;
  bwDoublePrice: number;
  colorSinglePrice: number;
  colorDoublePrice: number;
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

interface ShopProps {
  id: string;
  name: string;
  slug: string;
  phone: string;
  address?: string | null;
  pricingRules: PricingRule[];
  finishing?: FinishingRates;
  bulkDiscounts?: BulkDiscountTier[];
  volumeDiscountsEnabled?: boolean;
}

interface FileWithSpec {
  file: File;
  spec: PrintPreviewSpec;
}

// Paper size multiplier relative to standard A4 Xerox
const PAPER_PRICE_MULTIPLIER: Record<PaperSize, number> = {
  A4: 1.0,
  A3: 2.0,
  A2: 4.0,
  A1: 8.0,
  A5: 0.75,
  A6: 0.5,
};

export function CustomerUploadClient({ shop }: { shop: ShopProps }) {
  const [customerName, setCustomerName] = useState('Rahul Sharma');
  const [customerPhone, setCustomerPhone] = useState('9876543210');
  
  // Universal Cross-Shop Customer Authentication State
  const [customerSession, setCustomerSession] = useState<{ id?: string; fullName: string; phone: string } | null>(null);
  const [crossShopOrders, setCrossShopOrders] = useState<any[]>([]);
  const [showOrdersDrawer, setShowOrdersDrawer] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginInputName, setLoginInputName] = useState('Rahul Sharma');
  const [loginInputPhone, setLoginInputPhone] = useState('9876543210');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [filesWithSpecs, setFilesWithSpecs] = useState<FileWithSpec[]>([]);
  const [customerNotes, setCustomerNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountingPages, setIsCountingPages] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [completedOrder, setCompletedOrder] = useState<any | null>(null);
  const [previewingIndex, setPreviewingIndex] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-resolve cross-shop customer profile on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sph_customer_profile');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.fullName && parsed?.phone) {
          setCustomerName(parsed.fullName);
          setCustomerPhone(parsed.phone);
          setCustomerSession(parsed);
          setLoginInputName(parsed.fullName);
          setLoginInputPhone(parsed.phone);
        }
      }
    } catch {}

    const resolveUniversalSession = async () => {
      try {
        const res = await fetch('/api/v1/customer/auth');
        const json = await res.json();
        if (json.success && json.data.customer) {
          setCustomerSession(json.data.customer);
          setCustomerName(json.data.customer.fullName);
          setCustomerPhone(json.data.customer.phone);
          setLoginInputName(json.data.customer.fullName);
          setLoginInputPhone(json.data.customer.phone);
          setCrossShopOrders(json.data.orders || []);
          localStorage.setItem('sph_customer_profile', JSON.stringify(json.data.customer));
        }
      } catch (err) {
        console.error('Failed to resolve cross-shop customer session', err);
      }
    };

    resolveUniversalSession();
  }, []);

  // Save / Switch Universal Customer Profile
  const handleSaveCustomerProfile = async (name: string, phone: string) => {
    setIsLoggingIn(true);
    try {
      const cleanPhone = phone.replace(/[^0-9]/g, '');
      const res = await fetch('/api/v1/customer/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: name.trim(), phone: cleanPhone }),
      });
      const json = await res.json();
      if (json.success && json.data.customer) {
        setCustomerSession(json.data.customer);
        setCustomerName(json.data.customer.fullName);
        setCustomerPhone(json.data.customer.phone);
        setCrossShopOrders(json.data.orders || []);
        localStorage.setItem('sph_customer_profile', JSON.stringify(json.data.customer));
        setShowLoginModal(false);
      }
    } catch (err) {
      console.error('Failed to log in customer', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Rate rules (base A4)
  const a4Rule = shop.pricingRules.find((r) => r.paperSize === 'A4') || {
    bwSinglePrice: 2.0,
    bwDoublePrice: 3.0,
    colorSinglePrice: 10.0,
    colorDoublePrice: 18.0,
  };

  const handleAddFiles = async (incoming: FileList | File[]) => {
    setErrorMessage('');
    const allowed = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'webp'];
    const validFiles: File[] = [];

    Array.from(incoming).forEach((file) => {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';
      if (!allowed.includes(ext)) {
        setErrorMessage(`"${file.name}" is not supported. Supported: PDF, DOCX, JPG, PNG.`);
        return;
      }
      if (file.size > 50 * 1024 * 1024) {
        setErrorMessage(`"${file.name}" exceeds the 50MB limit.`);
        return;
      }
      validFiles.push(file);
    });

    if (validFiles.length === 0) return;

    setIsCountingPages(true);
    try {
      const newItems: FileWithSpec[] = [];
      for (const file of validFiles) {
        // Accurate real-time PDF page detection via pdf-lib and binary fallback
        const exactPageCount = await countFilePages(file);
        newItems.push({
          file,
          spec: {
            copies: 1,
            color: 'BW',
            duplex: 'DUPLEX',
            paperSize: 'A4',
            orientation: 'PORTRAIT',
            pageRange: 'ALL',
            stapling: 'NONE',
            binding: 'NONE',
            lamination: 'NONE',
            detectedPageCount: Math.max(1, exactPageCount),
          },
        });
      }
      setFilesWithSpecs((prev) => [...prev, ...newItems]);
    } catch (err) {
      console.error('Error detecting PDF pages:', err);
    } finally {
      setIsCountingPages(false);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFilesWithSpecs((prev) => prev.filter((_, i) => i !== index));
    if (previewingIndex === index) setPreviewingIndex(null);
  };

  const updateFileSpec = (index: number, updates: Partial<PrintPreviewSpec>) => {
    setFilesWithSpecs((prev) => {
      const copy = [...prev];
      copy[index] = {
        ...copy[index],
        spec: { ...copy[index].spec, ...updates },
      };
      return copy;
    });
  };

  // Apply first file's specs to all files
  const handleApplyToAll = () => {
    if (filesWithSpecs.length < 2) return;
    const baseSpec = filesWithSpecs[0].spec;
    setFilesWithSpecs((prev) =>
      prev.map((item, idx) =>
        idx === 0 ? item : { ...item, spec: { ...baseSpec, detectedPageCount: item.spec.detectedPageCount } }
      )
    );
  };

  const rulesMap = useMemo(() => {
    return new Map<string, PricingRule>(
      shop.pricingRules.map((r) => [r.paperSize.toUpperCase(), r])
    );
  }, [shop.pricingRules]);

  const finishingRates: FinishingRates = shop.finishing || {
    stapleCorner: 2.0,
    stapleSide: 5.0,
    bindingSpiral: 35.0,
    bindingHardcover: 65.0,
    bindingProject: 150.0,
    laminationGlossy: 15.0,
    laminationMatte: 25.0,
  };

  // Calculate live price including specific paper size rates, finishing, and volume discounts
  const calculateBreakdown = () => {
    let printSubtotal = 0;
    let finishingSubtotal = 0;
    let totalPagesCount = 0;

    filesWithSpecs.forEach((item) => {
      const { copies, color, duplex, paperSize, detectedPageCount, stapling, binding, lamination } = item.spec;
      const isColor = color === 'COLOR';
      const isDuplex = duplex === 'DUPLEX';
      const sizeKey = (paperSize || 'A4').toUpperCase();

      const matchedRule = rulesMap.get(sizeKey) || rulesMap.get('A4') || {
        paperSize: 'A4',
        bwSinglePrice: 2.0,
        bwDoublePrice: 3.0,
        colorSinglePrice: 10.0,
        colorDoublePrice: 18.0,
      };

      let unitRate = matchedRule.bwSinglePrice;
      if (isColor && isDuplex) unitRate = matchedRule.colorDoublePrice / 2;
      else if (isColor && !isDuplex) unitRate = matchedRule.colorSinglePrice;
      else if (!isColor && isDuplex) unitRate = matchedRule.bwDoublePrice / 2;
      else unitRate = matchedRule.bwSinglePrice;

      const docPages = detectedPageCount * copies;
      totalPagesCount += docPages;
      printSubtotal += unitRate * docPages;

      // Finishing add-ons
      if (stapling === 'CORNER') finishingSubtotal += finishingRates.stapleCorner * copies;
      else if (stapling === 'SIDE') finishingSubtotal += finishingRates.stapleSide * copies;

      if (binding === 'SPIRAL') finishingSubtotal += finishingRates.bindingSpiral * copies;
      else if (binding === 'HARDCOVER') finishingSubtotal += finishingRates.bindingHardcover * copies;
      else if (binding === 'PROJECT') finishingSubtotal += finishingRates.bindingProject * copies;

      if (lamination === 'GLOSSY') finishingSubtotal += finishingRates.laminationGlossy * docPages;
      else if (lamination === 'MATTE') finishingSubtotal += finishingRates.laminationMatte * docPages;
    });

    let discountAmount = 0;
    let appliedPercent = 0;
    if (shop.volumeDiscountsEnabled !== false && Array.isArray(shop.bulkDiscounts) && shop.bulkDiscounts.length > 0) {
      const sortedTiers = [...shop.bulkDiscounts].sort((a, b) => b.minPages - a.minPages);
      const tier = sortedTiers.find((t) => totalPagesCount >= t.minPages);
      if (tier && tier.discountPercent > 0) {
        appliedPercent = tier.discountPercent;
        discountAmount = (printSubtotal * tier.discountPercent) / 100;
      }
    }

    const grandTotal = Math.max(1, printSubtotal - discountAmount + finishingSubtotal);

    return {
      printSubtotal,
      finishingSubtotal,
      totalPagesCount,
      appliedPercent,
      discountAmount,
      grandTotal,
    };
  };

  const breakdown = calculateBreakdown();
  const totalEstimatedAmount = breakdown.grandTotal;
  const totalPagesSum = breakdown.totalPagesCount;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!customerName.trim()) {
      setErrorMessage('Please enter your name');
      return;
    }
    if (customerPhone.trim().length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }
    if (filesWithSpecs.length === 0) {
      setErrorMessage('Please select at least one document');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Upload binary files
      const uploadFormData = new FormData();
      uploadFormData.append('shopSlug', shop.slug);
      uploadFormData.append('customerName', customerName.trim());
      uploadFormData.append('customerPhone', customerPhone.trim());
      filesWithSpecs.forEach(({ file }) => {
        uploadFormData.append('files', file);
      });

      const uploadRes = await fetch('/api/v1/customer/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      const uploadJson = await uploadRes.json();
      if (!uploadRes.ok || !uploadJson.success) {
        throw new Error(uploadJson.error?.message || 'File upload failed');
      }

      const uploadedFiles = uploadJson.data.files;
      const customer = uploadJson.data.customer;

      // 2. Attach specifications and place order (Milestone 4)
      const documentsPayload = uploadedFiles.map((upFile: any, index: number) => {
        const spec = filesWithSpecs[index]?.spec || {
          copies: 1,
          color: 'BW',
          duplex: 'DUPLEX',
          paperSize: 'A4',
          orientation: 'PORTRAIT',
          pageRange: 'ALL',
          pagesPerSheet: 1,
          collate: true,
          stapling: 'NONE',
        };

        return {
          originalFilename: upFile.originalFilename,
          storageKey: upFile.storageKey,
          fileSizeBytes: upFile.fileSizeBytes,
          mimeType: upFile.mimeType,
          sha256Checksum: upFile.sha256Checksum,
          detectedPageCount: spec.detectedPageCount,
          specs: {
            copies: spec.copies,
            color: spec.color,
            duplex: spec.duplex === 'DUPLEX' ? 'DUPLEX_LONG_EDGE' : 'SIMPLEX',
            paperSize: spec.paperSize,
            orientation: spec.orientation,
            pageRange: spec.pageRange,
            pagesPerSheet: 1,
            collate: true,
            stapling: spec.stapling || 'NONE',
            binding: spec.binding || 'NONE',
            lamination: spec.lamination || 'NONE',
          },
        };
      });

      const orderRes = await fetch('/api/v1/customer/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shopSlug: shop.slug,
          customerId: customer.id,
          documents: documentsPayload,
          customerNotes: customerNotes.trim() || null,
        }),
      });

      const orderJson = await orderRes.json();
      if (!orderRes.ok || !orderJson.success) {
        throw new Error(orderJson.error?.message || 'Order creation failed');
      }

      setCompletedOrder(orderJson.data.order);

      // Persist customer profile across all shops on the platform
      try {
        await fetch('/api/v1/customer/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName: customerName.trim(), phone: customerPhone.trim() }),
        });
        localStorage.setItem('sph_customer_profile', JSON.stringify({
          fullName: customerName.trim(),
          phone: customerPhone.trim(),
        }));
      } catch {}
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Completed Order Confirmation Screen (Apple/Anthropic receipt style)
  if (completedOrder) {
    return (
      <div className="min-h-screen bg-zinc-50/70 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-2xl border border-zinc-200 p-6 space-y-5 text-center shadow-sm">
          
          <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <Check className="h-5 w-5" />
          </div>

          <div className="space-y-1">
            <h1 className="text-base font-semibold text-zinc-900">
              Order Sent to Counter
            </h1>
            <p className="text-xs text-zinc-400">
              {shop.name}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-100 font-mono text-center space-y-1">
            <span className="text-[10px] uppercase text-zinc-400 block tracking-wider font-sans">
              Order Reference
            </span>
            <span className="text-lg font-bold text-zinc-900 tracking-tight">
              {completedOrder.orderNumber}
            </span>
          </div>

          <div className="text-left text-xs space-y-2 py-2 border-y border-zinc-100 text-zinc-600">
            <div className="flex justify-between">
              <span className="text-zinc-400">Customer</span>
              <span className="font-medium text-zinc-800">{customerName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Documents</span>
              <span className="font-medium text-zinc-800">{completedOrder.totalDocuments} file(s)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Estimated Total</span>
              <span className="font-semibold text-zinc-900">₹{completedOrder.estimatedAmount.toFixed(2)}</span>
            </div>
          </div>

          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Please mention reference <strong className="text-zinc-800">{completedOrder.orderNumber}</strong> at the counter to collect your prints.
          </p>

          <div className="space-y-2 pt-1">
            <Link
              href={`/s/${shop.slug}/order/${completedOrder.id}`}
              className="w-full py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <span>Track Live Progress</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <button
              onClick={() => {
                setCompletedOrder(null);
                setFilesWithSpecs([]);
              }}
              className="w-full py-2 rounded-xl text-xs font-medium border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 transition-all"
            >
              Upload Another Document
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50/60 flex flex-col">
      
      {/* Quiet Mobile Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-zinc-900 text-white flex items-center justify-center">
              <Printer className="h-3.5 w-3.5" />
            </div>
            <span className="text-xs font-semibold text-zinc-900 truncate max-w-[180px]">
              {shop.name}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Counter Ready</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-md mx-auto w-full p-4 space-y-4">
        
        {/* Universal Cross-Shop Customer Profile Banner */}
        {customerSession ? (
          <div className="bg-white rounded-xl border border-emerald-200/80 p-3.5 space-y-2.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-2xs">
                  {customerName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-zinc-900">{customerName}</span>
                    <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[9px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Universal Profile
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 font-mono">
                    +91 {customerPhone.replace(/[^0-9]/g, '').slice(-10)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setShowOrdersDrawer(true)}
                  className="px-2.5 py-1 rounded-lg bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 font-medium text-[11px] flex items-center gap-1 transition-colors shadow-2xs"
                  title="View your orders across all print shops"
                >
                  <Layers className="h-3 w-3 text-zinc-500" />
                  <span>My Orders ({crossShopOrders.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setLoginInputName(customerName);
                    setLoginInputPhone(customerPhone);
                    setShowLoginModal(true);
                  }}
                  className="px-2 py-1 text-[11px] text-zinc-400 hover:text-zinc-800 font-medium"
                >
                  Switch
                </button>
              </div>
            </div>
            <p className="text-[10px] text-zinc-400 font-mono pt-1.5 border-t border-zinc-100 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Recognized across all partner shops • No re-login needed
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-zinc-200/80 p-3.5 space-y-2.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-zinc-800">Your Contact Details</span>
              <button
                type="button"
                onClick={() => {
                  setLoginInputName(customerName);
                  setLoginInputPhone(customerPhone);
                  setShowLoginModal(true);
                }}
                className="text-[11px] text-emerald-700 hover:underline font-medium"
              >
                Existing User? Sign In
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="text-[10px] font-medium text-zinc-400 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>
              <div>
                <label className="text-[10px] font-medium text-zinc-400 block mb-1">Mobile Number</label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="10-digit mobile"
                  className="w-full rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-mono"
                />
              </div>
            </div>
            <p className="text-[10px] text-zinc-400">
              ✨ Enter Name & Contact once. Automatically recognized across any print shop on the platform!
            </p>
          </div>
        )}

        {/* Upload Trigger Area */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
          className="hidden"
          onChange={(e) => e.target.files && handleAddFiles(e.target.files)}
        />

        <div
          onClick={() => fileInputRef.current?.click()}
          className="border border-dashed border-zinc-300 hover:border-zinc-400 rounded-xl p-5 text-center cursor-pointer transition-colors bg-white group"
        >
          <div className="h-8 w-8 rounded-full bg-zinc-100 group-hover:bg-zinc-200 text-zinc-600 flex items-center justify-center mx-auto mb-2 transition-colors">
            <Upload className="h-4 w-4" />
          </div>
          <p className="text-xs font-medium text-zinc-800">
            Tap to select documents
          </p>
          <p className="text-[10px] text-zinc-400 mt-0.5">
            PDF, Word, or Images • Up to 50MB
          </p>
        </div>

        {isCountingPages && (
          <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs flex items-center gap-2 animate-pulse">
            <Loader2 className="h-4 w-4 animate-spin text-zinc-600 shrink-0" />
            <span>Analyzing document structure and counting PDF pages...</span>
          </div>
        )}

        {errorMessage && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="h-3.5 w-3.5 shrink-0 text-rose-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Print Specifications Per Document */}
        {filesWithSpecs.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs px-1">
              <span className="font-semibold text-zinc-800">
                Print Settings ({filesWithSpecs.length} {filesWithSpecs.length === 1 ? 'file' : 'files'})
              </span>
              {filesWithSpecs.length > 1 && (
                <button
                  type="button"
                  onClick={handleApplyToAll}
                  className="text-[11px] text-emerald-700 hover:underline font-medium"
                >
                  Apply First File to All
                </button>
              )}
            </div>

            {filesWithSpecs.map((item, idx) => {
              const spec = item.spec;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-zinc-200/80 p-3.5 space-y-3 shadow-2xs"
                >
                  {/* File Title, Print Preview Button & Remove Button */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 truncate">
                      <FileText className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                      <span className="text-xs font-semibold text-zinc-800 truncate">
                        {item.file.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* Print Preview Button in Popup */}
                      <button
                        type="button"
                        onClick={() => setPreviewingIndex(idx)}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium bg-zinc-100 hover:bg-zinc-200/80 text-zinc-800 transition-colors"
                        title="Open interactive print preview"
                      >
                        <Eye className="h-3 w-3 text-zinc-500" />
                        Preview
                      </button>

                      <button
                        type="button"
                        onClick={() => handleRemoveFile(idx)}
                        className="text-zinc-400 hover:text-rose-500 p-1"
                        title="Remove file"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Accurate Verified PDF Page Count Badge & Stepper */}
                  <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/60 text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-900">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span className="font-semibold font-mono text-[11px]">{spec.detectedPageCount} {spec.detectedPageCount === 1 ? 'page' : 'pages'}</span>
                      <span className="text-[10px] text-emerald-700/80 hidden sm:inline">(detected from PDF)</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-zinc-400 font-mono">Pages:</span>
                      <button
                        type="button"
                        onClick={() => updateFileSpec(idx, { detectedPageCount: Math.max(1, spec.detectedPageCount - 1) })}
                        className="h-5 w-5 rounded border border-zinc-200 bg-white flex items-center justify-center text-zinc-600 hover:bg-zinc-100 active:scale-95"
                        title="Decrease page count"
                      >
                        <Minus className="h-2.5 w-2.5" />
                      </button>
                      <span className="w-5 text-center font-mono font-bold text-xs text-zinc-900">
                        {spec.detectedPageCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateFileSpec(idx, { detectedPageCount: spec.detectedPageCount + 1 })}
                        className="h-5 w-5 rounded border border-zinc-200 bg-white flex items-center justify-center text-zinc-600 hover:bg-zinc-100 active:scale-95"
                        title="Increase page count"
                      >
                        <Plus className="h-2.5 w-2.5" />
                      </button>
                    </div>
                  </div>

                  {/* Specification Controls */}
                  <div className="space-y-2.5 pt-1 text-xs">
                    
                    {/* Paper Size Quick Bar: A4 (Default), A3, A1, A2, A5, A6 */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-[10px] text-zinc-400 uppercase font-mono">Paper Size</label>
                        <span className="text-[10px] text-zinc-400 font-mono">
                          {spec.paperSize === 'A4' ? 'Default' : spec.paperSize}
                        </span>
                      </div>
                      <div className="grid grid-cols-6 gap-1 text-[11px] text-center font-mono">
                        {(['A4', 'A3', 'A1', 'A2', 'A5', 'A6'] as PaperSize[]).map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => updateFileSpec(idx, { paperSize: size })}
                            className={`py-1 rounded-md transition-all font-medium ${
                              spec.paperSize === size
                                ? 'bg-zinc-900 text-white shadow-2xs font-semibold'
                                : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Orientation & Color Mode */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-[10px] text-zinc-400 uppercase font-mono">Orientation</label>
                        <div className="grid grid-cols-2 p-0.5 rounded-lg bg-zinc-100 border border-zinc-200/60 text-[11px]">
                          <button
                            type="button"
                            onClick={() => updateFileSpec(idx, { orientation: 'PORTRAIT' })}
                            className={`py-1 rounded-md transition-all font-medium ${
                              spec.orientation === 'PORTRAIT' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500'
                            }`}
                          >
                            Portrait
                          </button>
                          <button
                            type="button"
                            onClick={() => updateFileSpec(idx, { orientation: 'LANDSCAPE' })}
                            className={`py-1 rounded-md transition-all font-medium ${
                              spec.orientation === 'LANDSCAPE' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500'
                            }`}
                          >
                            Landscape
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] text-zinc-400 uppercase font-mono">Color</label>
                        <div className="grid grid-cols-2 p-0.5 rounded-lg bg-zinc-100 border border-zinc-200/60 text-[11px]">
                          <button
                            type="button"
                            onClick={() => updateFileSpec(idx, { color: 'BW' })}
                            className={`py-1 rounded-md transition-all font-medium ${
                              spec.color === 'BW' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500'
                            }`}
                          >
                            B&W
                          </button>
                          <button
                            type="button"
                            onClick={() => updateFileSpec(idx, { color: 'COLOR' })}
                            className={`py-1 rounded-md transition-all font-medium ${
                              spec.color === 'COLOR' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-zinc-500'
                            }`}
                          >
                            Color
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Sides (Duplex) & Copies Stepper */}
                    <div className="grid grid-cols-2 gap-2 items-end pt-0.5">
                      <div className="space-y-1">
                        <label className="text-[10px] text-zinc-400 uppercase font-mono">Sides</label>
                        <div className="grid grid-cols-2 p-0.5 rounded-lg bg-zinc-100 border border-zinc-200/60 text-[11px]">
                          <button
                            type="button"
                            onClick={() => updateFileSpec(idx, { duplex: 'SIMPLEX' })}
                            className={`py-1 rounded-md transition-all font-medium ${
                              spec.duplex === 'SIMPLEX' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500'
                            }`}
                          >
                            1-Side
                          </button>
                          <button
                            type="button"
                            onClick={() => updateFileSpec(idx, { duplex: 'DUPLEX' })}
                            className={`py-1 rounded-md transition-all font-medium ${
                              spec.duplex === 'DUPLEX' ? 'bg-white text-zinc-900 shadow-2xs' : 'text-zinc-500'
                            }`}
                          >
                            2-Sided
                          </button>
                        </div>
                      </div>

                      {/* Copies Stepper */}
                      <div className="flex items-center justify-end gap-1.5 pb-0.5">
                        <span className="text-[11px] text-zinc-400 mr-1">Copies:</span>
                        <button
                          type="button"
                          onClick={() => updateFileSpec(idx, { copies: Math.max(1, spec.copies - 1) })}
                          className="h-6 w-6 rounded-md border border-zinc-200 bg-white flex items-center justify-center text-zinc-600 hover:bg-zinc-50 active:scale-95"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-5 text-center font-mono font-semibold text-xs text-zinc-900">
                          {spec.copies}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateFileSpec(idx, { copies: spec.copies + 1 })}
                          className="h-6 w-6 rounded-md border border-zinc-200 bg-white flex items-center justify-center text-zinc-600 hover:bg-zinc-50 active:scale-95"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Finishing & Binding Quick Selector */}
                    <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs">
                      <span className="text-[10px] text-zinc-400 uppercase font-mono">Finishing</span>
                      <select
                        value={
                          spec.binding === 'SPIRAL'
                            ? 'SPIRAL'
                            : spec.stapling === 'CORNER'
                            ? 'STAPLE'
                            : spec.lamination === 'GLOSSY'
                            ? 'LAMINATION'
                            : 'NONE'
                        }
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val === 'STAPLE') updateFileSpec(idx, { stapling: 'CORNER', binding: 'NONE', lamination: 'NONE' });
                          else if (val === 'SPIRAL') updateFileSpec(idx, { stapling: 'NONE', binding: 'SPIRAL', lamination: 'NONE' });
                          else if (val === 'LAMINATION') updateFileSpec(idx, { stapling: 'NONE', binding: 'NONE', lamination: 'GLOSSY' });
                          else updateFileSpec(idx, { stapling: 'NONE', binding: 'NONE', lamination: 'NONE' });
                        }}
                        className="px-2 py-0.5 rounded-md border border-zinc-200 bg-white text-zinc-700 text-[11px] focus:outline-none focus:ring-1 focus:ring-zinc-900"
                      >
                        <option value="NONE">Loose Sheets (₹0)</option>
                        <option value="STAPLE">Corner Staple (+₹{finishingRates.stapleCorner})</option>
                        <option value="SPIRAL">Spiral Binding (+₹{finishingRates.bindingSpiral})</option>
                        <option value="LAMINATION">Lamination (+₹{finishingRates.laminationGlossy}/page)</option>
                      </select>
                    </div>

                  </div>
                </div>
              );
            })}

            {/* Special Instructions Note */}
            <div className="space-y-1">
              <label className="text-[10px] font-medium text-zinc-400 uppercase font-mono px-1">
                Instructions for Shop Owner (Optional)
              </label>
              <input
                type="text"
                value={customerNotes}
                onChange={(e) => setCustomerNotes(e.target.value)}
                placeholder="e.g. Staple corner, spiral bind, print only pages 1 to 5"
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
              />
            </div>

            {/* Price Summary & Submit Bar */}
            <div className="rounded-xl bg-white border border-zinc-200/90 p-4 space-y-3 shadow-2xs">
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-zinc-500">
                  <span>Print Subtotal ({breakdown.totalPagesCount} pages):</span>
                  <span className="font-mono text-zinc-800">₹{breakdown.printSubtotal.toFixed(2)}</span>
                </div>

                {breakdown.finishingSubtotal > 0 && (
                  <div className="flex items-center justify-between text-zinc-500">
                    <span>Finishing & Bindery:</span>
                    <span className="font-mono text-zinc-800">+ ₹{breakdown.finishingSubtotal.toFixed(2)}</span>
                  </div>
                )}

                {breakdown.appliedPercent > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 font-medium">
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Bulk Volume Discount ({breakdown.appliedPercent}% off):
                    </span>
                    <span className="font-mono">- ₹{breakdown.discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase font-mono">Total Estimated Amount</span>
                    <span className="text-xl font-bold text-zinc-900">
                      ₹{breakdown.grandTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-right text-[11px] text-zinc-400 font-mono">
                    <span>₹{(breakdown.grandTotal / (breakdown.totalPagesCount || 1)).toFixed(2)} / page</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleSubmitOrder}
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white transition-all flex items-center justify-center gap-1.5 shadow-2xs disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting to Counter...</span>
                ) : (
                  <>
                    <span>Confirm & Send Order</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Interactive Print Preview Popup Modal */}
      {previewingIndex !== null && filesWithSpecs[previewingIndex] && (
        <PrintPreviewModal
          isOpen={true}
          onClose={() => setPreviewingIndex(null)}
          file={filesWithSpecs[previewingIndex].file}
          spec={filesWithSpecs[previewingIndex].spec}
          onUpdateSpec={(updates) => updateFileSpec(previewingIndex, updates)}
        />
      )}

      {/* Universal Cross-Shop Orders Drawer */}
      {showOrdersDrawer && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="fixed inset-0 bg-zinc-950/40 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setShowOrdersDrawer(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
            <div className="w-screen max-w-md bg-white border-l border-zinc-200 shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-200">
              
              <div className="p-4 border-b border-zinc-200 flex items-center justify-between bg-zinc-50/70">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">My Print Orders</h3>
                  <p className="text-xs text-zinc-400">Across all Smart Print Hub partner shops</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowOrdersDrawer(false)}
                  className="h-8 w-8 text-zinc-400 hover:text-zinc-900 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {crossShopOrders.length === 0 ? (
                  <div className="py-12 text-center text-zinc-400 text-xs">
                    <Clock className="h-8 w-8 mx-auto mb-2 text-zinc-300" />
                    <p>No past orders found for +91 {customerPhone.slice(-10)}</p>
                  </div>
                ) : (
                  crossShopOrders.map((o) => (
                    <div key={o.id} className="p-3.5 rounded-xl border border-zinc-200 bg-white space-y-2 hover:border-zinc-300 transition-colors shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded">
                          {o.orderNumber}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {new Date(o.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="text-xs text-zinc-600">
                        <p className="font-semibold text-zinc-800">{o.shop?.name || shop.name}</p>
                        <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                          {o.totalDocuments || 1} file(s) • {o.totalPages || 1} pages • ₹{(o.finalAmount ?? o.estimatedAmount).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-zinc-100">
                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${
                          o.status === 'READY'
                            ? 'bg-teal-50 text-teal-800 border border-teal-200'
                            : o.status === 'COMPLETED'
                            ? 'bg-zinc-100 text-zinc-700'
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                          {o.status === 'READY' ? 'Ready for Pickup' : o.status === 'COMPLETED' ? 'Completed' : 'Printing / In Progress'}
                        </span>

                        <Link
                          href={`/s/${o.shop?.slug || shop.slug}/order/${o.id}`}
                          className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                        >
                          <span>Track Live</span>
                          <ChevronRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Switch Account / Universal Customer Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-sm bg-white rounded-2xl border border-zinc-200 shadow-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-zinc-900">Universal Customer Login</h3>
                <p className="text-xs text-zinc-400">Use the same profile across all print shops</p>
              </div>
              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="h-7 w-7 text-zinc-400 hover:text-zinc-900 rounded-lg flex items-center justify-center"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[10px] font-medium text-zinc-400 uppercase font-mono block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={loginInputName}
                  onChange={(e) => setLoginInputName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div>
                <label className="text-[10px] font-medium text-zinc-400 uppercase font-mono block mb-1">
                  Mobile Number (10 digits)
                </label>
                <input
                  type="tel"
                  value={loginInputPhone}
                  onChange={(e) => setLoginInputPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-mono"
                />
              </div>
            </div>

            <div className="pt-1 flex items-center gap-2">
              <button
                type="button"
                disabled={isLoggingIn || !loginInputName.trim() || loginInputPhone.trim().length < 10}
                onClick={() => handleSaveCustomerProfile(loginInputName, loginInputPhone)}
                className="flex-1 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition-colors disabled:opacity-50"
              >
                {isLoggingIn ? 'Connecting...' : 'Sign In & Sync'}
              </button>
              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="px-3 py-2 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-medium text-xs transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
