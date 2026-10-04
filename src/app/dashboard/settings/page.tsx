'use client';

import React, { useState, useEffect } from 'react';
import { Check, AlertCircle } from 'lucide-react';

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
  const [profile, setProfile] = useState<ShopProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('/api/v1/shops/profile')
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setProfile(json.data.shop);
        }
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
    <div className="max-w-2xl space-y-6">
      <div className="pb-4 border-b border-zinc-200/70 flex items-center justify-between">
        <div>
          <h1 className="text-base font-semibold text-zinc-900 tracking-tight">
            Shop Settings
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Update store details displayed on customer order sheets and counter QR.
          </p>
        </div>

        {saved && (
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
            <Check className="h-3.5 w-3.5" /> Saved
          </span>
        )}
      </div>

      {errorMessage && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="h-3.5 w-3.5 shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-white transition-all disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
