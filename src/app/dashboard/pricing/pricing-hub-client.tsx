'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  CreditCard,
  Sliders,
  Layers,
  Calendar
} from 'lucide-react';
import { PricingSection, XEROX_TIERS } from '@/components/blocks/pricing-section';
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

export function PricingHubClient() {
  const searchParams = useSearchParams();
  const isUrlExpired = searchParams?.get('expired') === 'true';

  const [activeTab, setActiveTab] = useState<'PLANS' | 'RATE_CARD'>('PLANS');
  const [subData, setSubData] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [selectedFrequency, setSelectedFrequency] = useState<string>('monthly');
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

  const handleSelectTier = (tier: PricingTier, frequency: string) => {
    setSelectedTier(tier);
    setSelectedFrequency(frequency);
    setModalOpen(true);
  };

  const handleUpgradeSuccess = (updatedSub: SubscriptionData) => {
    setSubData(updatedSub);
    setToastMessage(`Congratulations! Your shop has upgraded to ${updatedSub.planName}!`);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const isExpired = isUrlExpired || (subData ? subData.isExpired : false);

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 p-4 rounded-xl bg-zinc-950 text-white shadow-2xl border border-zinc-800 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <p className="text-xs font-medium">{toastMessage}</p>
        </div>
      )}

      {/* Google Pro Subscription Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6 shadow-md border border-zinc-700/60">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-radial from-emerald-500/20 to-transparent rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Sparkles className="h-3 w-3" />
                Smart Print Hub Pro
              </span>
              {isExpired ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  <AlertTriangle className="h-3 w-3" /> Trial Expired
                </span>
              ) : subData?.status === 'ACTIVE' ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <ShieldCheck className="h-3 w-3" /> Active Plan
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  <Clock className="h-3 w-3" /> 30-Day Free Trial
                </span>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {subData?.planName || 'Smart Print Hub Pro'}
            </h1>

            <p className="text-xs text-zinc-300 max-w-xl leading-relaxed">
              Every day at <span className="text-amber-300 font-medium">12:00 AM Midnight</span>, your daily counter allocation renews automatically. Full unrestricted access for 30 days upon shop registration.
            </p>
          </div>

          {/* Trial / Renewal Counter Box */}
          <div className="bg-zinc-800/80 backdrop-blur-xs border border-zinc-700/80 rounded-xl p-4 min-w-[240px] space-y-2 shrink-0">
            <div className="flex items-center justify-between text-xs text-zinc-300">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-zinc-400" /> Trial Status
              </span>
              <span className="font-mono font-bold text-amber-300">
                {subData ? `${subData.daysRemaining} Days Left` : '30 Days'}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-zinc-700/60 rounded-full h-2 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${
                  isExpired ? 'bg-rose-500 w-full' : 'bg-gradient-to-r from-emerald-400 to-amber-300'
                }`}
                style={{ 
                  width: subData 
                    ? `${Math.min(100, Math.max(5, (subData.daysElapsed / 30) * 100))}%` 
                    : '10%' 
                }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-0.5">
              <span>Day {subData?.daysElapsed ?? 1} of 30</span>
              <span className="text-zinc-300 font-mono">Renews daily 12:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trial Expired Alert Banner */}
      {isExpired && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wide text-rose-800">
              Your 30-Day Free Pro Trial Has Ended
            </h4>
            <p className="text-xs text-rose-700 leading-relaxed">
              Your counter queue and zero-download printing are paused until a subscription is activated. Select a plan below to instantly resume shop operations.
            </p>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex items-center justify-between border-b border-zinc-200/80 pb-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('PLANS')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'PLANS'
                ? 'bg-zinc-900 text-white shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <CreditCard className="h-3.5 w-3.5" />
            Subscription Plans
          </button>

          <button
            type="button"
            disabled={isExpired}
            onClick={() => setActiveTab('RATE_CARD')}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'RATE_CARD'
                ? 'bg-zinc-900 text-white shadow-xs'
                : isExpired
                  ? 'text-zinc-300 cursor-not-allowed'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            <Sliders className="h-3.5 w-3.5" />
            Print Rate Card
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] text-zinc-400">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
          <span>Instant Activation & GST Invoicing</span>
        </div>
      </div>

      {/* Tab 1: SaaS Subscription Plans */}
      {activeTab === 'PLANS' && (
        <div className="pt-2">
          <PricingSection
            title="Membership Plans"
            subtitle="Start with a 30-day free trial. Flexible subscriptions tailored for print counters."
            tiers={XEROX_TIERS}
            currentPlanId={subData?.planId}
            onSelectTier={handleSelectTier}
          />
        </div>
      )}

      {/* Tab 2: Customer Xerox Rate Card */}
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
        billingFrequency={selectedFrequency}
        onSuccess={handleUpgradeSuccess}
      />
    </div>
  );
}
