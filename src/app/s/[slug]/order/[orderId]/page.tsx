'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import QRCode from 'qrcode';
import { 
  Printer, 
  Check, 
  Clock, 
  ArrowLeft, 
  RefreshCw, 
  FileText, 
  Phone, 
  MapPin, 
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Smartphone,
  CreditCard,
  QrCode,
  Banknote,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  X,
  Lock,
  Layers
} from 'lucide-react';

interface OrderData {
  id: string;
  orderNumber: string;
  status: string;
  paymentStatus?: 'PENDING' | 'PAID' | 'CASH_AT_COUNTER';
  paymentMethod?: 'UPI' | 'CASH' | 'DIGITAL_PAY' | null;
  paymentReference?: string | null;
  paidAt?: string | null;
  totalDocuments: number;
  totalPages: number;
  estimatedAmount: number;
  finalAmount: number | null;
  customerNotes?: string | null;
  createdAt: string;
  shop: {
    name: string;
    phone: string;
    address: string;
    upiId?: string;
  };
  customer: {
    fullName: string;
    phone: string;
  };
  documents: Array<{
    id: string;
    originalFilename: string;
    detectedPageCount: number;
    specs?: {
      copies: number;
      color: string;
      duplex: string;
      paperSize: string;
      stapling?: string;
    };
  }>;
}

const STEPS = [
  { key: 'SUBMITTED', label: 'Order Sent', desc: 'Received at shop counter' },
  { key: 'REVIEWING', label: 'Reviewing', desc: 'Staff verifying specs' },
  { key: 'PRINTING', label: 'Printing', desc: 'Streaming to Windows spooler' },
  { key: 'READY', label: 'Ready for Pickup', desc: 'Collect at the counter' },
  { key: 'COMPLETED', label: 'Completed', desc: 'Order finished' },
];

