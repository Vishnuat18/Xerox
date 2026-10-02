'use client';

import React, { useState, useEffect } from 'react';
import { 
  Store, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Save, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
  isActive: boolean;
  subscription?: {
    status: string;
    plan: {
      name: string;
      maxPrinters: number;
      maxMonthlyOrders: number;
    };
    trialEndAt: string;
  };
}

export default function ShopSettingsPage() {
  const [profile, setProfile] = useState<ShopProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    setSuccessMessage('');
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
      setSuccessMessage('Shop profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 4000);
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <div className="flex items-center gap-3 text-zinc-500 text-sm">
          <div className="animate-spin h-5 w-5 border-2 border-emerald-600 border-t-transparent rounded-full" />
          <span>Loading shop profile...</span>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="p-8 text-center text-zinc-500">
        <p>Could not load profile. Please refresh.</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 max-w-5xl mx-auto">
      
      <div>
        <h1 className="text-2xl font-black text-zinc-900 tracking-tight flex items-center gap-2">
          <Store className="h-6 w-6 text-emerald-700" />
          Shop Profile & Operational Settings
        </h1>
        <p className="text-xs text-zinc-500 mt-1">
          Manage business identity, customer counter contact details, and view subscription limits.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Settings Form */}
        <div className="lg:col-span-8">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Shop Details</CardTitle>
                <CardDescription>
                  These details appear on your customer receipts and counter standee.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {successMessage && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{successMessage}</span>
                  </div>
                )}

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Shop / Center Name
                  </label>
                  <div className="relative">
                    <Store className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={profile.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      Counter Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
                      <input
                        type="text"
                        name="phone"
                        required
                        value={profile.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      Shop Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={profile.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Physical Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
                    <input
                      type="text"
                      name="address"
                      value={profile.address || ''}
                      onChange={handleChange}
                      placeholder="Shop #, Street, Commercial Complex"
                      className="w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={profile.city || ''}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={profile.state || ''}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={profile.pincode || ''}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    GSTIN / Tax Identification
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
                    <input
                      type="text"
                      name="gstNumber"
                      value={profile.gstNumber || ''}
                      onChange={handleChange}
                      placeholder="29ABCDE1234F1Z5"
                      className="w-full rounded-xl border border-zinc-200 bg-white pl-10 pr-4 py-2.5 text-sm text-zinc-900 uppercase font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                    />
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-end border-t border-zinc-100 pt-4">
                <Button type="submit" variant="primary" isLoading={isSaving} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>

        {/* Right Column: Metadata & Subscription Info */}
        <div className="lg:col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-700" />
                Shop Identity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div>
                <span className="text-zinc-400 block font-mono text-[10px]">SHOP ID</span>
                <span className="font-mono text-zinc-900 font-bold select-all">
                  {profile.id}
                </span>
              </div>
              <div>
                <span className="text-zinc-400 block font-mono text-[10px]">URL SLUG</span>
                <span className="font-mono text-emerald-700 font-bold select-all">
                  {profile.slug}
                </span>
              </div>
              <div>
                <span className="text-zinc-400 block font-mono text-[10px]">STATUS</span>
                <Badge variant={profile.isActive ? 'success' : 'danger'}>
                  {profile.isActive ? 'ACTIVE & ONLINE' : 'INACTIVE'}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-zinc-700" />
                Plan & Entitlements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Tier:</span>
                <span className="font-bold text-zinc-900">
                  {profile.subscription?.plan?.name || 'Professional'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Max Printers:</span>
                <span className="font-bold text-zinc-900">
                  {profile.subscription?.plan?.maxPrinters || 4} Printers
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Order Quota:</span>
                <span className="font-bold text-zinc-900">
                  {profile.subscription?.plan?.maxMonthlyOrders || 2500} / Month
                </span>
              </div>
              <div className="pt-2 border-t border-zinc-100 text-[11px] text-emerald-700 font-bold">
                30-Day Free Trial Active
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

    </div>
  );
}
