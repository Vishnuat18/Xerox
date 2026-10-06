'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Store, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { triggerGoogleAuth } from '@/lib/google-auth';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    shopName: '',
    city: 'Bangalore',
    state: 'Karnataka',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const payload = {
        ...formData,
      };

      const res = await fetch('/api/v1/auth/register-owner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || 'Registration failed. Please check your details.');
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setIsGoogleLoading(true);
    setErrorMessage('');

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
          fullName: googleUser.fullName || formData.fullName || 'Shop Owner',
          shopName: formData.shopName || `${googleUser.fullName || 'Xerox'} Print Hub`,
          sub: googleUser.sub,
          action: 'register',
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || 'Failed to setup shop in MySQL with Google.');
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      if (err.message !== 'Google sign-in cancelled.') {
        setErrorMessage(err.message || 'Google registration failed.');
      }
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50/50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          
          <div className="text-center space-y-1">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center mx-auto mb-3 shadow-2xs">
              <Store className="h-4 w-4" />
            </div>
            <h1 className="text-lg font-semibold text-zinc-900">
              Register your Xerox Shop
            </h1>
            <p className="text-xs text-zinc-400">
              Get an instant counter QR code and zero-download live spooler
            </p>
          </div>

            <form onSubmit={handleRegister} className="bg-white rounded-2xl border border-zinc-200/80 p-6 space-y-3.5 shadow-sm">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Quick Google One-Click Registration */}
              <div className="space-y-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleGoogleRegister}
                  disabled={isGoogleLoading || isLoading}
                  className="w-full py-2.5 px-4 rounded-xl border border-zinc-200/90 bg-white hover:bg-zinc-50 text-zinc-800 text-xs font-semibold flex items-center justify-center gap-2.5 transition-all shadow-xs active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>{isGoogleLoading ? 'Connecting with Google...' : 'Sign up with Google (Instant Setup)'}</span>
                </button>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-zinc-200 w-full" />
                  <span className="bg-white px-3 text-[10px] text-zinc-400 uppercase font-semibold tracking-wider">
                    or fill shop details
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-700">Shop / Center Name</label>
                <input
                  type="text"
                  name="shopName"
                  required
                  value={formData.shopName}
                  onChange={handleChange}
                  placeholder="e.g. Metro Xerox & Multi-Print"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-700">Owner Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="owner@shop.com"
                    className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-700">Mobile Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 00000"
                    className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Min 8 characters"
                    className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 pr-10 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 p-1 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-white transition-all disabled:opacity-50 shadow-2xs"
                >
                  {isLoading ? 'Setting up shop & counter QR...' : 'Create Shop Account'}
                </button>
              </div>
            </form>

          <p className="text-center text-xs text-zinc-400">
            Already registered?{' '}
            <Link href="/login" className="text-zinc-900 hover:underline font-medium">
              Sign In
            </Link>
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}
