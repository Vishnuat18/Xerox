'use client';

import React, { useState, useEffect } from 'react';
import { 
  Check, 
  AlertCircle, 
  Store, 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  Map, 
  LayoutGrid, 
  FileText, 
  Lock
} from 'lucide-react';
import { RateCardClient } from '../pricing/rate-card-client';

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

export default function ShopSettingsPage() {
  const [activeTab, setActiveTab] = useState<'SHOP' | 'RATE_CARD'>('SHOP');
  const [profile, setProfile] = useState<ShopProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('/api/v1/shops/profile')
      .then((res) => res.json())
      .then((profJson) => {
        if (profJson.success && profJson.data?.shop) {
          setProfile(profJson.data.shop);
        }
      })
      .catch((err) => setErrorMessage((err as Error).message))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!profile) return;
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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
        Failed to load profile details.
      </div>
    );
  }

  return (
    <div className="space-y-6 w-full">
      {/* Top Header & Save Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Shop Profile
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            Manage your shop details, billing cycle and subscription status.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {saved && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
              <Check className="h-3.5 w-3.5" /> Saved
            </span>
          )}

          {activeTab === 'SHOP' && (
            <button
              type="button"
              onClick={() => handleSubmit()}
              disabled={isSaving}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm transition-all shadow-sm disabled:opacity-50"
            >
              <Lock className="h-4 w-4 text-zinc-300" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          )}
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="inline-flex items-center gap-1 p-1 bg-zinc-100 rounded-2xl border border-zinc-200/80">
        <button
          type="button"
          onClick={() => setActiveTab('SHOP')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'SHOP'
              ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/60'
              : 'text-zinc-600 hover:text-zinc-900 font-medium'
          }`}
        >
          Shop Profile
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('RATE_CARD')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'RATE_CARD'
              ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/60'
              : 'text-zinc-600 hover:text-zinc-900 font-medium'
          }`}
        >
          Print Rate Card
        </button>
      </div>

      {errorMessage && (
        <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* TAB CONTENT: SHOP PROFILE */}
      {activeTab === 'SHOP' && (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Xerox Printer Photo Card */}
          <div className="lg:col-span-4 relative rounded-3xl border border-zinc-200/80 overflow-hidden shadow-xs min-h-[320px] lg:min-h-[460px] bg-zinc-100 flex flex-col">
            <img
              src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800"
              alt="Xerox Multi-Print Hub Printer"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>

          {/* Right Form Container Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-zinc-200/80 p-6 sm:p-7 shadow-xs space-y-5">
            {/* Shop Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-500">Shop Name</label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-200/90 bg-white focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-900 transition-all">
                <Store className="h-4 w-4 text-zinc-800 shrink-0" />
                <input
                  type="text"
                  name="name"
                  required
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Metro Xerox & Multi-Print Hub"
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500">Phone</label>
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-200/90 bg-white focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-900 transition-all">
                  <Phone className="h-4 w-4 text-zinc-800 shrink-0" />
                  <input
                    type="text"
                    name="phone"
                    required
                    value={profile.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-transparent text-xs sm:text-sm font-medium text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500">Email</label>
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-200/90 bg-white focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-900 transition-all">
                  <Mail className="h-4 w-4 text-zinc-800 shrink-0" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="contact@metroxerox.com"
                    className="w-full bg-transparent text-xs sm:text-sm font-medium text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-500">Address</label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-200/90 bg-white focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-900 transition-all">
                <MapPin className="h-4 w-4 text-zinc-800 shrink-0" />
                <input
                  type="text"
                  name="address"
                  value={profile.address || ''}
                  onChange={handleChange}
                  placeholder="Shop #4, College Cross Road, Tech Junction"
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                />
              </div>
            </div>

            {/* City, State, PIN Code */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500">City</label>
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-200/90 bg-white focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-900 transition-all">
                  <Building2 className="h-4 w-4 text-zinc-800 shrink-0" />
                  <input
                    type="text"
                    name="city"
                    value={profile.city || ''}
                    onChange={handleChange}
                    placeholder="Bangalore"
                    className="w-full bg-transparent text-xs sm:text-sm font-medium text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500">State</label>
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-200/90 bg-white focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-900 transition-all">
                  <Map className="h-4 w-4 text-zinc-800 shrink-0" />
                  <input
                    type="text"
                    name="state"
                    value={profile.state || ''}
                    onChange={handleChange}
                    placeholder="Karnataka"
                    className="w-full bg-transparent text-xs sm:text-sm font-medium text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-500">PIN Code</label>
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-200/90 bg-white focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-900 transition-all">
                  <LayoutGrid className="h-4 w-4 text-zinc-800 shrink-0" />
                  <input
                    type="text"
                    name="pincode"
                    value={profile.pincode || ''}
                    onChange={handleChange}
                    placeholder="560001"
                    className="w-full bg-transparent text-xs sm:text-sm font-medium text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                  />
                </div>
              </div>
            </div>

            {/* GSTIN / Tax ID */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-500">GSTIN / Tax ID</label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-zinc-200/90 bg-white focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-900 transition-all">
                <FileText className="h-4 w-4 text-zinc-800 shrink-0" />
                <input
                  type="text"
                  name="gstNumber"
                  value={profile.gstNumber || ''}
                  onChange={handleChange}
                  placeholder="29ABCDE1234F1Z5"
                  className="w-full bg-transparent text-xs sm:text-sm font-medium font-mono uppercase text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                />
              </div>
            </div>
          </div>
        </form>
      )}

      {/* TAB CONTENT: RATE CARD */}
      {activeTab === 'RATE_CARD' && (
        <div className="bg-white rounded-3xl border border-zinc-200/80 p-6 sm:p-7 shadow-xs">
          <RateCardClient />
        </div>
      )}
    </div>
  );
}

