'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Printer, AlertCircle } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('owner@metroprint.com');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error?.message || 'Login failed. Please check credentials.');
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err: unknown) {
      setErrorMessage((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50/50">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-6">
          
          <div className="text-center space-y-1">
            <div className="h-8 w-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center mx-auto mb-3">
              <Printer className="h-4 w-4" />
            </div>
            <h1 className="text-lg font-semibold text-zinc-900">
              Sign in to your shop
            </h1>
            <p className="text-xs text-zinc-400">
              Manage live print orders and counter operations
            </p>
          </div>

          <form onSubmit={handleLogin} className="bg-white rounded-2xl border border-zinc-200/80 p-6 space-y-4 shadow-sm">
            {errorMessage && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="h-3.5 w-3.5 shrink-0 text-rose-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-medium text-zinc-700">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-zinc-700">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-white transition-all disabled:opacity-50"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>

            <div className="pt-2 text-center text-xs text-zinc-400 border-t border-zinc-100">
              Demo credentials prefilled for testing.
            </div>
          </form>

          <p className="text-center text-xs text-zinc-400">
            Need an account?{' '}
            <Link href="/register" className="text-zinc-900 hover:underline font-medium">
              Register Shop
            </Link>
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}
