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
  ChevronRight,
  ChevronLeft,
  QrCode,
  Menu,
  ShieldCheck,
  Tag,
  Edit2
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
import {
  getDocumentIcon,
  BlackWhiteIcon,
  ColorPrintingIcon,
  OneSidedIcon,
  TwoSidedIcon,
  A4SizeIcon,
  MultiplePagesIcon,
} from '@/components/icons/PrintIcons';

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
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  
  // Universal Cross-Shop Customer Authentication State
  const [customerSession, setCustomerSession] = useState<{ id?: string; fullName: string; phone: string } | null>(null);
  const [crossShopOrders, setCrossShopOrders] = useState<any[]>([]);

  // First-Time One-Time Customer Onboarding Modal
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);
  const [onboardingName, setOnboardingName] = useState('');
  const [onboardingPhone, setOnboardingPhone] = useState('');
  const [isOnboardingSaving, setIsOnboardingSaving] = useState(false);
  const [onboardingError, setOnboardingError] = useState('');

  // Customer Profile & History Menu Sheet
  const [showCustomerMenu, setShowCustomerMenu] = useState(false);
  const [customerMenuTab, setCustomerMenuTab] = useState<'history' | 'rates' | 'profile'>('history');

  // Switch / Edit Profile Modal
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginInputName, setLoginInputName] = useState('');
  const [loginInputPhone, setLoginInputPhone] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [filesWithSpecs, setFilesWithSpecs] = useState<FileWithSpec[]>([]);
  const [customerNotes, setCustomerNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCountingPages, setIsCountingPages] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [completedOrder, setCompletedOrder] = useState<any | null>(null);
  const [previewingIndex, setPreviewingIndex] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-resolve cross-shop customer profile or trigger one-time scan onboarding on mount
  useEffect(() => {
    let hasOnboarded = false;
    let localProfile: { fullName: string; phone: string } | null = null;

    try {
      hasOnboarded = localStorage.getItem('sph_customer_onboarded') === 'true';
      const stored = localStorage.getItem('sph_customer_profile');
      if (stored) {
        localProfile = JSON.parse(stored);
      }
    } catch {}

    if (localProfile?.fullName && localProfile?.phone) {
      setCustomerName(localProfile.fullName);
      setCustomerPhone(localProfile.phone);
      setCustomerSession(localProfile);
      setOnboardingName(localProfile.fullName);
      setOnboardingPhone(localProfile.phone);
      setLoginInputName(localProfile.fullName);
      setLoginInputPhone(localProfile.phone);
    } else if (!hasOnboarded) {
      // First-time scan on this browser/counter! Prompt for Name & Contact
      setShowOnboardingModal(true);
    }

    const resolveUniversalSession = async () => {
      try {
        const res = await fetch('/api/v1/customer/auth');
        const json = await res.json();
        if (json.success && json.data.customer) {
          const cust = json.data.customer;
          setCustomerSession(cust);
          setCustomerName(cust.fullName);
          setCustomerPhone(cust.phone);
          setOnboardingName(cust.fullName);
          setOnboardingPhone(cust.phone);
          setLoginInputName(cust.fullName);
          setLoginInputPhone(cust.phone);
          setCrossShopOrders(json.data.orders || []);
          localStorage.setItem('sph_customer_profile', JSON.stringify(cust));
          localStorage.setItem('sph_customer_onboarded', 'true');
          setShowOnboardingModal(false);
        } else if (!hasOnboarded && !localProfile) {
          setShowOnboardingModal(true);
        }
      } catch (err) {
        console.error('Failed to resolve cross-shop customer session', err);
      }
    };

    resolveUniversalSession();
  }, []);

  // One-Time First-Time Customer Onboarding Form Submission
  const handleCompleteOnboarding = async (e: React.FormEvent) => {
    e.preventDefault();
    setOnboardingError('');

    const cleanName = onboardingName.trim();
    const cleanPhone = onboardingPhone.replace(/[^0-9]/g, '');

    if (cleanName.length < 2) {
      setOnboardingError('Please enter your name (minimum 2 characters).');
      return;
    }
    if (cleanPhone.length < 10) {
      setOnboardingError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsOnboardingSaving(true);
    try {
      // 1. Sync with Customer Auth API
      const res = await fetch('/api/v1/customer/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: cleanName, phone: cleanPhone }),
      });
      const json = await res.json();

      const profileData = {
        id: json.data?.customer?.id,
        fullName: cleanName,
        phone: cleanPhone,
      };

      // 2. Mark ONE-TIME setup complete in localStorage
      localStorage.setItem('sph_customer_onboarded', 'true');
      localStorage.setItem('sph_customer_profile', JSON.stringify(profileData));

      setCustomerName(cleanName);
      setCustomerPhone(cleanPhone);
      setCustomerSession(profileData);
      setLoginInputName(cleanName);
      setLoginInputPhone(cleanPhone);
      if (json.data?.orders) {
        setCrossShopOrders(json.data.orders);
      }

      // Close modal and reveal the upload page directly
      setShowOnboardingModal(false);
    } catch (err: any) {
      setOnboardingError(err.message || 'Could not complete registration. Please try again.');
    } finally {
      setIsOnboardingSaving(false);
    }
  };

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
        localStorage.setItem('sph_customer_onboarded', 'true');
        setShowLoginModal(false);
        setShowCustomerMenu(false);
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
          customerPhone: customerPhone.trim() || undefined,
          customerName: customerName.trim() || undefined,
          documents: documentsPayload,
          customerNotes: customerNotes.trim() || null,
        }),
      });

      const orderJson = await orderRes.json();
      if (!orderRes.ok || !orderJson.success) {
        throw new Error(orderJson.error?.message || 'Order creation failed');
      }

      setCompletedOrder(orderJson.data.order);
      setCrossShopOrders((prev) => [orderJson.data.order, ...prev]);

      // Persist customer profile across all shops on the platform in MySQL
      try {
        await fetch('/api/v1/customer/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName: customerName.trim(), phone: customerPhone.trim() }),
        });
        localStorage.setItem('sph_customer_onboarded', 'true');
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
      
      {/* Native App Style Mobile Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 px-3 sm:px-4 py-2.5">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <Link
              href="/scan"
              className="p-1 -ml-1 text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-zinc-100 flex items-center gap-0.5 transition-colors shrink-0"
              title="Scanner Place & Rate Card"
            >
              <ChevronLeft className="h-4 w-4" />
              <QrCode className="h-3.5 w-3.5 text-emerald-600" />
            </Link>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-zinc-900 truncate">
                  {shop.name}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              </div>
              <p className="text-[10px] text-zinc-400 truncate">
                {shop.address || 'Counter Online & Ready'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {customerSession ? (
              <button
                type="button"
                onClick={() => {
                  setCustomerMenuTab('history');
                  setShowCustomerMenu(true);
                }}
                className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-medium transition-all shadow-2xs active:scale-95 border border-zinc-200/80 cursor-pointer"
                title="Customer Menu & Profile"
              >
                <div className="h-5 w-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 shadow-2xs">
                  {(customerName || 'C').charAt(0).toUpperCase()}
                </div>
                <span className="max-w-[85px] sm:max-w-[120px] truncate font-semibold text-[11px]">
                  {customerName ? customerName.split(' ')[0] : 'Profile'}
                </span>
                <Menu className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowOnboardingModal(true)}
                className="px-3 py-1.5 rounded-full bg-zinc-900 text-white text-[11px] font-semibold hover:bg-zinc-800 transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
              >
                <User className="h-3.5 w-3.5 text-zinc-300" />
                <span>Fill Details</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-lg mx-auto w-full p-3 sm:p-4 space-y-4 pb-36">
        
        {/* Universal Cross-Shop Customer Profile Banner */}
        {customerSession ? (
          <div className="bg-white rounded-2xl border border-emerald-200/90 p-3.5 space-y-2.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-2xs">
                  {customerName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-zinc-900">{customerName}</span>
                    <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[9px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
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
                  onClick={() => {
                    setCustomerMenuTab('history');
                    setShowCustomerMenu(true);
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-[11px] flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                  title="View your orders across all print shops"
                >
                  <Layers className="h-3.5 w-3.5 text-zinc-600" />
                  <span>My History ({crossShopOrders.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCustomerMenuTab('profile');
                    setShowCustomerMenu(true);
                  }}
                  className="p-1.5 text-zinc-400 hover:text-zinc-800 rounded-lg hover:bg-zinc-100 transition-colors cursor-pointer"
                  title="Edit Customer Profile"
                >
                  <Edit2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <p className="text-[10px] text-zinc-400 font-mono pt-1.5 border-t border-zinc-100 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Recognized across all partner shops • No re-login needed
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-zinc-200/90 p-4 space-y-3 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-zinc-600" />
                <span>Customer Quick Setup (1-Time Only)</span>
              </span>
              <button
                type="button"
                onClick={() => setShowOnboardingModal(true)}
                className="text-[11px] text-emerald-700 hover:underline font-semibold cursor-pointer"
              >
                Open Setup
              </button>
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              Enter your Name & Mobile Number once. Your prints are instantly identified at the counter, and you can view your order history across any Xerox shop!
            </p>
            <button
              type="button"
              onClick={() => setShowOnboardingModal(true)}
              className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <span>Fill Name & Contact (1-Time Setup)</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
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
                      {React.createElement(getDocumentIcon(item.file.name), { className: "h-4 w-4 text-zinc-500 shrink-0" })}
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
                            className={`py-1 rounded-md transition-all font-medium inline-flex items-center justify-center gap-1 ${
                              spec.color === 'BW' ? 'bg-white text-zinc-900 shadow-2xs font-semibold' : 'text-zinc-500'
                            }`}
                          >
                            <BlackWhiteIcon className="h-3 w-3 shrink-0" />
                            <span>B&amp;W</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => updateFileSpec(idx, { color: 'COLOR' })}
                            className={`py-1 rounded-md transition-all font-medium inline-flex items-center justify-center gap-1 ${
                              spec.color === 'COLOR' ? 'bg-white text-emerald-800 shadow-2xs font-semibold' : 'text-zinc-500'
                            }`}
                          >
                            <ColorPrintingIcon className="h-3 w-3 shrink-0" />
                            <span>Color</span>
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
                            className={`py-1 rounded-md transition-all font-medium inline-flex items-center justify-center gap-1 ${
                              spec.duplex === 'SIMPLEX' ? 'bg-white text-zinc-900 shadow-2xs font-semibold' : 'text-zinc-500'
                            }`}
                          >
                            <OneSidedIcon className="h-3 w-3 shrink-0" />
                            <span>1-Side</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => updateFileSpec(idx, { duplex: 'DUPLEX' })}
                            className={`py-1 rounded-md transition-all font-medium inline-flex items-center justify-center gap-1 ${
                              spec.duplex === 'DUPLEX' ? 'bg-white text-zinc-900 shadow-2xs font-semibold' : 'text-zinc-500'
                            }`}
                          >
                            <TwoSidedIcon className="h-3 w-3 shrink-0" />
                            <span>2-Sided</span>
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

      {/* Floating Sticky Native App Checkout Dock (When files exist) */}
      {filesWithSpecs.length > 0 && !completedOrder && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-zinc-200/80 p-3 sm:p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] animate-in slide-in-from-bottom duration-200">
          <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-baseline gap-1.5">
                <span className="text-base sm:text-lg font-bold text-zinc-900 font-mono">
                  ₹{breakdown.grandTotal.toFixed(2)}
                </span>
                {breakdown.appliedPercent > 0 && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    {breakdown.appliedPercent}% OFF
                  </span>
                )}
              </div>
              <p className="text-[11px] text-zinc-500 font-medium truncate">
                {breakdown.totalPagesCount} {breakdown.totalPagesCount === 1 ? 'page' : 'pages'} • {filesWithSpecs.length} {filesWithSpecs.length === 1 ? 'file' : 'files'}
              </p>
            </div>

            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmitOrder}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center gap-1.5 disabled:opacity-50 shrink-0"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Send to Counter</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}

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

      {/* 1. FIRST-TIME ONE-TIME ONBOARDING MODAL FOR WALK-IN CUSTOMERS */}
      {showOnboardingModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl border-t sm:border border-zinc-200/90 shadow-2xl p-6 sm:p-7 space-y-5 animate-in slide-in-from-bottom sm:slide-in-from-bottom-2 duration-200">
            {/* Native Mobile Grab Handle */}
            <div className="w-12 h-1.5 bg-zinc-300 rounded-full mx-auto -mt-2 mb-2 sm:hidden" />

            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
                <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                <span>1-Time Setup • Universal Xerox Identity</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight">
                Welcome to {shop.name}
              </h2>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-sm mx-auto">
                Enter your Name & Mobile Number once. Next time you scan any Xerox counter QR, you will be recognized instantly without filling this again!
              </p>
            </div>

            {onboardingError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
                <span>{onboardingError}</span>
              </div>
            )}

            <form onSubmit={handleCompleteOnboarding} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-700 block">
                  Your Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={onboardingName}
                    onChange={(e) => setOnboardingName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 shadow-2xs"
                  />
                  <User className="h-4 w-4 text-zinc-400 absolute right-3.5 top-3 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-700 block">
                  Mobile Number (10 digits)
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={onboardingPhone}
                    onChange={(e) => setOnboardingPhone(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="9876543210"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-mono shadow-2xs"
                  />
                  <Phone className="h-4 w-4 text-zinc-400 absolute right-3.5 top-3 pointer-events-none" />
                </div>
                <p className="text-[10px] text-zinc-400">
                  Used only to identify your print queue at the counter. No spam ever.
                </p>
              </div>

              {/* Highlights */}
              <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-1.5 text-[11px] text-zinc-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Zero Download:</strong> Files print straight to the shop printer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span><strong>Track History:</strong> View past receipts & reprints anytime</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isOnboardingSaving}
                className="w-full py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isOnboardingSaving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Saving Profile...</span>
                  </>
                ) : (
                  <>
                    <span>Continue to Upload & Print</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. CUSTOMER MENU & PROFILE BOTTOM SHEET (HISTORY, RATES, SETTINGS) */}
      {showCustomerMenu && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="fixed inset-0 bg-zinc-950/40 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setShowCustomerMenu(false)}
          />

          <div className="fixed inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 sm:left-auto max-h-[90vh] sm:max-h-full w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-none border-t sm:border-t-0 sm:border-l border-zinc-200 shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom sm:slide-in-from-right duration-200">
            {/* Native Mobile Grab Handle */}
            <div className="w-12 h-1.5 bg-zinc-300 rounded-full mx-auto mt-2.5 mb-1 sm:hidden" />
            
            {/* Profile Header */}
            <div className="p-4 border-b border-zinc-200 bg-zinc-50/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-2xs">
                  {(customerName || 'C').charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 leading-tight">
                    {customerName || 'Customer Profile'}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono">
                    +91 {customerPhone ? customerPhone.replace(/[^0-9]/g, '').slice(-10) : '0000000000'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowCustomerMenu(false)}
                className="h-8 w-8 text-zinc-400 hover:text-zinc-900 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Menu Tabs */}
            <div className="flex border-b border-zinc-200 bg-zinc-100/60 p-1 gap-1">
              <button
                type="button"
                onClick={() => setCustomerMenuTab('history')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  customerMenuTab === 'history'
                    ? 'bg-white text-zinc-900 shadow-2xs'
                    : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                <Clock className="h-3.5 w-3.5" />
                <span>History ({crossShopOrders.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setCustomerMenuTab('rates')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  customerMenuTab === 'rates'
                    ? 'bg-white text-zinc-900 shadow-2xs'
                    : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                <Tag className="h-3.5 w-3.5" />
                <span>Shop Rates</span>
              </button>

              <button
                type="button"
                onClick={() => setCustomerMenuTab('profile')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  customerMenuTab === 'profile'
                    ? 'bg-white text-zinc-900 shadow-2xs'
                    : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                <User className="h-3.5 w-3.5" />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Tab 1: Order History */}
            {customerMenuTab === 'history' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {crossShopOrders.length === 0 ? (
                  <div className="py-16 text-center text-zinc-400 text-xs space-y-2">
                    <Clock className="h-8 w-8 mx-auto text-zinc-300" />
                    <p className="font-semibold text-zinc-700">No print orders found yet</p>
                    <p className="text-[11px] text-zinc-400">
                      When you send documents to {shop.name} or any partner counter, your orders will appear here automatically.
                    </p>
                  </div>
                ) : (
                  crossShopOrders.map((o) => (
                    <div key={o.id} className="p-3.5 rounded-2xl border border-zinc-200 bg-white space-y-2 hover:border-zinc-300 transition-colors shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xs text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded-md">
                          {o.orderNumber}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {new Date(o.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="text-xs text-zinc-600">
                        <p className="font-semibold text-zinc-900">{o.shop?.name || shop.name}</p>
                        <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                          {o.totalDocuments || 1} file(s) • {o.totalPages || 1} pages • ₹{(o.finalAmount ?? o.estimatedAmount ?? 0).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-1.5 border-t border-zinc-100">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold ${
                          o.status === 'READY'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : o.status === 'COMPLETED'
                            ? 'bg-zinc-100 text-zinc-700'
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                          {o.status === 'READY' ? 'Ready for Pickup' : o.status === 'COMPLETED' ? 'Completed' : 'Printing / In Queue'}
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
            )}

            {/* Tab 2: Shop Rate Card */}
            {customerMenuTab === 'rates' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-1">
                  <h4 className="text-xs font-bold text-zinc-900">{shop.name} Xerox Rate Card</h4>
                  <p className="text-[11px] text-zinc-500">Live prices configured directly by the counter manager</p>
                </div>

                <div className="space-y-2">
                  <h5 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider font-mono">Standard Printing (A4)</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-xl border border-zinc-200 bg-white">
                      <span className="text-zinc-500 block text-[11px]">B&W Single Sided</span>
                      <strong className="text-base text-zinc-900 font-mono">₹{a4Rule.bwSinglePrice.toFixed(2)}</strong>
                    </div>
                    <div className="p-3 rounded-xl border border-zinc-200 bg-white">
                      <span className="text-zinc-500 block text-[11px]">B&W Double Sided</span>
                      <strong className="text-base text-zinc-900 font-mono">₹{a4Rule.bwDoublePrice.toFixed(2)}</strong>
                    </div>
                    <div className="p-3 rounded-xl border border-zinc-200 bg-white">
                      <span className="text-zinc-500 block text-[11px]">Color Single</span>
                      <strong className="text-base text-emerald-600 font-mono">₹{a4Rule.colorSinglePrice.toFixed(2)}</strong>
                    </div>
                    <div className="p-3 rounded-xl border border-zinc-200 bg-white">
                      <span className="text-zinc-500 block text-[11px]">Color Double</span>
                      <strong className="text-base text-emerald-600 font-mono">₹{a4Rule.colorDoublePrice.toFixed(2)}</strong>
                    </div>
                  </div>
                </div>

                {shop.finishing && (
                  <div className="space-y-2">
                    <h5 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider font-mono">Binding & Finishing</h5>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-100 bg-zinc-50/50">
                        <span className="text-zinc-700">Spiral Binding</span>
                        <span className="font-bold text-zinc-900 font-mono">₹{shop.finishing.bindingSpiral}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-100 bg-zinc-50/50">
                        <span className="text-zinc-700">Hardcover Project Binding</span>
                        <span className="font-bold text-zinc-900 font-mono">₹{shop.finishing.bindingHardcover}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-100 bg-zinc-50/50">
                        <span className="text-zinc-700">Lamination (Glossy/Matte)</span>
                        <span className="font-bold text-zinc-900 font-mono">₹{shop.finishing.laminationGlossy}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800">
                  ⚡ Transparent counter pricing. Instant total calculation before submitting your order!
                </div>
              </div>
            )}

            {/* Tab 3: Edit Profile & Switch Account */}
            {customerMenuTab === 'profile' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 block">Your Full Name</label>
                    <input
                      type="text"
                      value={loginInputName}
                      onChange={(e) => setLoginInputName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-700 block">Mobile Contact (10 digits)</label>
                    <input
                      type="tel"
                      value={loginInputPhone}
                      onChange={(e) => setLoginInputPhone(e.target.value.replace(/[^0-9]/g, ''))}
                      placeholder="e.g. 9876543210"
                      className="w-full rounded-xl border border-zinc-200 px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 font-mono"
                    />
                  </div>

                  <button
                    type="button"
                    disabled={isLoggingIn || !loginInputName.trim() || loginInputPhone.trim().length < 10}
                    onClick={() => handleSaveCustomerProfile(loginInputName, loginInputPhone)}
                    className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs transition-colors disabled:opacity-50 cursor-pointer shadow-xs"
                  >
                    {isLoggingIn ? 'Saving Changes...' : 'Save Profile Changes'}
                  </button>
                </div>

                <div className="pt-3 border-t border-zinc-200 space-y-2">
                  <h5 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider font-mono">Counter Actions</h5>
                  <Link
                    href="/scan"
                    className="w-full py-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <QrCode className="h-4 w-4 text-emerald-600" />
                    <span>Scan Another Xerox Counter</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem('sph_customer_profile');
                      localStorage.removeItem('sph_customer_onboarded');
                      setCustomerSession(null);
                      setCustomerName('');
                      setCustomerPhone('');
                      setCrossShopOrders([]);
                      setShowCustomerMenu(false);
                      setShowOnboardingModal(true);
                    }}
                    className="w-full py-2.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Switch Customer Account</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 3. SWITCH ACCOUNT / LOGIN MODAL */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-zinc-950/40 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-2xl border-t sm:border border-zinc-200 shadow-2xl p-5 space-y-4 animate-in slide-in-from-bottom sm:slide-in-from-bottom-2 duration-200">
            <div className="w-10 h-1 bg-zinc-300 rounded-full mx-auto -mt-1 mb-1 sm:hidden" />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-zinc-900">Universal Customer Login</h3>
                <p className="text-xs text-zinc-400">Use the same profile across all print shops</p>
              </div>
              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="h-7 w-7 text-zinc-400 hover:text-zinc-900 rounded-lg flex items-center justify-center cursor-pointer"
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
                  onChange={(e) => setLoginInputPhone(e.target.value.replace(/[^0-9]/g, ''))}
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
                className="flex-1 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isLoggingIn ? 'Connecting...' : 'Sign In & Sync'}
              </button>
              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="px-3 py-2 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-medium text-xs transition-colors cursor-pointer"
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
