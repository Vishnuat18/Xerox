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
    description: 'Essential toolkit for single-counter Xerox shops & stationery desks',
    features: [
      '1 Connected Windows Printer',
      'Up to 1,000 monthly orders',
      '25MB file upload limit per order',
      'Standard counter QR standee',
      'Standard B&W & Color rate card',
      'Browser print dialog trigger',
      'Community guides & basic support',
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
    description: 'High performance for busy Xerox shops & campus copy centers',
    features: [
      'Up to 4 Connected Printers simultaneously',
      'Up to 10,000 monthly orders',
      '75MB file upload limit per order',
      'Zero-download native silent spooling',
      'WhatsApp order ready pickup notifications',
      'Custom finishing rules (Spiral, Lamination)',
      'Automated bulk volume discounts',
      'Up to 2 Staff Operator PIN logins',
      'Priority WhatsApp & remote setup support',
    ],
    cta: 'Active Plan',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Pro',
    price: {
      monthly: 499,
      yearly: 399,
    },
    description: 'Powerhouse for high-volume 24x7 print hubs & commercial presses',
    features: [
      'Unlimited printers & background spool agents',
      'Unlimited monthly customer orders',
      '250MB high-res file upload limit',
      'Multi-counter split queue (B&W vs Color router)',
      'Unlimited Staff & Operator PIN logins with audit',
      'Custom shop branding & custom logo on receipts',
      'Custom domain & subdomain mapping',
      'REST API & Spooler Webhooks',
      'Dedicated VIP Manager & 1-hour SLA',
    ],
    cta: 'Select Enterprise',
  },
  {
    id: 'franchise',
    name: 'Franchise Hub',
    price: {
      monthly: 999,
      yearly: 799,
    },
    description: 'Centralized multi-branch network for printing franchises & chains',
    features: [
      'Centralized multi-branch owner console',
      'Inter-branch order routing & load balancing',
      'Master rate card sync across all branches',
      'Printer fleet toner & drum telemetry alerts',
      'Consolidated multi-counter audit reports',
      'Dedicated Android Kiosk mode',
      '24/7 Phone SLA & on-site setup concierge',
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

      {/* TAB 1: 4 Subscription Plan Cards Grid + Feature Escalation Matrix */}
      {activeTab === 'PLANS' && (
        <div className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4.5 pt-1 items-stretch">
            {SUBSCRIPTION_PLANS.map((plan) => {
              const currentPlanName = subData?.planName?.toLowerCase() || 'business';
              const isCurrent = currentPlanName.includes(plan.id) || (plan.id === 'business' && !subData?.planId);
              const price = billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly;

              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-5 flex flex-col justify-between transition-all relative ${
                    isCurrent
                      ? 'bg-white border-2 border-zinc-900 shadow-sm ring-1 ring-zinc-900/10'
                      : plan.popular
                      ? 'bg-white border-2 border-emerald-600/80 shadow-2xs hover:border-emerald-600'
                      : 'bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300'
                  }`}
                >
                  {/* Floating Badges */}
                  {isCurrent && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-wider shadow-2xs whitespace-nowrap z-10">
                      Current Plan
                    </div>
                  )}
                  {!isCurrent && plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-2xs flex items-center gap-1 whitespace-nowrap z-10">
                      <Sparkles className="h-3 w-3 fill-white" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    {/* Plan Name & Description */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-base font-bold text-zinc-900">
                          {plan.name}
                        </h2>
                        {plan.id === 'franchise' && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
                            Enterprise
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed min-h-[34px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="my-3 flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight font-sans">
                        ₹{price}
                      </span>
                      <span className="text-xs font-medium text-zinc-500">
                        / {billingCycle === 'yearly' ? 'mo (billed yrly)' : 'month'}
                      </span>
                    </div>

                    {/* Feature Checklist */}
                    <ul className="space-y-2 pt-1 text-xs">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`h-4 w-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.popular 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : plan.id === 'franchise'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-zinc-900 text-white'
                          }`}>
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
                          : plan.popular
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs'
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

          {/* Feature Escalation Comparison Matrix */}
          <div className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-2xs">
            <div className="p-5 border-b border-zinc-200 bg-zinc-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                  <Sliders className="h-4 w-4 text-zinc-700" />
                  Full Feature Escalation Matrix
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  See how hardware, queues, limits, and team seats expand with each plan tier.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-zinc-600 bg-white px-3 py-1.5 rounded-lg border border-zinc-200 shadow-2xs">
                All plans include 30-Day Free Trial
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-100/60 font-semibold text-zinc-700">
                    <th className="py-3 px-4 w-1/4">Feature Capability</th>
                    <th className="py-3 px-3 text-center w-[18%]">Starter (₹100)</th>
                    <th className="py-3 px-3 text-center w-[18%] bg-emerald-50/40 text-emerald-950">
                      Business Pro (₹249)
                    </th>
                    <th className="py-3 px-3 text-center w-[18%]">Enterprise (₹499)</th>
                    <th className="py-3 px-3 text-center w-[21%]">Franchise (₹999)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-600">
                  {/* Category 1: Hardware & Spooler */}
                  <tr className="bg-zinc-100/50 font-bold text-zinc-900 text-[11px] uppercase tracking-wider">
                    <td colSpan={5} className="py-2.5 px-4">
                      1. Hardware & Spooler Architecture
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Connected Windows Printers</td>
                    <td className="py-2.5 px-3 text-center">1 Printer</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">Up to 4 Printers</td>
                    <td className="py-2.5 px-3 text-center font-bold text-zinc-900">Unlimited Printers</td>
                    <td className="py-2.5 px-3 text-center font-bold text-purple-700">Multi-Branch Fleet</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Print Spooler Mode</td>
                    <td className="py-2.5 px-3 text-center">Browser Dialog (Ctrl+P)</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">Zero-Download Silent Spool</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">Multi-PC Spooler Agents</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">Central Spooler Cluster</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Monthly Order Volume Limit</td>
                    <td className="py-2.5 px-3 text-center">1,000 Jobs / mo</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">10,000 Jobs / mo</td>
                    <td className="py-2.5 px-3 text-center font-bold text-zinc-900">Unlimited Volume</td>
                    <td className="py-2.5 px-3 text-center font-bold text-purple-700">Unlimited High-Speed</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Max File Size per Order</td>
                    <td className="py-2.5 px-3 text-center">25 MB</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">75 MB</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">250 MB</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">500 MB (CAD/Blueprints)</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Automatic Paper Tray Selection</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">Auto A4/Legal Tray</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">Multi-Tray Routing</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">Full Fleet Tray Sync</td>
                  </tr>

                  {/* Category 2: Customer Counter & Upload */}
                  <tr className="bg-zinc-100/50 font-bold text-zinc-900 text-[11px] uppercase tracking-wider">
                    <td colSpan={5} className="py-2.5 px-4">
                      2. Customer Counter & Upload Experience
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Counter QR & Standee Web App</td>
                    <td className="py-2.5 px-3 text-center font-medium">Standard QR</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">Branded Shop Standee</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">White-label Logo QR</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">Multi-Branch QR Router</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">WhatsApp Pickup Notifications</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">1-Click Pickup Alerts</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">Automated Webhooks</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">WhatsApp Business API + OTP</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Custom Finishing Rules (Spiral, Lamination)</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">Custom Finishing</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">Unlimited Rules</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">Master Finishing Library</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Dynamic Bulk Volume Discounts</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">3 Quantity Tiers</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">Unlimited Tiers</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">Institutional Contract Rates</td>
                  </tr>

                  {/* Category 3: Store Operations & Team */}
                  <tr className="bg-zinc-100/50 font-bold text-zinc-900 text-[11px] uppercase tracking-wider">
                    <td colSpan={5} className="py-2.5 px-4">
                      3. Store Operations & Multi-Counter Team
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Operator & Staff PIN Logins</td>
                    <td className="py-2.5 px-3 text-center">1 Owner Seat</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">2 Operator PINs</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">Unlimited Staff PINs</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">Role-Based Access Matrix</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Live Split Queue (B&W vs Color Router)</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-emerald-800">Auto Split Router</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">Cross-Branch Auto Routing</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Custom Shop Branding & Domain</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 text-zinc-400">—</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">Custom Domain Mapping</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">Multi-Domain White-label</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Confidential File Auto-Purge</td>
                    <td className="py-2.5 px-3 text-center">48 Hours</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">24 Hours</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">Instant Post-Print Shred</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-purple-700">Custom Retention Policy</td>
                  </tr>

                  {/* Category 4: Support & SLA */}
                  <tr className="bg-zinc-100/50 font-bold text-zinc-900 text-[11px] uppercase tracking-wider">
                    <td colSpan={5} className="py-2.5 px-4">
                      4. Support & Service Level Agreement
                    </td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Support Channels</td>
                    <td className="py-2.5 px-3 text-center text-zinc-500">Community Guides</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-medium text-emerald-800">Priority WhatsApp</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">Dedicated VIP Manager</td>
                    <td className="py-2.5 px-3 text-center font-bold text-purple-700">24/7 Phone + Onsite Setup</td>
                  </tr>
                  <tr className="hover:bg-zinc-50/60">
                    <td className="py-2.5 px-4 font-medium text-zinc-800">Guaranteed Response SLA</td>
                    <td className="py-2.5 px-3 text-center text-zinc-400">Best Effort</td>
                    <td className="py-2.5 px-3 text-center bg-emerald-50/20 font-semibold text-emerald-800">&lt; 4 Hours</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-zinc-900">&lt; 1 Hour</td>
                    <td className="py-2.5 px-3 text-center font-bold text-purple-700">15 Minutes Guaranteed</td>
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

