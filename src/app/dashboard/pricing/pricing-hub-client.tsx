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
    name: 'Starter Hub',
    price: {
      monthly: 100,
      yearly: 80,
    },
    description: 'Essential digital counter toolkit for small Xerox shops & stationery stalls',
    features: [
      '1 Connected Windows Printer',
      'Up to 1,500 monthly customer orders',
      'Counter QR document upload',
      'Automatic PDF page counting & preview',
      'Standard Cash & UPI rate collection',
      'Community & email support',
    ],
    cta: 'Select Starter',
  },
  {
    id: 'business',
    name: 'Business Pro',
    price: {
      monthly: 249,
      yearly: 199,
    },
    description: 'High-speed automation for busy xerox centers, college hubs & cyber cafes',
    features: [
      'Up to 4 Connected Printers & MFPs',
      'Up to 15,000 monthly customer orders',
      'Zero-download native silent spooling',
      'WhatsApp order pickup notifications',
      'Custom finishing rules (Spiral, Hardcover)',
      'Automated bulk quantity discount tiers',
      'Daily sales & page volume reports',
    ],
    cta: 'Active Plan',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Hub',
    price: {
      monthly: 499,
      yearly: 399,
    },
    description: 'Complete operating system for high-volume, multi-counter print establishments',
    features: [
      'Unlimited printers & background spoolers',
      'Unlimited monthly customer orders',
      'Multi-counter logins & staff operator PINs',
      'Full Finance & Cashflow Management ledger',
      'Customer Khata / Credit book with reminders',
      'Cost-Per-Page (CPP) & margin simulator',
      'Custom shop logo & branding on QR/receipts',
      'Split queue routing (B&W machine vs Color)',
    ],
    cta: 'Select Enterprise',
  },
  {
    id: 'franchise',
    name: 'Franchise Chain',
    price: {
      monthly: 999,
      yearly: 799,
    },
    description: 'Enterprise command center for multi-branch xerox networks & campus franchises',
    features: [
      'Multi-branch centralized owner dashboard',
      'Inter-branch order routing & load balancing',
      'Centralized rate card & master price sync',
      'Consolidated multi-store GST & cash audits',
      'REST API & Webhooks for ERP/POS sync',
      'Corporate accounts & monthly billing ledger',
      'Dedicated 24/7 phone SLA & setup manager',
    ],
    cta: 'Select Franchise',
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

      {/* TAB 1: 4 Subscription Plan Cards Grid & Feature Escalation Matrix */}
      {activeTab === 'PLANS' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-1 items-stretch">
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
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider shadow-2xs whitespace-nowrap">
                      Current Plan
                    </div>
                  )}

                  <div>
                    {/* Plan Name & Description */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-base font-bold text-zinc-900">
                          {plan.name}
                        </h2>
                        {plan.popular && !isCurrent && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed min-h-[34px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="my-3 flex items-baseline gap-1">
                      <span className="text-2xl font-black text-zinc-900 tracking-tight font-sans">
                        ₹{price}
                      </span>
                      <span className="text-xs font-medium text-zinc-500">
                        / month
                      </span>
                    </div>

                    {/* Feature Checklist */}
                    <ul className="space-y-2 pt-1 text-xs">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="h-3.5 w-3.5 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                          <span className="text-zinc-700 leading-tight text-[11.5px]">
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

          {/* Feature Comparison Matrix */}
          <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-2xs">
            <div className="p-4 sm:p-5 border-b border-zinc-100 bg-zinc-50/70">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <h3 className="text-sm font-bold text-zinc-900">
                  Feature Comparison Matrix — Tier Progression by Price
                </h3>
              </div>
              <p className="text-xs text-zinc-500 mt-0.5">
                Each plan progressively unlocks more hardware capacity, automation, accounting tools, and franchise multi-store scaling.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/90 text-zinc-600 font-semibold uppercase text-[11px] tracking-wider">
                    <th className="py-3 px-4 w-1/3">Feature Category & Capability</th>
                    <th className="py-3 px-3 text-center">Starter (₹100)</th>
                    <th className="py-3 px-3 text-center bg-zinc-100/70 font-bold text-zinc-900">Business Pro (₹249)</th>
                    <th className="py-3 px-3 text-center">Enterprise (₹499)</th>
                    <th className="py-3 px-3 text-center">Franchise (₹999)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-700">
                  {/* Category: Hardware & Print Engine */}
                  <tr className="bg-zinc-100/40 font-bold text-zinc-900 text-[11px] uppercase tracking-wider">
                    <td colSpan={5} className="py-2 px-4">
                      1. Hardware & Print Automation
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Connected Windows Printers</td>
                    <td className="py-2.5 px-3 text-center">1 Printer</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-semibold text-zinc-900">Up to 4 Printers</td>
                    <td className="py-2.5 px-3 text-center font-bold text-emerald-700">Unlimited</td>
                    <td className="py-2.5 px-3 text-center font-bold text-emerald-700">Multi-Branch Unlimited</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Monthly Print Job Volume</td>
                    <td className="py-2.5 px-3 text-center">1,500 orders</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-semibold text-zinc-900">15,000 orders</td>
                    <td className="py-2.5 px-3 text-center font-bold text-emerald-700">Unlimited</td>
                    <td className="py-2.5 px-3 text-center font-bold text-emerald-700">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Native Windows Silent Spooler (sph-agent)</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">Manual Print Dialog</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-semibold text-emerald-700">Zero-Click Auto-Spool</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Zero-Click Auto-Spool</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Multi-Agent Load Balance</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Split Queue Routing (B&W vs Color MFP)</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Automated Split</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Inter-Branch Split</td>
                  </tr>

                  {/* Category: Customer Experience */}
                  <tr className="bg-zinc-100/40 font-bold text-zinc-900 text-[11px] uppercase tracking-wider">
                    <td colSpan={5} className="py-2 px-4">
                      2. Customer Counter & Upload Experience
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Counter QR & Mobile Upload Portal</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Standard QR</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-semibold text-emerald-700">Branded QR</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Custom Logo QR</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Multi-Counter Branch QR</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">WhatsApp Order Ready Notifications</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-semibold text-emerald-700">Ready Pickup Alerts</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Automated Webhooks</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">WhatsApp Business API + OTP</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Finishing Rules (Spiral, Hardcover, Lamination)</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-semibold text-emerald-700">Custom Finishing</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Custom Finishing</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Master Finishing Library</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Automated Bulk Quantity Discounts</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-semibold text-emerald-700">3 Volume Tiers</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Unlimited Tiers</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Contract Client Pricing</td>
                  </tr>

                  {/* Category: Finance & Cashflow */}
                  <tr className="bg-zinc-100/40 font-bold text-zinc-900 text-[11px] uppercase tracking-wider">
                    <td colSpan={5} className="py-2 px-4">
                      3. Finance & Cashflow Management
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Cash vs UPI Revenue Tracking</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Basic Total</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-semibold text-emerald-700">Daily Cash vs UPI</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Full Till Ledger</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Multi-Store Consolidated</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Customer Khata / Credit Book</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Unlimited + WhatsApp Reminders</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Corporate Credit Ledgers</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Cost-Per-Page (CPP) & Margin Simulator</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Interactive Simulator</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Consolidated Yield Audits</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Day-End Cash Drawer Z-Report</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-semibold text-zinc-800">Basic Summary</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Full Discrepancy & Print</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Audit-Ready Tax Report</td>
                  </tr>

                  {/* Category: Store Operations & Franchise */}
                  <tr className="bg-zinc-100/40 font-bold text-zinc-900 text-[11px] uppercase tracking-wider">
                    <td colSpan={5} className="py-2 px-4">
                      4. Store Operations & Franchise Architecture
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Staff / Operator PIN Logins</td>
                    <td className="py-2.5 px-3 text-center">1 Owner Seat</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-semibold text-zinc-800">2 Operator PINs</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Unlimited Staff PINs</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Franchise Role-Based Access</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Inter-Branch Order Routing</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Automated Load Routing</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Support & SLA</td>
                    <td className="py-2.5 px-3 text-center text-zinc-500">Community</td>
                    <td className="py-2.5 px-3 text-center bg-zinc-50/60 font-medium text-zinc-800">Priority WhatsApp</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-700">Dedicated VIP Manager</td>
                    <td className="py-2.5 px-3 text-center font-bold text-emerald-700">24/7 Phone SLA + Onsite Setup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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

