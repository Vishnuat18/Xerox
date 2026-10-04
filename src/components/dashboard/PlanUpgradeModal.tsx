'use client';

import React, { useState } from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  CreditCard, 
  QrCode, 
  Smartphone, 
  ArrowRight,
  Loader2
} from 'lucide-react';
import { type PricingTier } from '@/components/ui/pricing-card';

interface PlanUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: PricingTier | null;
  billingFrequency: string;
  onSuccess: (subscriptionData: any) => void;
}

export function PlanUpgradeModal({
  isOpen,
  onClose,
  tier,
  billingFrequency,
  onSuccess,
}: PlanUpgradeModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'GPAY' | 'CARD'>('UPI');
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen || !tier) return null;

  const price = typeof tier.price === 'number' 
    ? tier.price 
    : billingFrequency === 'yearly' 
      ? tier.price.yearly 
      : tier.price.monthly;

  const handleConfirmPayment = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const res = await fetch('/api/v1/shops/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: tier.id,
          billingCycle: billingFrequency,
          paymentMethod,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error?.message || 'Payment processing failed');
      }

      setSuccess(true);
      setTimeout(() => {
        onSuccess(json.data.subscription);
        setSuccess(false);
        onClose();
      }, 1600);
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-6 pt-6 pb-4 bg-gradient-to-b from-zinc-50 to-white border-b border-zinc-100 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-emerald-100 text-emerald-800 mb-2">
              <Sparkles className="h-3 w-3" /> Smart Print Hub Pro
            </div>
            <h3 className="text-xl font-bold text-zinc-900">
              Upgrade to {tier.name}
            </h3>
            <p className="text-xs text-zinc-500 mt-0.5">
              Instant activation • Automated daily 12:00 AM renewal • Cancel anytime
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5">
          {error && (
            <div className="p-3 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-xl">
              {error}
            </div>
          )}

          {/* Pricing Summary Box */}
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-between">
            <div>
              <span className="text-xs text-zinc-500 block">Selected Billing</span>
              <span className="text-sm font-semibold text-zinc-900 capitalize">
                {billingFrequency} Subscription
              </span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold font-mono text-zinc-900">
                ₹{price}
              </span>
              <span className="text-[11px] text-zinc-400 block">
                {billingFrequency === 'yearly' ? '/month (billed yearly)' : '/month'}
              </span>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-700 block">
              Select Payment Method
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setPaymentMethod('UPI')}
                className={`p-3 rounded-xl border text-left flex flex-col items-center gap-1.5 transition-all ${
                  paymentMethod === 'UPI'
                    ? 'border-zinc-900 bg-zinc-900 text-white shadow-xs'
                    : 'border-zinc-200 hover:border-zinc-300 text-zinc-700 bg-white'
                }`}
              >
                <QrCode className="h-5 w-5" />
                <span className="text-xs font-semibold">UPI QR</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('GPAY')}
                className={`p-3 rounded-xl border text-left flex flex-col items-center gap-1.5 transition-all ${
                  paymentMethod === 'GPAY'
                    ? 'border-zinc-900 bg-zinc-900 text-white shadow-xs'
                    : 'border-zinc-200 hover:border-zinc-300 text-zinc-700 bg-white'
                }`}
              >
                <Smartphone className="h-5 w-5" />
                <span className="text-xs font-semibold">UPI App</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('CARD')}
                className={`p-3 rounded-xl border text-left flex flex-col items-center gap-1.5 transition-all ${
                  paymentMethod === 'CARD'
                    ? 'border-zinc-900 bg-zinc-900 text-white shadow-xs'
                    : 'border-zinc-200 hover:border-zinc-300 text-zinc-700 bg-white'
                }`}
              >
                <CreditCard className="h-5 w-5" />
                <span className="text-xs font-semibold">Card / NetBank</span>
              </button>
            </div>
          </div>

          {/* Payment Method Specific View */}
          {paymentMethod === 'UPI' && (
            <div className="p-3.5 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/50 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-medium text-emerald-950 block">Direct Counter UPI ID</span>
                <span className="text-xs font-mono text-emerald-700 font-semibold">smartprinthub@icici</span>
              </div>
              <span className="px-2 py-1 rounded bg-emerald-600 text-white text-[10px] font-medium">Instant Verify</span>
            </div>
          )}

          {paymentMethod === 'GPAY' && (
            <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50 flex items-center justify-between text-xs text-emerald-900">
              <span>UPI App Intent Link</span>
              <span className="font-semibold text-emerald-700 font-mono">paytm.com / phonepe</span>
            </div>
          )}

          {/* Plan Highlights */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block">
              What&apos;s Included In {tier.name}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-600">
              {tier.features.slice(0, 4).map((f) => (
                <div key={f} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>256-Bit Encrypted Payment</span>
          </div>

          <button
            type="button"
            disabled={isProcessing || success}
            onClick={handleConfirmPayment}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white transition-all shadow-sm disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : success ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                Payment Confirmed!
              </>
            ) : (
              <>
                Pay ₹{price} & Activate
                <ArrowRight className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
