// SMART PRINT HUB - Subscription & 30-Day Free Trial Engine
// Daily renewal at 12:00 AM, 30-day trial calculation & plan upgrades

export interface ShopSubscriptionDetails {
  planId: 'STARTER' | 'BUSINESS' | 'ENTERPRISE' | 'TRIAL';
  planName: string;
  monthlyPrice: number;
  status: 'TRIALING' | 'ACTIVE' | 'PAST_DUE' | 'EXPIRED';
  trialStartAt: Date;
  trialEndAt: Date;
  daysRemaining: number;
  daysElapsed: number;
  isExpired: boolean;
  nextRenewalAt: Date;
  features: string[];
}

export function calculateSubscriptionDetails(subscription?: {
  planId?: string;
  status?: string;
  trialStartAt?: Date | string;
  trialEndAt?: Date | string;
  currentPeriodEnd?: Date | string | null;
}): ShopSubscriptionDetails {
  const now = new Date();
  const trialStart = subscription?.trialStartAt ? new Date(subscription.trialStartAt) : new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  const trialEnd = subscription?.trialEndAt ? new Date(subscription.trialEndAt) : new Date(trialStart.getTime() + 30 * 24 * 60 * 60 * 1000);

  // Calculate next midnight 12:00 AM
  const nextRenewal = new Date(now);
  nextRenewal.setHours(24, 0, 0, 0); // Next 12:00:00 AM

  const msElapsed = Math.max(0, now.getTime() - trialStart.getTime());
  const daysElapsed = Math.floor(msElapsed / (24 * 60 * 60 * 1000));
  const totalTrialDays = 30;
  const daysRemaining = Math.max(0, totalTrialDays - daysElapsed);

  const rawStatus = subscription?.status || 'TRIALING';
  const planIdRaw = (subscription?.planId || 'BUSINESS').toUpperCase();

  const isPaidActive = rawStatus === 'ACTIVE';
  const isExpired = !isPaidActive && (daysRemaining <= 0 || now > trialEnd);

  let planName = 'Starter Hub (₹100/mo)';
  let monthlyPrice = 100;
  let features = ['1 Connected Printer', 'Standard Queue', 'Basic Support'];

  if (planIdRaw === 'BUSINESS' || rawStatus === 'TRIALING') {
    planName = rawStatus === 'TRIALING' ? 'Professional Hub (30-Day Free Access)' : 'Business Pro (₹249/mo)';
    monthlyPrice = 249;
    features = ['Up to 4 Connected Printers', 'Zero-Download Live Spooling', 'WhatsApp Ready', 'Custom Rates & Finishing'];
  } else if (planIdRaw === 'ENTERPRISE') {
    planName = 'Enterprise Pro (₹499/mo)';
    monthlyPrice = 499;
    features = ['Unlimited Printers', 'Multi-Counter Logins', 'Custom Domain', 'VIP 24/7 Setup'];
  }

  return {
    planId: (planIdRaw as any) || 'BUSINESS',
    planName,
    monthlyPrice,
    status: isPaidActive ? 'ACTIVE' : isExpired ? 'EXPIRED' : 'TRIALING',
    trialStartAt: trialStart,
    trialEndAt: trialEnd,
    daysRemaining,
    daysElapsed: Math.min(daysElapsed, 30),
    isExpired,
    nextRenewalAt: nextRenewal,
    features,
  };
}
