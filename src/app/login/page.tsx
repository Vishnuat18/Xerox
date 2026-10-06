'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Printer, AlertCircle, CheckCircle2, User, Phone, KeyRound, ArrowRight, ShieldCheck, Sparkles, QrCode, Eye, EyeOff } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { triggerGoogleAuth } from '@/lib/google-auth';

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const loggedOut = searchParams.get('logged_out');
  const redirectTarget = searchParams.get('redirect') || '/dashboard';

  // Active Login Role Tab: 'owner' | 'customer'
  const [roleTab, setRoleTab] = useState<'owner' | 'customer'>('owner');

  // Shop Owner credentials
  const [email, setEmail] = useState('owner@metroprint.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Customer credentials
  const [customerName, setCustomerName] = useState('Rahul Sharma');
  const [customerPhone, setCustomerPhone] = useState('9876543210');

  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(loggedOut ? 'You have safely signed out.' : '');

  // Handle Shop Owner Sign In with Google (MySQL Backend)
  const handleGoogleOwnerLogin = async () => {
    setIsGoogleLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const googleUser = await triggerGoogleAuth();
      if (!googleUser || !googleUser.email) {
        throw new Error('Google sign-in did not return a valid email address.');
      }

      const res = await fetch('/api/v1/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: googleUser.email,
          fullName: googleUser.fullName,
          sub: googleUser.sub,
          action: 'login',
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || 'Authentication failed with MySQL database.');
      }

      setSuccessMessage(`Welcome ${data.data?.user?.fullName || googleUser.email}! Opening shop dashboard...`);
      setTimeout(() => {
        router.push(redirectTarget);
        router.refresh();
      }, 400);
    } catch (err: any) {
      if (err.message !== 'Google sign-in cancelled.') {
        setErrorMessage(err.message || 'Google Sign-In failed. Please try again or use email/password.');
      }
    } finally {
      setIsGoogleLoading(false);
    }
  };

  // Handle Shop Owner Sign In
  const handleOwnerLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || 'Login failed. Please check your email and password.');
      }

      setSuccessMessage('Authentication successful! Directing to dashboard...');
      setTimeout(() => {
        router.push(redirectTarget);
        router.refresh();
      }, 350);
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Universal Customer Sign In
  const handleCustomerLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const cleanPhone = customerPhone.replace(/[^0-9]/g, '');
      if (cleanPhone.length < 10) {
        throw new Error('Please enter a valid 10-digit mobile contact number.');
      }

      const res = await fetch('/api/v1/customer/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: customerName.trim(), phone: cleanPhone }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || 'Could not verify customer account.');
      }

      // Persist client-side profile
      if (data.data?.customer) {
        localStorage.setItem('sph_customer_profile', JSON.stringify(data.data.customer));
      }

      setSuccessMessage(`Welcome back, ${data.data.customer.fullName}! Redirecting to Scanner...`);
      setTimeout(() => {
        router.push('/scan');
        router.refresh();
      }, 400);
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoOwner = () => {
    setEmail('owner@metroprint.com');
    setPassword('password123');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50/50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-1.5">
            <div className="h-10 w-10 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mx-auto mb-2 shadow-sm">
              <Printer className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-zinc-900">
              Sign In to Smart Print Hub
            </h1>
            <p className="text-xs text-zinc-500">
              Select your role to access shop operations or your print orders
            </p>
          </div>

          {/* Role Switcher Tabs */}
          <div className="flex p-1 bg-zinc-200/70 rounded-2xl">
            <button
              type="button"
              onClick={() => {
                setRoleTab('owner');
                setErrorMessage('');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-xl transition-all ${
                roleTab === 'owner'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Shop Owner / Counter</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setRoleTab('customer');
                setErrorMessage('');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-xl transition-all ${
                roleTab === 'customer'
                  ? 'bg-white text-zinc-900 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <User className="h-3.5 w-3.5" />
              <span>Universal Customer</span>
            </button>
          </div>

          {/* Status Banners */}
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* TAB 1: Shop Owner Form */}
          {roleTab === 'owner' && (
            <form onSubmit={handleOwnerLogin} className="bg-white rounded-3xl border border-zinc-200/80 p-6 sm:p-7 space-y-4 shadow-sm">
              
              {/* Google Sign-in for Shop Owners */}
              <div className="space-y-3 pb-1">
                <button
                  type="button"
                  onClick={handleGoogleOwnerLogin}
                  disabled={isGoogleLoading || isLoading}
                  className="w-full py-2.5 px-4 rounded-xl border border-zinc-200/90 bg-white hover:bg-zinc-50 text-zinc-800 text-xs font-semibold flex items-center justify-center gap-2.5 transition-all shadow-xs active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>{isGoogleLoading ? 'Connecting with Google...' : 'Continue with Google'}</span>
                </button>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-zinc-200 w-full" />
                  <span className="bg-white px-3 text-[10px] text-zinc-400 uppercase font-semibold tracking-wider">
                    or sign in with email
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-700">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="owner@metroprint.com"
                  className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-zinc-700">Password</label>
                  <span className="text-[11px] text-zinc-400">Default: password123</span>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 pr-10 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 p-1 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-zinc-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                  />
                  <span>Keep me signed in</span>
                </label>
                <button
                  type="button"
                  onClick={fillDemoOwner}
                  className="text-[11px] text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Prefill Demo
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-xs"
                >
                  {isLoading ? 'Signing In...' : 'Sign In to Shop Dashboard'}
                  {!isLoading && <ArrowRight className="h-3.5 w-3.5" />}
                </button>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span>New Xerox counter?</span>
                <Link href="/register" className="font-semibold text-zinc-900 hover:underline">
                  Register Shop (1 Account/System)
                </Link>
              </div>
            </form>
          )}

          {/* TAB 2: Customer Universal Login */}
          {roleTab === 'customer' && (
            <form onSubmit={handleCustomerLogin} className="bg-white rounded-3xl border border-zinc-200/80 p-6 sm:p-7 space-y-4 shadow-sm">
              <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-[11px] text-zinc-600">
                  <span className="font-semibold text-zinc-900">Universal Customer Account:</span> Use your mobile number to send files and track print jobs across any enrolled Xerox shop nationwide.
                </p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-700">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Rahul Sharma"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                  <User className="h-4 w-4 text-zinc-400 absolute right-3 top-2.5 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-700">Mobile Number (10 digits)</label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="9876543210"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                  <Phone className="h-4 w-4 text-zinc-400 absolute right-3 top-2.5 pointer-events-none" />
                </div>
                <p className="text-[10px] text-zinc-400">
                  No password required. Your mobile number securely identifies your orders.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-xs"
                >
                  {isLoading ? 'Verifying Account...' : 'Continue to Customer Scanner'}
                  {!isLoading && <QrCode className="h-3.5 w-3.5 text-emerald-400" />}
                </button>
              </div>

              <div className="pt-3 border-t border-zinc-100 text-center">
                <Link href="/scan" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 inline-flex items-center gap-1">
                  <span>Or scan counter QR as guest</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </form>
          )}

          {/* Security Assurance Badge */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>End-to-End Encrypted Session • Real Bcrypt Hashing</span>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-900 border-t-transparent" />
      </div>
    }>
      <LoginFormContent />
    </Suspense>
  );
}
