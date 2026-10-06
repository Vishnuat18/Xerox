// SMART PRINT HUB - Database Seed Script for MySQL
const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('[Seed] Starting database seed on MySQL (xerox)...');

  // 1. Subscription Plans
  const plans = [
    {
      id: 'STARTER',
      name: 'Starter Hub',
      monthlyPrice: 499,
      yearlyPrice: 4999,
      maxPrinters: 1,
      maxMonthlyOrders: 500,
      featuresJson: JSON.stringify({
        customerQr: true,
        documentUpload: true,
        orderDashboard: true,
        printerIntegration: true,
        multiplePrinters: false,
        printerMonitoring: false,
        advancedAnalytics: false,
      }),
    },
    {
      id: 'PROFESSIONAL',
      name: 'Professional Hub',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      maxPrinters: 4,
      maxMonthlyOrders: 2500,
      featuresJson: JSON.stringify({
        customerQr: true,
        documentUpload: true,
        orderDashboard: true,
        printerIntegration: true,
        multiplePrinters: true,
        printerMonitoring: true,
        advancedAnalytics: true,
      }),
    },
    {
      id: 'BUSINESS',
      name: 'Business Enterprise',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      maxPrinters: 20,
      maxMonthlyOrders: 15000,
      featuresJson: JSON.stringify({
        customerQr: true,
        documentUpload: true,
        orderDashboard: true,
        printerIntegration: true,
        multiplePrinters: true,
        printerMonitoring: true,
        advancedAnalytics: true,
        multiBranch: true,
      }),
    },
  ];

  for (const plan of plans) {
    await prisma.subscriptionPlan.upsert({
      where: { id: plan.id },
      update: plan,
      create: plan,
    });
  }
  console.log('[Seed] Seeded 3 subscription plans.');

  // 2. Demo Shop
  const shop = await prisma.shop.upsert({
    where: { slug: 'metro-xerox' },
    update: {},
    create: {
      slug: 'metro-xerox',
      name: 'Metro Xerox & Multi-Print Hub',
      phone: '+91 98765 43210',
      email: 'contact@metroxerox.com',
      address: 'Shop #4, College Cross Road, Tech Junction',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
      gstNumber: '29ABCDE1234F1Z5',
      isActive: true,
    },
  });
  console.log(`[Seed] Seeded Shop: ${shop.name} (${shop.id})`);

  // 3. Demo Owner User
  const passwordHash = await bcrypt.hash('password123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'owner@metroprint.com' },
    update: { passwordHash, shopId: shop.id },
    create: {
      email: 'owner@metroprint.com',
      passwordHash,
      fullName: 'Rajesh Sharma',
      phone: '+91 98765 43210',
      role: 'SHOP_OWNER',
      isVerified: true,
      shopId: shop.id,
    },
  });
  console.log(`[Seed] Seeded Owner User: ${user.fullName} (${user.email})`);

  const vishnuPasswordHash = await bcrypt.hash('Semester7!', 10);
  const vishnuUser = await prisma.user.upsert({
    where: { email: 'vishnurajan24766@gmail.com' },
    update: { passwordHash: vishnuPasswordHash, shopId: shop.id },
    create: {
      email: 'vishnurajan24766@gmail.com',
      passwordHash: vishnuPasswordHash,
      fullName: 'Vishnu Rajan',
      phone: '+91 98765 43210',
      role: 'SHOP_OWNER',
      isVerified: true,
      shopId: shop.id,
    },
  });
  console.log(`[Seed] Seeded Owner User: ${vishnuUser.fullName} (${vishnuUser.email})`);

  // 4. Shop Subscription
  const trialEnd = new Date();
  trialEnd.setDate(trialEnd.getDate() + 30);

  await prisma.subscription.upsert({
    where: { shopId: shop.id },
    update: {},
    create: {
      shopId: shop.id,
      planId: 'PROFESSIONAL',
      status: 'TRIALING',
      trialStartAt: new Date(),
      trialEndAt: trialEnd,
    },
  });

  // 5. Default Pricing Rules
  const defaultRules = [
    { paperSize: 'A4', bwSinglePrice: 2.0, bwDoublePrice: 3.0, colorSinglePrice: 10.0, colorDoublePrice: 18.0 },
    { paperSize: 'A3', bwSinglePrice: 5.0, bwDoublePrice: 8.0, colorSinglePrice: 20.0, colorDoublePrice: 35.0 },
    { paperSize: 'LEGAL', bwSinglePrice: 3.0, bwDoublePrice: 4.5, colorSinglePrice: 12.0, colorDoublePrice: 22.0 },
  ];

  for (const rule of defaultRules) {
    await prisma.pricingRule.upsert({
      where: {
        shopId_paperSize: {
          shopId: shop.id,
          paperSize: rule.paperSize,
        },
      },
      update: rule,
      create: {
        shopId: shop.id,
        ...rule,
      },
    });
  }
  console.log('[Seed] Seeded default pricing rules.');

  // 6. Demo Printers
  await prisma.printer.upsert({
    where: { id: 'demo-printer-hp' },
    update: {},
    create: {
      id: 'demo-printer-hp',
      shopId: shop.id,
      windowsPrinterName: 'HP_LaserJet_Pro_4103fdw',
      displayName: 'Counter 1 - HP LaserJet Pro (B&W)',
      manufacturer: 'HP',
      model: 'LaserJet Pro 4103fdw',
      connectionType: 'WINDOWS_SPOOLER',
      supportsColor: false,
      supportsDuplex: true,
      supportedPaperSizes: 'A4,LEGAL',
      status: 'ONLINE',
      currentQueueCount: 0,
    },
  });

  await prisma.printer.upsert({
    where: { id: 'demo-printer-canon' },
    update: {},
    create: {
      id: 'demo-printer-canon',
      shopId: shop.id,
      windowsPrinterName: 'Canon_imageRUNNER_2520_UFRII',
      displayName: 'Main Machine - Canon iR 2520 (MFP)',
      manufacturer: 'Canon',
      model: 'imageRUNNER 2520',
      connectionType: 'NETWORK',
      ipAddress: '192.168.1.150',
      supportsColor: true,
      supportsDuplex: true,
      supportedPaperSizes: 'A4,A3,LEGAL',
      status: 'ONLINE',
      currentQueueCount: 0,
    },
  });
  console.log('[Seed] Seeded demo printers.');

  console.log('[Seed] Seed complete successfully on MySQL!');
}

main()
  .catch((e) => {
    console.error('[Seed] Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