export default function CustomerOrderTrackingPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const orderId = params?.orderId as string;

  const [order, setOrder] = useState<OrderData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Payment states
  const [activePaymentTab, setActivePaymentTab] = useState<'UPI' | 'DIGITAL' | 'CASH'>('UPI');
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
  const [showQrCodeModal, setShowQrCodeModal] = useState(false);
  const [showRazorpayModal, setShowRazorpayModal] = useState(false);
  const [showUpiConfirmModal, setShowUpiConfirmModal] = useState(false);
  const [upiUtrInput, setUpiUtrInput] = useState('');
  const [isSubmittingPayment, setIsSubmittingPayment] = useState(false);

  // Razorpay modal states
  const [razorpayMethod, setRazorpayMethod] = useState<'UPI' | 'CARD' | 'NETBANKING'>('UPI');
  const [vpaInput, setVpaInput] = useState('');
  const [cardNumber, setCardNumber] = useState('4532 8921 7482 1094');
  const [cardExpiry, setCardExpiry] = useState('08/29');
  const [cardCvv, setCardCvv] = useState('782');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [razorpayStep, setRazorpayStep] = useState<'FORM' | 'PROCESSING' | 'SUCCESS'>('FORM');

  const fetchOrder = async (isManual = false) => {
    if (isManual) setIsRefreshing(true);
    try {
      const res = await fetch(`/api/v1/customer/order/${orderId}`);
      const json = await res.json();
      if (json.success) {
        setOrder(json.data.order);
      } else {
        setError(json.error?.message || 'Could not find order');
      }
    } catch {
      setError('Network error checking order status');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchOrder();
    // Auto-poll status every 8 seconds
    const interval = setInterval(() => {
      fetchOrder();
    }, 8000);
    return () => clearInterval(interval);
  }, [orderId]);

  // Compute final payable amount (owner override takes precedence)
  const payableAmount = useMemo(() => {
    if (!order) return 0;
    return order.finalAmount !== null && order.finalAmount !== undefined
      ? order.finalAmount
      : order.estimatedAmount;
  }, [order]);

  // Build standard UPI Deep Link URL with auto-filled amount and shop details
  const upiDeepLink = useMemo(() => {
    if (!order) return '';
    const vpa = order.shop.upiId || 'metroprint@upi';
    const payeeName = encodeURIComponent(order.shop.name);
    const amount = payableAmount.toFixed(2);
    const note = encodeURIComponent(`Order ${order.orderNumber}`);
    return `upi://pay?pa=${vpa}&pn=${payeeName}&am=${amount}&cu=INR&tn=${note}`;
  }, [order, payableAmount]);

  // Generate QR code for desktop scanning
  useEffect(() => {
    if (upiDeepLink) {
      QRCode.toDataURL(upiDeepLink, {
        width: 240,
        margin: 1,
        color: {
          dark: '#09090b',
          light: '#ffffff',
        },
      })
        .then((url) => setQrCodeDataUrl(url))
        .catch((err) => console.error('Failed to generate UPI QR:', err));
    }
  }, [upiDeepLink]);

  // Handle recorded payment submission (UPI, Digital, Cash)
  const handleRecordPayment = async (
    method: 'UPI' | 'DIGITAL_PAY' | 'CASH',
    reference?: string
  ) => {
    if (!order) return;
    setIsSubmittingPayment(true);
    try {
      const res = await fetch(`/api/v1/customer/order/${order.id}/pay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentMethod: method,
          paymentReference: reference || (method === 'CASH' ? 'CASH-AT-COUNTER' : `PAY-${Date.now()}`),
          paidAmount: payableAmount,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setOrder(json.data.order);
        setShowRazorpayModal(false);
        setShowUpiConfirmModal(false);
      } else {
        alert(json.error?.message || 'Payment processing failed');
      }
    } catch (err) {
      alert('Network error recording payment');
    } finally {
      setIsSubmittingPayment(false);
    }
  };

  // Simulate Razorpay Gateway authorization
  const handleSimulateRazorpayPay = async () => {
    setRazorpayStep('PROCESSING');
    await new Promise((r) => setTimeout(r, 1200));
    setRazorpayStep('SUCCESS');
    await new Promise((r) => setTimeout(r, 800));
    const randomPayId = `pay_${Math.random().toString(36).slice(2, 11).toUpperCase()}`;
    await handleRecordPayment('DIGITAL_PAY', randomPayId);
    setRazorpayStep('FORM');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
        <div className="flex items-center gap-2.5 text-xs text-zinc-500 font-medium">
          <div className="animate-spin h-4 w-4 border-2 border-zinc-900 border-t-transparent rounded-full" />
          <span>Locating print job...</span>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white rounded-2xl border border-zinc-200 p-6 text-center space-y-4">
          <AlertCircle className="h-8 w-8 text-rose-500 mx-auto" />
          <div>
            <h1 className="text-sm font-semibold text-zinc-900">Order Not Found</h1>
            <p className="text-xs text-zinc-400 mt-1">{error || 'This order does not exist or has expired.'}</p>
          </div>
          <Link
            href={`/s/${slug}`}
            className="block w-full py-2 rounded-xl text-xs font-medium bg-zinc-900 text-white"
          >
            Back to Upload
          </Link>
        </div>
      </div>
    );
  }

  // Status computation
  const statusRank: Record<string, number> = {
    SUBMITTED: 0,
    REVIEWING: 1,
    QUEUED: 1,
    PRINTING: 2,
    READY: 3,
    COMPLETED: 4,
  };
  const currentStepIdx = statusRank[order.status] ?? 0;
  const isReady = order.status === 'READY';
  const isCompleted = order.status === 'COMPLETED';
  const isPriceAdjusted = order.finalAmount !== null && order.finalAmount !== undefined && order.finalAmount !== order.estimatedAmount;
  const isPaid = order.paymentStatus === 'PAID';
  const isCashMarked = order.paymentStatus === 'CASH_AT_COUNTER';

  return (
    <div className="min-h-screen bg-zinc-50/70 flex flex-col">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Link 
            href={`/s/${slug}`} 
            className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 font-medium transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Upload More</span>
          </Link>

          <button
            onClick={() => fetchOrder(true)}
            disabled={isRefreshing}
            className="flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-900 font-mono transition-colors"
          >
            <RefreshCw className={`h-3 w-3 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Sync</span>
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-md mx-auto w-full p-4 space-y-4">
        
        {/* Ready Banner Alert */}
        {isReady && (
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50/90 p-4 text-center space-y-1 animate-in zoom-in-95 duration-200">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-950">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-ping" />
              Your Prints are Ready for Pickup!
            </div>
            <p className="text-[11px] text-emerald-800">
              Please visit the counter and show reference <strong>{order.orderNumber}</strong>.
            </p>
          </div>
        )}

        {/* Order Reference Ticket */}
        <div className="bg-white rounded-2xl border border-zinc-200/90 p-5 space-y-4 shadow-sm">
          
          <div className="flex items-start justify-between border-b border-zinc-100 pb-3">
            <div>
              <span className="text-[10px] uppercase font-mono text-zinc-400 block tracking-wider">
                Order Ticket
              </span>
              <span className="text-base font-bold text-zinc-900 font-mono">
                {order.orderNumber}
              </span>
            </div>

            <div className="flex flex-col items-end gap-1">
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${
                isReady
                  ? 'bg-teal-50 text-teal-800 border-teal-200'
                  : order.status === 'PRINTING'
                  ? 'bg-blue-50 text-blue-800 border-blue-200 animate-pulse'
                  : 'bg-zinc-100 text-zinc-700 border-zinc-200'
              }`}>
                {order.status === 'PRINTING' ? 'Printing to Spooler' : order.status}
              </span>

              {isPaid ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 font-mono">
                  <CheckCircle2 className="h-3 w-3" />
                  Paid Online
                </span>
              ) : isCashMarked ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-700 font-mono">
                  Cash at Counter
                </span>
              ) : null}
            </div>
          </div>

          {/* Minimal Live Status Stepper */}
          <div className="space-y-3 py-1">
            <span className="text-[10px] uppercase font-mono text-zinc-400 block">
              Live Progress
            </span>

            <div className="space-y-2">
              {STEPS.slice(0, 4).map((step, idx) => {
                const isPassed = currentStepIdx >= idx;
                const isCurrent = currentStepIdx === idx;

                return (
                  <div key={step.key} className="flex items-center gap-3 text-xs">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-all ${
                      isPassed
                        ? 'bg-zinc-900 text-white'
                        : 'bg-zinc-100 text-zinc-400'
                    }`}>
                      {isPassed ? <Check className="h-3 w-3" /> : idx + 1}
                    </div>

                    <div className="min-w-0 flex-1 flex items-center justify-between">
                      <span className={`font-medium ${isCurrent ? 'text-zinc-900 font-semibold' : isPassed ? 'text-zinc-700' : 'text-zinc-400'}`}>
                        {step.label}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {step.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Document & Specs Summary */}
          <div className="rounded-xl bg-zinc-50 border border-zinc-100 p-3 space-y-2 text-xs">
            <div className="flex items-center justify-between text-zinc-500 font-medium pb-1 border-b border-zinc-200/50">
              <span>{order.totalDocuments} document(s)</span>
              <span className="font-mono">{order.totalPages} pages total</span>
            </div>

            {order.documents.map((doc, i) => (
              <div key={doc.id || i} className="flex items-center justify-between gap-2 text-[11px]">
                <div className="flex items-center gap-1.5 truncate">
                  <FileText className="h-3 w-3 text-zinc-400 shrink-0" />
                  <span className="text-zinc-800 font-medium truncate max-w-[170px]">
                    {doc.originalFilename}
                  </span>
                </div>
                <div className="flex items-center gap-1 font-mono text-zinc-500 shrink-0 text-[10px]">
                  <span>{doc.detectedPageCount}p</span>
                  <span>•</span>
                  <span>{doc.specs?.copies || 1}x</span>
                  <span>•</span>
                  <span>{doc.specs?.paperSize || 'A4'}</span>
                  <span>•</span>
                  <span>{doc.specs?.color === 'COLOR' ? 'Color' : 'B&W'}</span>
                </div>
              </div>
            ))}

            {order.customerNotes && (
              <p className="text-[10px] text-zinc-500 pt-1 border-t border-zinc-200/50">
                <span className="text-zinc-400">Note: </span>
                {order.customerNotes}
              </p>
            )}
          </div>

          {/* Owner Price Adjustment & Payable Amount Breakdown */}
          <div className="rounded-xl border border-zinc-200/80 p-3.5 bg-zinc-50/50 space-y-1.5 text-xs">
            {isPriceAdjusted && (
              <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                <span>System Estimated Price:</span>
                <span className="line-through font-mono">₹{order.estimatedAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div>
                <span className="text-zinc-500 block">Total Payable Amount</span>
                {isPriceAdjusted && (
                  <span className="text-[10px] text-emerald-700 font-medium">
                    (Final price adjusted by shop counter)
                  </span>
                )}
              </div>
              <span className="text-xl font-bold text-zinc-900">
                ₹{payableAmount.toFixed(2)}
              </span>
            </div>
          </div>

          {/* --- PAYMENT EXPERIENCE SECTION --- */}
          {isPaid ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-center space-y-2">
              <div className="h-9 w-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="text-xs font-bold text-emerald-950">Payment Confirmed</h3>
              <p className="text-[11px] text-emerald-800">
                Paid ₹{payableAmount.toFixed(2)} via {order.paymentMethod || 'UPI'}.
              </p>
              {order.paymentReference && (
                <div className="inline-block px-2.5 py-1 rounded bg-white border border-emerald-200 font-mono text-[10px] text-emerald-900">
                  Ref: {order.paymentReference}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3 pt-2 border-t border-zinc-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-900">
                  Pay Now
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  Select payment method
                </span>
              </div>

              {/* Segmented Payment Tabs */}
              <div className="grid grid-cols-3 p-0.5 rounded-xl bg-zinc-100 border border-zinc-200/60 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActivePaymentTab('UPI')}
                  className={`py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all ${
                    activePaymentTab === 'UPI' ? 'bg-white text-zinc-900 shadow-2xs font-semibold' : 'text-zinc-500'
                  }`}
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>UPI App</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePaymentTab('DIGITAL')}
                  className={`py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all ${
                    activePaymentTab === 'DIGITAL' ? 'bg-white text-zinc-900 shadow-2xs font-semibold' : 'text-zinc-500'
                  }`}
                >
                  <CreditCard className="h-3.5 w-3.5" />
                  <span>Razorpay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePaymentTab('CASH')}
                  className={`py-1.5 rounded-lg flex items-center justify-center gap-1 transition-all ${
                    activePaymentTab === 'CASH' ? 'bg-white text-zinc-900 shadow-2xs font-semibold' : 'text-zinc-500'
                  }`}
                >
                  <Banknote className="h-3.5 w-3.5" />
                  <span>Cash</span>
                </button>
              </div>

              {/* Tab 1: UPI Payments (Native Mobile App Chooser & Permissions) */}
              {activePaymentTab === 'UPI' && (
                <div className="rounded-xl border border-zinc-200 bg-white p-3.5 space-y-3 text-xs">
                  <div className="space-y-1">
                    <p className="font-semibold text-zinc-900">
                      Auto-set UPI Payment (₹{payableAmount.toFixed(2)})
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Tapping below will trigger your phone&apos;s native app chooser to open your installed UPI app with the exact amount pre-filled.
                    </p>
                  </div>

                  {/* Primary Native Intent Button */}
                  <a
                    href={upiDeepLink}
                    onClick={() => {
                      // Also open confirmation modal in case user returns after completing payment
                      setTimeout(() => setShowUpiConfirmModal(true), 2500);
                    }}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-2xs"
                  >
                    <Smartphone className="h-4 w-4" />
                    <span>Pay ₹{payableAmount.toFixed(2)} via any UPI App</span>
                  </a>

                  {/* Specific App Direct Launchers */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <a
                      href={`tez://upi/pay?pa=${order.shop.upiId || 'metroprint@upi'}&pn=${encodeURIComponent(order.shop.name)}&am=${payableAmount.toFixed(2)}&cu=INR&tn=${encodeURIComponent(order.orderNumber)}`}
                      className="py-2 px-2 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 flex flex-col items-center justify-center text-center transition-colors group"
                    >
                      <span className="text-[10px] font-bold text-zinc-800">Google Pay</span>
                      <span className="text-[9px] text-zinc-400">Direct App</span>
                    </a>

                    <a
                      href={`phonepe://pay?pa=${order.shop.upiId || 'metroprint@upi'}&pn=${encodeURIComponent(order.shop.name)}&am=${payableAmount.toFixed(2)}&cu=INR&tn=${encodeURIComponent(order.orderNumber)}`}
                      className="py-2 px-2 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 flex flex-col items-center justify-center text-center transition-colors group"
                    >
                      <span className="text-[10px] font-bold text-zinc-800">PhonePe</span>
                      <span className="text-[9px] text-zinc-400">Direct App</span>
                    </a>

                    <a
                      href={`paytmmp://pay?pa=${order.shop.upiId || 'metroprint@upi'}&pn=${encodeURIComponent(order.shop.name)}&am=${payableAmount.toFixed(2)}&cu=INR&tn=${encodeURIComponent(order.orderNumber)}`}
                      className="py-2 px-2 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 flex flex-col items-center justify-center text-center transition-colors group"
                    >
                      <span className="text-[10px] font-bold text-zinc-800">Paytm</span>
                      <span className="text-[9px] text-zinc-400">Direct App</span>
                    </a>
                  </div>

                  {/* Desktop QR Scan Option */}
                  <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setShowQrCodeModal(true)}
                      className="inline-flex items-center gap-1.5 text-[11px] text-zinc-600 hover:text-zinc-900 font-medium"
                    >
                      <QrCode className="h-3.5 w-3.5 text-zinc-500" />
                      <span>Show QR Code for Desktop Scan</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowUpiConfirmModal(true)}
                      className="text-[11px] text-emerald-700 hover:underline font-medium"
                    >
                      I have already paid
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 2: Razorpay Digital Pay Checkout */}
              {activePaymentTab === 'DIGITAL' && (
                <div className="rounded-xl border border-zinc-200 bg-white p-3.5 space-y-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-zinc-900">Razorpay Secure Checkout</span>
                      <span className="px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-700 text-[9px] font-semibold">
                        Instant
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500">
                      Pay via Cards, Netbanking, or enter any UPI ID through the standard Razorpay gateway.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowRazorpayModal(true)}
                    className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-2xs"
                  >
                    <Lock className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Open Razorpay Checkout (₹{payableAmount.toFixed(2)})</span>
                  </button>
                </div>
              )}

              {/* Tab 3: Cash at Counter */}
              {activePaymentTab === 'CASH' && (
                <div className="rounded-xl border border-zinc-200 bg-white p-3.5 space-y-3 text-xs">
                  <div className="space-y-1">
                    <p className="font-semibold text-zinc-900">
                      Pay in Cash at Pickup
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Inform the counter staff you will hand over physical cash (₹{payableAmount.toFixed(2)}) when collecting your documents.
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={isSubmittingPayment}
                    onClick={() => handleRecordPayment('CASH')}
                    className="w-full py-2.5 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Banknote className="h-4 w-4 text-zinc-600" />
                    <span>Confirm Cash Payment at Counter</span>
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Shop Counter Location & Contact Info */}
        <div className="bg-white rounded-2xl border border-zinc-200/80 p-4 space-y-2 text-xs">
          <span className="text-[10px] uppercase font-mono text-zinc-400 block">
            Counter Location
          </span>
          <p className="font-semibold text-zinc-900">{order.shop.name}</p>
          <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
            <MapPin className="h-3 w-3 text-zinc-400 shrink-0" />
            <span className="truncate">{order.shop.address}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
            <Phone className="h-3 w-3 text-zinc-400 shrink-0" />
            <span>{order.shop.phone}</span>
          </div>
        </div>

      </main>

      {/* --- MODAL 1: DYNAMIC UPI QR CODE POPUP --- */}
      {showQrCodeModal && qrCodeDataUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-xs bg-white rounded-2xl border border-zinc-200 shadow-2xl p-5 space-y-4 text-center">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
              <span className="text-xs font-semibold text-zinc-900">Scan to Pay via UPI</span>
              <button
                type="button"
                onClick={() => setShowQrCodeModal(false)}
                className="text-zinc-400 hover:text-zinc-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="p-3 bg-white rounded-xl border border-zinc-200 inline-block shadow-inner mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrCodeDataUrl}
                alt="UPI QR Code"
                className="w-48 h-48 mx-auto"
              />
            </div>

            <div className="space-y-1">
              <p className="text-base font-bold text-zinc-900">
                ₹{payableAmount.toFixed(2)}
              </p>
              <p className="text-[11px] text-zinc-400">
                Scan with Google Pay, PhonePe, Paytm, or BHIM
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowQrCodeModal(false);
                setShowUpiConfirmModal(true);
              }}
              className="w-full py-2 rounded-xl bg-zinc-900 text-white text-xs font-semibold"
            >
              Done / Enter UTR Reference
            </button>
          </div>
        </div>
      )}

      {/* --- MODAL 2: RAZORPAY STANDARD CHECKOUT POPUP --- */}
      {showRazorpayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-white rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Razorpay Brand Header */}
            <div className="bg-[#0c2340] text-white p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Razorpay Trusted Business</span>
                </div>
                <h3 className="text-sm font-bold text-white mt-0.5">{order.shop.name}</h3>
                <p className="text-[10px] text-zinc-300 font-mono">Order {order.orderNumber}</p>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-zinc-300 uppercase block font-mono">Amount Due</span>
                <span className="text-lg font-extrabold text-white">₹{payableAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Razorpay Method Tabs & Body */}
            <div className="p-4 space-y-4">
              
              {razorpayStep === 'PROCESSING' ? (
                <div className="py-12 text-center space-y-3">
                  <div className="animate-spin h-8 w-8 border-3 border-[#0c2340] border-t-transparent rounded-full mx-auto" />
                  <p className="text-xs font-semibold text-zinc-800">
                    Connecting to Payment Gateway...
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Authorizing payment of ₹{payableAmount.toFixed(2)}. Please do not refresh.
                  </p>
                </div>
              ) : razorpayStep === 'SUCCESS' ? (
                <div className="py-10 text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900">Payment Authorized!</h4>
                  <p className="text-xs text-zinc-500">
                    Updating your order status with the shop counter...
                  </p>
                </div>
              ) : (
                <>
                  {/* Select Method */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-zinc-100 text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setRazorpayMethod('UPI')}
                      className={`py-1.5 rounded-lg transition-all ${
                        razorpayMethod === 'UPI' ? 'bg-white text-zinc-900 shadow-2xs font-semibold' : 'text-zinc-500'
                      }`}
                    >
                      UPI ID
                    </button>
                    <button
                      type="button"
                      onClick={() => setRazorpayMethod('CARD')}
                      className={`py-1.5 rounded-lg transition-all ${
                        razorpayMethod === 'CARD' ? 'bg-white text-zinc-900 shadow-2xs font-semibold' : 'text-zinc-500'
                      }`}
                    >
                      Cards
                    </button>
                    <button
                      type="button"
                      onClick={() => setRazorpayMethod('NETBANKING')}
                      className={`py-1.5 rounded-lg transition-all ${
                        razorpayMethod === 'NETBANKING' ? 'bg-white text-zinc-900 shadow-2xs font-semibold' : 'text-zinc-500'
                      }`}
                    >
                      Netbanking
                    </button>
                  </div>

                  {/* Form according to method */}
                  {razorpayMethod === 'UPI' && (
                    <div className="space-y-2 text-xs">
                      <label className="text-[10px] text-zinc-400 font-medium uppercase font-mono">
                        Enter UPI VPA ID
                      </label>
                      <input
                        type="text"
                        value={vpaInput}
                        onChange={(e) => setVpaInput(e.target.value)}
                        placeholder="yourname@okaxis / phone@paytm"
                        className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-xs font-mono text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                      />
                      <p className="text-[10px] text-zinc-400">
                        A payment collect request will be sent to your UPI app.
                      </p>
                    </div>
                  )}

                  {razorpayMethod === 'CARD' && (
                    <div className="space-y-2.5 text-xs">
                      <div>
                        <label className="text-[10px] text-zinc-400 font-medium uppercase font-mono mb-1 block">
                          Card Number
                        </label>
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-xs font-mono text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] text-zinc-400 font-medium uppercase font-mono mb-1 block">
                            Expiry (MM/YY)
                          </label>
                          <input
                            type="text"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-xs font-mono text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-zinc-400 font-medium uppercase font-mono mb-1 block">
                            CVV
                          </label>
                          <input
                            type="password"
                            maxLength={4}
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-xs font-mono text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {razorpayMethod === 'NETBANKING' && (
                    <div className="space-y-2 text-xs">
                      <label className="text-[10px] text-zinc-400 font-medium uppercase font-mono">
                        Select Popular Bank
                      </label>
                      <div className="grid grid-cols-2 gap-1.5 font-medium text-[11px]">
                        {['HDFC Bank', 'State Bank of India', 'ICICI Bank', 'Axis Bank'].map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBank(b)}
                            className={`p-2 rounded-lg border text-left transition-all ${
                              selectedBank === b
                                ? 'bg-zinc-900 text-white border-zinc-900 font-semibold'
                                : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-2 space-y-2">
                    <button
                      type="button"
                      onClick={handleSimulateRazorpayPay}
                      className="w-full py-2.5 rounded-xl bg-[#0c2340] hover:bg-[#163863] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                    >
                      <Lock className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Pay ₹{payableAmount.toFixed(2)}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowRazorpayModal(false)}
                      className="w-full py-2 text-xs text-zinc-500 hover:text-zinc-800"
                    >
                      Cancel Payment
                    </button>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 3: UPI PAYMENT CONFIRMATION / UTR ENTRY --- */}
      {showUpiConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-sm bg-white rounded-2xl border border-zinc-200 shadow-2xl p-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
              <span className="text-xs font-semibold text-zinc-900">Confirm UPI Payment</span>
              <button
                type="button"
                onClick={() => setShowUpiConfirmModal(false)}
                className="text-zinc-400 hover:text-zinc-900"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-1.5 text-xs">
              <p className="text-zinc-600">
                If you have completed the payment of <strong className="text-zinc-900">₹{payableAmount.toFixed(2)}</strong> in Google Pay, PhonePe, or Paytm, please submit your confirmation:
              </p>
              <div>
                <label className="text-[10px] text-zinc-400 font-medium uppercase font-mono block mb-1">
                  12-Digit UPI Ref / UTR (Optional)
                </label>
                <input
                  type="text"
                  value={upiUtrInput}
                  onChange={(e) => setUpiUtrInput(e.target.value)}
                  placeholder="e.g. 428190382910"
                  className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-xs font-mono text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="button"
                disabled={isSubmittingPayment}
                onClick={() => handleRecordPayment('UPI', upiUtrInput.trim() || undefined)}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-2xs disabled:opacity-50"
              >
                <Check className="h-4 w-4" />
                <span>Confirm Payment of ₹{payableAmount.toFixed(2)}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowUpiConfirmModal(false)}
                className="w-full py-2 text-xs text-zinc-400 hover:text-zinc-700"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
