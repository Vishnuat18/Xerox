// SMART PRINT HUB - Subscription & 30-Day Free Trial Engine
// Daily renewal at 12:00 AM, 30-day trial calculation & plan upgrades

export interface ShopSubscriptionDetails {
  planId: 'STARTER' | 'BUSINESS' | 'ENTERPRISE' | 'FRANCHISE' | 'TRIAL';
  planName: string;
  monthlyPrice: number;
  yearlyPrice: number;
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
  let yearlyPrice = 80;
  let features = [
    '1 Connected Windows Printer',
    'Up to 1,000 monthly customer orders',
    '25MB file upload limit per order',
    'Standard Counter QR standee & web upload',
    'Standard A4 B&W and Color rate card',
    'Browser print dialog trigger',
    'Community guides & basic support',
  ];

  if (planIdRaw === 'BUSINESS' || rawStatus === 'TRIALING') {
    planName = rawStatus === 'TRIALING' ? 'Professional Hub (30-Day Free Access)' : 'Business Pro (₹249/mo)';
    monthlyPrice = 249;
    yearlyPrice = 199;
    features = [
      'Up to 4 Connected Printers simultaneously',
      'Up to 10,000 monthly customer orders',
      '75MB file upload limit per order',
      'Zero-download native silent spooling',
      'WhatsApp order ready pickup notifications',
      'Custom finishing rules (Spiral, Hardcover, Lamination)',
      'Automated bulk volume discounts',
      'Up to 2 Staff Operator PIN logins',
      'Priority WhatsApp & remote setup support',
    ];
  } else if (planIdRaw === 'ENTERPRISE') {
    planName = 'Enterprise Pro (₹499/mo)';
    monthlyPrice = 499;
    yearlyPrice = 399;
    features = [
      'Unlimited printers & background spooler agents',
      'Unlimited monthly customer orders',
      '250MB high-res file upload limit',
      'Multi-counter split queue (B&W vs Color auto-routing)',
      'Unlimited Staff & Operator PIN logins with audit trail',
      'Custom shop branding & custom logo on receipts',
      'Custom domain & subdomain mapping',
      'REST API & Spooler Webhooks',
      'Dedicated VIP Manager & 1-hour SLA',
    ];
  } else if (planIdRaw === 'FRANCHISE') {
    planName = 'Franchise Hub (₹999/mo)';
    monthlyPrice = 999;
    yearlyPrice = 799;
    features = [
      'Centralized multi-branch owner management',
      'Inter-branch order routing & load balancing',
      'Central master rate card sync across branches',
      'Printer fleet toner & drum telemetry alerts',
      'Consolidated multi-counter audit reports',
      'Dedicated Android Kiosk mode',
      '24/7 Phone SLA & on-site installation concierge',
    ];
  }

  return {
    planId: (planIdRaw as any) || 'BUSINESS',
    planName,
    monthlyPrice,
    yearlyPrice,
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
