import React from 'react';
import { RateCardClient } from './rate-card-client';

export const metadata = {
  title: 'Rate Card & Pricing Matrix | Smart Print Hub',
  description: 'Configure Xerox printing rates, paper sizes, finishing options, and bulk discount tiers.',
};

export default function PricingPage() {
  return <RateCardClient />;
}
