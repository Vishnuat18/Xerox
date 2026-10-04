'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Check, 
  AlertCircle, 
  Sparkles, 
  CreditCard, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock,
  Calendar
} from 'lucide-react';

interface ShopProfile {
  id: string;
  name: string;
  slug: string;
  phone: string;
  email: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  gstNumber?: string;
}

interface SubscriptionData {
  planId: string;
  planName: string;
  monthlyPrice: number;
  status: 'TRIALING' | 'ACTIVE' | 'EXPIRED';
  daysRemaining: number;
  daysElapsed: number;
  isExpired: boolean;
  features: string[];
}

export default function ShopSettingsPage() {
  const [profile, setProfile] = useState<ShopProfile | null>(null);
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    Promise.all([
      fetch('/api/v1/shops/profile').then((res) => res.json()),
      fetch('/api/v1/shops/subscription').then((res) => res.json()),
    ])
      .then(([profJson, subJson]) => {
        if (profJson.success) setProfile(profJson.data.shop);
        if (subJson.success && subJson.data?.subscription) setSubscription(subJson.data.subscription);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!profile) return;
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    setIsSaving(true);
    setSaved(false);
    setErrorMessage('');

    try {
      const res = await fetch('/api/v1/shops/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error?.message || 'Failed to update shop profile');
      }

      setProfile(json.data.shop);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin h-5 w-5 border-2 border-zinc-900 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="py-20 text-center text-xs text-zinc-500">
        Failed to load profile.
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-8">
      {/* Header */}
      <div className="pb-4 border-b border-zinc-200/70 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-zinc-900 tracking-tight">
            Shop Profile & Membership
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Manage your store details, billing cycle, and subscription status.
          </p>
        </div>

        {saved && (
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
            <Check className="h-3.5 w-3.5" /> Saved
          </span>
        )}
      </div>

      {/* Subscription Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 text-white p-6 shadow-md border border-zinc-700/80">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-400/40">
                <Sparkles className="h-3 w-3" />
                Smart Print Hub Pro
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {subscription?.status === 'ACTIVE' ? 'Active Member' : '30-Day Free Trial'}
              </span>
            </div>

            <h2 className="text-xl font-bold text-white tracking-tight">
              {subscription?.planName || 'Business Pro Hub'}
            </h2>

            <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
              Automatic daily renewal runs every day at <strong className="text-white">12:00 AM Midnight</strong>. All zero-download spooling and live counter queue features are fully enabled.
            </p>

            <div className="flex items-center gap-4 text-xs text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-amber-300" />
                <span>
                  {subscription?.isExpired ? 'Trial Expired' : `${subscription?.daysRemaining ?? 28} Days Remaining`}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-emerald-400" />
                <span>Renews Daily 12:00 AM</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-2">
            <Link
              href="/dashboard/pricing"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-semibold text-xs transition-all shadow-sm"
            >
              <CreditCard className="h-4 w-4" />
              Manage Subscription
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
            </Link>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="h-3.5 w-3.5 shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-2xs">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Shop Identification Details
        </h3>

        <div className="space-y-1">
          <label className="text-xs font-medium text-zinc-700">Shop Name</label>
          <input
            type="text"
            name="name"
            required
            value={profile.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-medium text-zinc-700">Phone</label>
            <input
              type="text"
              name="phone"
              required
              value={profile.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-zinc-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={profile.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-zinc-700">Address</label>
          <input
            type="text"
            name="address"
            value={profile.address || ''}
            onChange={handleChange}
            placeholder="Street address"
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-medium text-zinc-700">City</label>
            <input
              type="text"
              name="city"
              value={profile.city || ''}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-zinc-700">State</label>
            <input
              type="text"
              name="state"
              value={profile.state || ''}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-zinc-700">PIN Code</label>
            <input
              type="text"
              name="pincode"
              value={profile.pincode || ''}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-zinc-700">GSTIN / Tax ID</label>
          <input
            type="text"
            name="gstNumber"
            value={profile.gstNumber || ''}
            onChange={handleChange}
            placeholder="Optional"
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-mono text-zinc-900 uppercase focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
        </div>

        <div className="pt-3 flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white transition-all disabled:opacity-50 shadow-xs"
          >
            {isSaving ? 'Saving...' : 'Save Profile Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
