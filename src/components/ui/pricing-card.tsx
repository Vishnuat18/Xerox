'use client';

import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { clsx } from 'clsx';

export interface PricingTier {
  id: string;
  name: string;
  price: {
    monthly: string | number;
    yearly: string | number;
  };
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  highlighted?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  paymentFrequency: string;
  onSelect?: (tier: PricingTier) => void;
  isCurrent?: boolean;
}

export function PricingCard({
  tier,
  paymentFrequency,
  onSelect,
  isCurrent = false,
}: PricingCardProps) {
  const isYearly = paymentFrequency === 'yearly';
  const priceValue = isYearly ? tier.price.yearly : tier.price.monthly;
  const isNumericPrice = typeof priceValue === 'number';

  return (
    <div
      className={clsx(
        'relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300',
        tier.popular
          ? 'bg-white border-2 border-emerald-500 shadow-lg shadow-emerald-500/5'
          : tier.highlighted
          ? 'bg-zinc-900 text-white border border-zinc-800 shadow-md'
          : 'bg-white border border-zinc-200/90 shadow-2xs hover:border-zinc-300'
      )}
    >
      {/* Popular or Recommended Pill */}
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
          <Sparkles className="h-3 w-3 fill-white" />
          <span>Most Popular</span>
        </div>
      )}

      {isCurrent && (
        <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-300 text-[10px] font-bold uppercase tracking-wider">
          Current Plan
        </div>
      )}

      <div>
        {/* Tier Header */}
        <div className="space-y-1">
          <h3
            className={clsx(
              'text-base font-bold',
              tier.highlighted ? 'text-white' : 'text-zinc-900'
            )}
          >
            {tier.name}
          </h3>
          <p
            className={clsx(
              'text-xs leading-relaxed min-h-[36px]',
              tier.highlighted ? 'text-zinc-400' : 'text-zinc-500'
            )}
          >
            {tier.description}
          </p>
        </div>

        {/* Pricing Display */}
        <div className="mt-4 mb-6 flex items-baseline gap-1">
          {isNumericPrice ? (
            <>
              <span
                className={clsx(
                  'text-3xl font-extrabold font-mono tracking-tight',
                  tier.highlighted ? 'text-white' : 'text-zinc-900'
                )}
              >
                ₹{priceValue}
              </span>
              <span
                className={clsx(
                  'text-xs font-medium',
                  tier.highlighted ? 'text-zinc-400' : 'text-zinc-500'
                )}
              >
                / {isYearly ? 'month, billed annually' : 'month'}
              </span>
            </>
          ) : (
            <span
              className={clsx(
                'text-3xl font-extrabold tracking-tight',
                tier.highlighted ? 'text-white' : 'text-zinc-900'
              )}
            >
              {priceValue}
            </span>
          )}
        </div>

        {/* Divider */}
        <div
          className={clsx(
            'h-px w-full my-5',
            tier.highlighted ? 'bg-zinc-800' : 'bg-zinc-100'
          )}
        />

        {/* Feature List */}
        <ul className="space-y-2.5 text-xs">
          {tier.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div
                className={clsx(
                  'h-4 w-4 rounded-full flex items-center justify-center shrink-0 mt-0.5',
                  tier.popular
                    ? 'bg-emerald-100 text-emerald-700'
                    : tier.highlighted
                    ? 'bg-zinc-800 text-emerald-400'
                    : 'bg-zinc-100 text-zinc-700'
                )}
              >
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </div>
              <span
                className={clsx(
                  'leading-tight',
                  tier.highlighted ? 'text-zinc-300' : 'text-zinc-600'
                )}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="pt-6 mt-6">
        <button
          type="button"
          onClick={() => onSelect && onSelect(tier)}
          disabled={isCurrent}
          className={clsx(
            'w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-200 shadow-2xs select-none disabled:opacity-60 disabled:cursor-not-allowed',
            isCurrent
              ? 'bg-zinc-100 text-zinc-400 border border-zinc-200'
              : tier.popular
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : tier.highlighted
              ? 'bg-white hover:bg-zinc-100 text-zinc-900'
              : 'bg-zinc-900 hover:bg-zinc-800 text-white'
          )}
        >
          {isCurrent ? 'Active Plan' : tier.cta}
        </button>
      </div>
    </div>
  );
}
