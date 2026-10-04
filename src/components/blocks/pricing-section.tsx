'use client';

import * as React from 'react';
import { PricingCard, type PricingTier } from '@/components/ui/pricing-card';
import { Tab } from '@/components/ui/pricing-tab';

export const PAYMENT_FREQUENCIES = ['monthly', 'yearly'];

export const XEROX_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: {
      monthly: 100,
      yearly: 85,
    },
    description: 'Essential toolkit for small Xerox shops & stationery counters',
    features: [
      '1 Connected Windows Printer',
      'Unlimited zero-download customer orders',
      'Instant shop counter QR & URL',
      'Standard B&W and Color printing',
      'Cash & UPI rate collection',
      'Standard community support',
    ],
    cta: 'Select Starter',
  },
  {
    id: 'business',
    name: 'Business',
    price: {
      monthly: 249,
      yearly: 199,
    },
    description: 'High performance for busy Xerox shops & university print hubs',
    features: [
      'Up to 4 Connected Printers simultaneously',
      'Zero-download native silent spooling',
      'WhatsApp order ready notifications',
      'Custom finishing rules (Spiral, Hardcover)',
      'Automated dynamic bulk volume discounts',
      'Priority remote spooler support',
    ],
    cta: 'Select Business',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 499,
      yearly: 399,
    },
    description: 'Full featured powerhouse for multi-counter high-volume print centers',
    features: [
      'Unlimited printers & background spool agents',
      'Multi-operator counter logins & staff roles',
      'Custom Xerox shop branding & custom domain',
      'Live queue split across B&W and color machines',
      'API & Remote Spooler SDK integration',
      'Dedicated support & onboarding concierge',
    ],
    cta: 'Select Enterprise',
    highlighted: true,
  },
];

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  tiers?: PricingTier[];
  frequencies?: string[];
  onSelectTier?: (tier: PricingTier, frequency: string) => void;
  currentPlanId?: string;
}

export function PricingSection({
  title = 'Transparent Plans for Xerox Shops',
  subtitle = 'Start with a 30-day free trial. Pick the plan that fits your counter volume.',
  tiers = XEROX_TIERS,
  frequencies = PAYMENT_FREQUENCIES,
  onSelectTier,
  currentPlanId,
}: PricingSectionProps) {
  const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0]);

  return (
    <section className="flex flex-col items-center gap-10 py-10 w-full">
      <div className="space-y-6 text-center max-w-2xl mx-auto px-4">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            {title}
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Frequency Switcher */}
        <div className="mx-auto flex w-fit rounded-full bg-zinc-100 p-1 border border-zinc-200/80 shadow-2xs">
          {frequencies.map((freq) => (
            <Tab
              key={freq}
              text={freq}
              selected={selectedFrequency === freq}
              setSelected={setSelectedFrequency}
              discount={freq === 'yearly'}
            />
          ))}
        </div>
      </div>

      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {tiers.map((tier) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            paymentFrequency={selectedFrequency}
            isCurrent={currentPlanId?.toLowerCase() === tier.id.toLowerCase()}
            onSelect={(selected) => onSelectTier && onSelectTier(selected, selectedFrequency)}
          />
        ))}
      </div>
    </section>
  );
}

export function PricingSectionDemo() {
  return (
    <div className="relative flex justify-center items-center w-full mt-10">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      <PricingSection
        title="Simple, Honest Xerox Shop Pricing"
        subtitle="30-day free trial on registration. No credit card required. Upgrade anytime."
        frequencies={PAYMENT_FREQUENCIES}
        tiers={XEROX_TIERS}
      />
    </div>
  );
}
