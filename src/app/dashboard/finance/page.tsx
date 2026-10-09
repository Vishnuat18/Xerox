import React from 'react';
import { FinanceClient } from './finance-client';

export const metadata = {
  title: 'Finance & Accounts | Smart Print Hub',
  description: 'Track shop cashflow, Cash vs UPI collections, Cost-Per-Page margins, Khata credit ledger, and daily settlements.',
};

export default function FinancePage() {
  return <FinanceClient />;
}
