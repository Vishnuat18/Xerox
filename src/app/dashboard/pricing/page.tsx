import React, { Suspense } from 'react';
import { PricingHubClient } from './pricing-hub-client';

export const metadata = {
  title: 'Subscription Plans & Rate Card | Smart Print Hub',
  description: 'Manage your SaaS plan (Starter ₹100, Business ₹249, Enterprise ₹499), 30-day trial status, and customer print rates.',
};

export default function PricingPage() {
  return (
    <Suspense fallback={
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin h-6 w-6 border-2 border-zinc-900 border-t-transparent rounded-full" />
      </div>
    }>
      <PricingHubClient />
    </Suspense>
  );
}
