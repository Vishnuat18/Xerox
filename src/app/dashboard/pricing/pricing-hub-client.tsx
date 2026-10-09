'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Check, 
  CheckCircle2, 
  Sparkles, 
  AlertTriangle,
  CreditCard,
  Sliders,
  ShieldCheck
} from 'lucide-react';
import { type PricingTier } from '@/components/ui/pricing-card';
import { PlanUpgradeModal } from '@/components/dashboard/PlanUpgradeModal';
import { RateCardClient } from './rate-card-client';

interface SubscriptionData {
  planId: string;
  planName: string;
  monthlyPrice: number;
  status: 'TRIALING' | 'ACTIVE' | 'EXPIRED';
  trialStartAt: string;
  trialEndAt: string;
  daysRemaining: number;
  daysElapsed: number;
  isExpired: boolean;
  nextRenewalAt: string;
  features: string[];
}

const SUBSCRIPTION_PLANS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: {
      monthly: 100,
      yearly: 80,
    },
    description: 'Essential toolkit for small Xerox shops & stationery counters',
    features: [
      '1 Connected Windows Printer',
      'Unlimited customer orders',
      'Standard B&W and Color printing',
      'Cash & UPI rate collection',
      'Community support',
    ],
    cta: 'Select Starter',
  },
  {
    id: 'business',
    name: 'Business',
    price: {
      monthly: 249,
      yearly: 199,
    },
    description: 'High performance for busy Xerox shops & university print hubs',
    features: [
      'Up to 4 Connected Printers',
      'Zero-download native silent spooling',
      'WhatsApp order notifications',
      'Custom finishing rules (Spiral, Hardcover)',
      'Automated bulk discounts',
      'Priority remote spooler support',
    ],
    cta: 'Active Plan',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 499,
      yearly: 399,
    },
    description: 'Full featured for multi-counter high-volume print centers',
    features: [
      'Unlimited printers & agents',
      'Multi-operator logins & staff roles',
      'Custom shop branding & domain',
      'Live queue split across B&W & Color',
      'API & Remote Spooler SDK',
      'Dedicated support & onboarding',
    ],
    cta: 'Select Enterprise',
  },
];

export function PricingHubClient() {
  const searchParams = useSearchParams();
  const isUrlExpired = searchParams?.get('expired') === 'true';

  const [activeTab, setActiveTab] = useState<'PLANS' | 'RATE_CARD'>('PLANS');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [subData, setSubData] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fetchSubscription = async () => {
    try {
      const res = await fetch('/api/v1/shops/subscription');
      const json = await res.json();
      if (json.success && json.data?.subscription) {
        setSubData(json.data.subscription);
      }
    } catch (e) {
      console.error('Failed to load subscription:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, []);

  const handleSelectTier = (tier: PricingTier) => {
    setSelectedTier(tier);
    setModalOpen(true);
  };

  const handleUpgradeSuccess = (updatedSub: SubscriptionData) => {
    setSubData(updatedSub);
    setToastMessage(`Congratulations! Your shop plan is now ${updatedSub.planName}!`);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const isExpired = isUrlExpired || (subData ? subData.isExpired : false);

  if (loading) {
    return (
      <div className="py-24 flex flex-col items-center justify-center space-y-3">
        <div className="animate-spin h-7 w-7 border-2 border-zinc-900 border-t-transparent rounded-full" />
        <p className="text-xs font-medium text-zinc-500">Loading Subscription Plans...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 p-4 rounded-xl bg-zinc-950 text-white shadow-2xl border border-zinc-800 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <p className="text-xs font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Trial Expired Warning */}
      {isExpired && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold uppercase tracking-wide text-rose-800">
              Subscription Expired
            </h4>
            <p className="text-xs text-rose-700">
              Please activate a plan below to unlock your print queue and counter features.
            </p>
          </div>
        </div>
      )}

      {/* Top Header Row with Title & Monthly/Yearly Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Subscription & Rates
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Choose the plan that fits your print hub. Start with a 30-day free trial.
          </p>
        </div>

        {/* Right Side: Monthly / Yearly Cycle Switcher */}
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-zinc-100/90 border border-zinc-200/80 shrink-0">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-zinc-900 text-white shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              billingCycle === 'yearly'
                ? 'bg-zinc-900 text-white shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Yearly
          </button>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
            Save 20%
          </span>
        </div>
      </div>

      {/* Secondary Pill Tabs: Subscription Plans vs Print Rate Card */}
      <div className="inline-flex p-1 rounded-full bg-zinc-100/90 border border-zinc-200/80 text-xs gap-1">
        <button
          type="button"
          onClick={() => setActiveTab('PLANS')}
          className={`px-4 py-1.5 rounded-full font-semibold transition-all ${
            activeTab === 'PLANS'
              ? 'bg-zinc-900 text-white shadow-2xs'
              : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          Subscription Plans
        </button>

        <button
          type="button"
          disabled={isExpired}
          onClick={() => setActiveTab('RATE_CARD')}
          className={`px-4 py-1.5 rounded-full font-semibold transition-all ${
            activeTab === 'RATE_CARD'
              ? 'bg-zinc-900 text-white shadow-2xs'
              : isExpired
                ? 'text-zinc-300 cursor-not-allowed'
                : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          Print Rate Card
        </button>
      </div>

      {/* TAB 1: 3 Subscription Plan Cards Grid */}
      {activeTab === 'PLANS' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => {
            const currentPlanName = subData?.planName?.toLowerCase() || 'business';
            const isCurrent = currentPlanName.includes(plan.id) || (plan.id === 'business' && !subData?.planId);
            const price = billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-5 flex flex-col justify-between transition-all relative ${
                  isCurrent
                    ? 'bg-white border-2 border-zinc-900 shadow-sm'
                    : 'bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300'
                }`}
              >
                {/* Floating "Current Plan" Badge */}
                {isCurrent && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                    Current Plan
                  </div>
                )}

                <div>
                  {/* Plan Name & Description */}
                  <div className="space-y-1">
                    <h2 className="text-base font-bold text-zinc-900">
                      {plan.name}
                    </h2>
                    <p className="text-xs text-zinc-500 leading-relaxed min-h-[32px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-3.5 flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight font-sans">
                      ₹{price}
                    </span>
                    <span className="text-xs font-medium text-zinc-500">
                      / month
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-1 text-xs">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="h-4 w-4 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <span className="text-zinc-700 leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 mt-4 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => handleSelectTier(plan)}
                    disabled={isCurrent}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                      isCurrent
                        ? 'bg-zinc-900 text-white shadow-2xs cursor-default'
                        : 'bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200'
                    }`}
                  >
                    {isCurrent ? 'Active Plan' : `Select ${plan.name}`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 2: Customer Xerox Rate Card */}
      {activeTab === 'RATE_CARD' && !isExpired && (
        <div className="pt-2">
          <RateCardClient />
        </div>
      )}

      {/* Upgrade / Payment Modal */}
      <PlanUpgradeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        tier={selectedTier}
        billingFrequency={billingCycle}
        onSuccess={handleUpgradeSuccess}
      />
    </div>
  );
}

