// SMART PRINT HUB - Standalone In-Memory Database Engine
// Designed for instant Vercel cloud hosting and demo testing with zero external database dependencies.
import bcrypt from 'bcryptjs';

// Pre-computed hash for 'password123'
const DEMO_PASSWORD_HASH = bcrypt.hashSync('password123', 10);

export interface MockShop {
  id: string;
  slug: string;
  name: string;
  phone: string;
  email: string;
  address: string | null;
  city: string | null;
  state: string | null;
  pincode: string | null;
  gstNumber: string | null;
  qrCodeUrl: string | null;
  upiId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MockUser {
  id: string;
  shopId: string | null;
  email: string;
  passwordHash: string;
  fullName: string;
  phone: string | null;
  role: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MockCustomer {
  id: string;
  shopId: string;
  phone: string;
  fullName: string;
  email: string | null;
  createdAt: Date;
}

export interface MockPrinter {
  id: string;
  shopId: string;
  agentId: string | null;
  windowsPrinterName: string;
  displayName: string;
  manufacturer: string | null;
  model: string | null;
  connectionType: string;
  ipAddress: string | null;
  supportsColor: boolean;
  supportsDuplex: boolean;
  supportedPaperSizes: string;
  status: string;
  isActive: boolean;
  currentQueueCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MockPrintAgent {
  id: string;
  shopId: string;
  agentName: string;
  machineHostname: string | null;
  osVersion: string | null;
  authTokenHash: string;
  isConnected: boolean;
  lastHeartbeatAt: Date | null;
  ipAddress?: string | null;
  createdAt: Date;
}

export interface MockPricingRule {
  id: string;
  shopId: string;
  paperSize: string;
  bwSinglePrice: number;
  bwDoublePrice: number;
  colorSinglePrice: number;
  colorDoublePrice: number;
  isActive: boolean;
  createdAt: Date;
}

export interface MockFinishingRates {
  stapleCorner: number;
  stapleSide: number;
  bindingSpiral: number;
  bindingHardcover: number;
  bindingProject: number;
  laminationGlossy: number;
  laminationMatte: number;
}

export interface MockBulkDiscountTier {
  minPages: number;
  discountPercent: number;
}

export interface MockShopPricingConfig {
  shopId: string;
  volumeDiscountsEnabled: boolean;
  finishing: MockFinishingRates;
  bulkDiscounts: MockBulkDiscountTier[];
}

export interface MockDocumentSpec {
  copies: number;
  color: 'BW' | 'COLOR';
  duplex: 'SIMPLEX' | 'DUPLEX_LONG_EDGE' | 'DUPLEX_SHORT_EDGE';
  paperSize: string;
  orientation: 'PORTRAIT' | 'LANDSCAPE' | 'AUTO';
  pageRange: string;
  pagesPerSheet: number;
  collate: boolean;
  stapling?: string;
  binding?: string;
  lamination?: string;
  finishingNotes?: string;
}

export interface MockOrderDocument {
  id: string;
  orderId: string;
  originalFilename: string;
  storageKey: string;
  fileSizeBytes: number;
  mimeType: string;
  sha256Checksum: string;
  detectedPageCount: number;
  specs: MockDocumentSpec;
}

export interface MockOrder {
  id: string;
  orderNumber: string;
  shopId: string;
  customerId: string;
  status: string; // SUBMITTED, RECEIVED, REVIEWING, QUEUED, PRINTING, READY, COMPLETED, CANCELLED
  paymentStatus?: 'PENDING' | 'PAID' | 'CASH_AT_COUNTER';
  paymentMethod?: 'UPI' | 'CASH' | 'DIGITAL_PAY' | null;
  paymentReference?: string | null;
  paidAt?: Date | null;
  totalDocuments: number;
  totalPages: number;
  estimatedAmount: number;
  finalAmount: number | null;
  customerNotes: string | null;
  rejectionReason: string | null;
  documents?: MockOrderDocument[];
  customer?: MockCustomer;
  createdAt: Date;
  updatedAt: Date;
}

// Initial In-Memory State
const initialShop: MockShop = {
  id: 'shop-metro-001',
  slug: 'metro-xerox',
  name: 'Metro Xerox & Multi-Print Hub',
  phone: '+91 98765 43210',
  email: 'owner@metroprint.com',
  address: 'Shop #4, College Cross Road, Tech Junction',
  city: 'Bangalore',
  state: 'Karnataka',
  pincode: '560001',
  gstNumber: '29ABCDE1234F1Z5',
  qrCodeUrl: null,
  upiId: 'metroprint@upi',
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const initialOwner: MockUser = {
  id: 'user-owner-001',
  shopId: 'shop-metro-001',
  email: 'owner@metroprint.com',
  passwordHash: DEMO_PASSWORD_HASH,
  fullName: 'Rajesh Sharma',
  phone: '+91 98765 43210',
  role: 'SHOP_OWNER',
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const initialCustomer: MockCustomer = {
  id: 'cust-rahul-001',
  shopId: 'shop-metro-001',
  phone: '9876543210',
  fullName: 'Rahul Sharma',
  email: 'rahul.customer@example.com',
  createdAt: new Date(),
};

const initialPrinters: MockPrinter[] = [
  {
    id: 'printer-hp-001',
    shopId: 'shop-metro-001',
    agentId: 'agent-pc-001',
    windowsPrinterName: 'HP_LaserJet_Pro_4103fdw',
    displayName: 'HP LaserJet Pro (B&W)',
    manufacturer: 'HP',
    model: 'LaserJet Pro 4103fdw',
    connectionType: 'WINDOWS_SPOOLER',
    ipAddress: null,
    supportsColor: false,
    supportsDuplex: true,
    supportedPaperSizes: 'A4,LEGAL',
    status: 'ONLINE',
    isActive: true,
    currentQueueCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'printer-canon-002',
    shopId: 'shop-metro-001',
    agentId: 'agent-pc-001',
    windowsPrinterName: 'Canon_imageRUNNER_2520_UFRII',
    displayName: 'Canon iR 2520 (Color MFP)',
    manufacturer: 'Canon',
    model: 'imageRUNNER 2520',
    connectionType: 'NETWORK',
    ipAddress: '192.168.1.150',
    supportsColor: true,
    supportsDuplex: true,
    supportedPaperSizes: 'A4,A3,LEGAL',
    status: 'ONLINE',
    isActive: true,
    currentQueueCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'printer-epson-003',
    shopId: 'shop-metro-001',
    agentId: 'agent-pc-001',
    windowsPrinterName: 'EPSON_L8050_Series',
    displayName: 'Epson EcoTank L8050 (Photo Color)',
    manufacturer: 'Epson',
    model: 'EcoTank L8050',
    connectionType: 'USB',
    ipAddress: null,
    supportsColor: true,
    supportsDuplex: false,
    supportedPaperSizes: 'A4,A5,A6',
    status: 'ONLINE',
    isActive: true,
    currentQueueCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const initialPrintAgent: MockPrintAgent = {
  id: 'agent-pc-001',
  shopId: 'shop-metro-001',
  agentName: 'Counter-PC-Win11',
  machineHostname: 'XEROX-DESKTOP-01',
  osVersion: 'Microsoft Windows 11 Pro 64-bit (Build 22631)',
  authTokenHash: 'sph-agent-tok-9842a1f',
  isConnected: true,
  lastHeartbeatAt: new Date(),
  ipAddress: '192.168.1.100',
  createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
};

const initialPricingRules: MockPricingRule[] = [
  {
    id: 'rule-a4-001',
    shopId: 'shop-metro-001',
    paperSize: 'A4',
    bwSinglePrice: 2.0,
    bwDoublePrice: 3.0,
    colorSinglePrice: 10.0,
    colorDoublePrice: 18.0,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: 'rule-a3-002',
    shopId: 'shop-metro-001',
    paperSize: 'A3',
    bwSinglePrice: 5.0,
    bwDoublePrice: 8.0,
    colorSinglePrice: 20.0,
    colorDoublePrice: 35.0,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: 'rule-a5-003',
    shopId: 'shop-metro-001',
    paperSize: 'A5',
    bwSinglePrice: 1.5,
    bwDoublePrice: 2.5,
    colorSinglePrice: 8.0,
    colorDoublePrice: 14.0,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: 'rule-a6-004',
    shopId: 'shop-metro-001',
    paperSize: 'A6',
    bwSinglePrice: 1.0,
    bwDoublePrice: 1.8,
    colorSinglePrice: 5.0,
    colorDoublePrice: 9.0,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: 'rule-legal-005',
    shopId: 'shop-metro-001',
    paperSize: 'LEGAL',
    bwSinglePrice: 3.0,
    bwDoublePrice: 4.5,
    colorSinglePrice: 12.0,
    colorDoublePrice: 20.0,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: 'rule-a2-006',
    shopId: 'shop-metro-001',
    paperSize: 'A2',
    bwSinglePrice: 15.0,
    bwDoublePrice: 25.0,
    colorSinglePrice: 40.0,
    colorDoublePrice: 70.0,
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: 'rule-a1-007',
    shopId: 'shop-metro-001',
    paperSize: 'A1',
    bwSinglePrice: 30.0,
    bwDoublePrice: 50.0,
    colorSinglePrice: 80.0,
    colorDoublePrice: 140.0,
    isActive: true,
    createdAt: new Date(),
  },
];

const initialOrders: MockOrder[] = [
  {
    id: 'ord-demo-001',
    orderNumber: 'SPH-20261002-01',
    shopId: 'shop-metro-001',
    customerId: 'cust-rahul-001',
    status: 'SUBMITTED',
    paymentStatus: 'PENDING',
    paymentMethod: null,
    paymentReference: null,
    paidAt: null,
    totalDocuments: 1,
    totalPages: 12,
    estimatedAmount: 36.0,
    finalAmount: null,
    customerNotes: 'Please staple on top-left corner.',
    rejectionReason: null,
    documents: [
      {
        id: 'doc-demo-001',
        orderId: 'ord-demo-001',
        originalFilename: 'Project_Report_Final.pdf',
        storageKey: 'shops/shop-metro-001/uploads/report.pdf',
        fileSizeBytes: 2450000,
        mimeType: 'application/pdf',
        sha256Checksum: '8f4a1...demo',
        detectedPageCount: 12,
        specs: {
          copies: 2,
          color: 'BW',
          duplex: 'DUPLEX_LONG_EDGE',
          paperSize: 'A4',
          orientation: 'PORTRAIT',
          pageRange: 'ALL',
          pagesPerSheet: 1,
          collate: true,
          stapling: 'CORNER',
          finishingNotes: 'Corner staple',
        },
      },
    ],
    createdAt: new Date(Date.now() - 15 * 60 * 1000), // 15 mins ago
    updatedAt: new Date(Date.now() - 15 * 60 * 1000),
  },
  {
    id: 'ord-demo-002',
    orderNumber: 'SPH-20261002-00',
    shopId: 'shop-metro-001',
    customerId: 'cust-rahul-001',
    status: 'COMPLETED',
    paymentStatus: 'PAID',
    paymentMethod: 'UPI',
    paymentReference: 'UPI-20261002-9988',
    paidAt: new Date(Date.now() - 55 * 60 * 1000),
    totalDocuments: 1,
    totalPages: 4,
    estimatedAmount: 8.0,
    finalAmount: 8.0,
    customerNotes: null,
    rejectionReason: null,
    documents: [
      {
        id: 'doc-demo-002',
        orderId: 'ord-demo-002',
        originalFilename: 'Aadhaar_Card_Copy.pdf',
        storageKey: 'shops/shop-metro-001/uploads/aadhaar.pdf',
        fileSizeBytes: 890000,
        mimeType: 'application/pdf',
        sha256Checksum: '3a1c9...demo',
        detectedPageCount: 4,
        specs: {
          copies: 1,
          color: 'BW',
          duplex: 'SIMPLEX',
          paperSize: 'A4',
          orientation: 'PORTRAIT',
          pageRange: 'ALL',
          pagesPerSheet: 1,
          collate: true,
        },
      },
    ],
    createdAt: new Date(Date.now() - 90 * 60 * 1000), // 1.5 hrs ago
    updatedAt: new Date(Date.now() - 60 * 60 * 1000),
  },
];

class MockDatabase {
  private shops: Map<string, MockShop> = new Map([[initialShop.id, initialShop]]);
  private users: Map<string, MockUser> = new Map([[initialOwner.id, initialOwner]]);
  private customers: Map<string, MockCustomer> = new Map([[initialCustomer.id, initialCustomer]]);
  private printers: Map<string, MockPrinter> = new Map(initialPrinters.map((p) => [p.id, p]));
  private pricingRules: Map<string, MockPricingRule> = new Map(initialPricingRules.map((r) => [r.id, r]));
  private orders: Map<string, MockOrder> = new Map(initialOrders.map((o) => [o.id, o]));
  private auditLogs: Array<{ id: string; action: string; createdAt: Date }> = [];
  private printAgents: Map<string, MockPrintAgent> = new Map([[initialPrintAgent.id, initialPrintAgent]]);
  private pricingConfigs: Map<string, MockShopPricingConfig> = new Map([
    [
      initialShop.id,
      {
        shopId: initialShop.id,
        volumeDiscountsEnabled: true,
        finishing: {
          stapleCorner: 2.0,
          stapleSide: 5.0,
          bindingSpiral: 35.0,
          bindingHardcover: 65.0,
          bindingProject: 150.0,
          laminationGlossy: 15.0,
          laminationMatte: 25.0,
        },
        bulkDiscounts: [
          { minPages: 50, discountPercent: 10 },
          { minPages: 150, discountPercent: 15 },
          { minPages: 500, discountPercent: 25 },
        ],
      },
    ],
  ]);

  // Helper for deep-cloned shop with relations
  private attachShopRelations(shop: MockShop, include?: any) {
    if (!include) return { ...shop };
    const result: any = { ...shop };

    if (include.pricingRules) {
      result.pricingRules = Array.from(this.pricingRules.values()).filter((r) => r.shopId === shop.id);
    }
    if (include.printers) {
      result.printers = Array.from(this.printers.values()).filter((p) => p.shopId === shop.id);
    }
    if (include.subscription) {
      const sub = this.subscriptions.get(shop.id) || {
        id: `sub-${shop.id}`,
        shopId: shop.id,
        planId: 'BUSINESS',
        status: 'TRIALING',
        trialStartAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        trialEndAt: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
      };
      result.subscription = {
        ...sub,
        plan: {
          id: sub.planId,
          name: sub.planId === 'STARTER' ? 'Starter Hub' : sub.planId === 'ENTERPRISE' ? 'Enterprise Hub' : sub.planId === 'FRANCHISE' ? 'Franchise Hub' : 'Business Pro',
          monthlyPrice: sub.planId === 'STARTER' ? 100 : sub.planId === 'ENTERPRISE' ? 499 : sub.planId === 'FRANCHISE' ? 999 : 249,
          yearlyPrice: sub.planId === 'STARTER' ? 80 : sub.planId === 'ENTERPRISE' ? 399 : sub.planId === 'FRANCHISE' ? 799 : 199,
          maxPrinters: sub.planId === 'STARTER' ? 1 : sub.planId === 'ENTERPRISE' ? 999 : sub.planId === 'FRANCHISE' ? 9999 : 4,
          maxMonthlyOrders: sub.planId === 'STARTER' ? 1500 : sub.planId === 'ENTERPRISE' ? 99999 : sub.planId === 'FRANCHISE' ? 999999 : 15000,
        },
      };
    }
    if (include.orders) {
      result.orders = Array.from(this.orders.values())
        .filter((o) => o.shopId === shop.id)
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, include.orders.take || 20)
        .map((o) => ({
          ...o,
          customer: this.customers.get(o.customerId) || initialCustomer,
          documents: o.documents || [],
        }));
    }
    if (include._count) {
      result._count = {
        printers: Array.from(this.printers.values()).filter((p) => p.shopId === shop.id).length,
        orders: Array.from(this.orders.values()).filter((o) => o.shopId === shop.id).length,
      };
    }
    return result;
  }

  // --- SHOP REPOSITORY ---
  public shop = {
    findUnique: async (args: { where: { id?: string; slug?: string }; include?: any }) => {
      let found: MockShop | undefined;
      if (args.where.id) found = this.shops.get(args.where.id);
      else if (args.where.slug) {
        found = Array.from(this.shops.values()).find((s) => s.slug === args.where.slug);
      }
      if (!found) return null;
      return this.attachShopRelations(found, args.include);
    },
    findFirst: async (args?: { where?: Partial<MockShop>; include?: any }) => {
      const all = Array.from(this.shops.values());
      if (!args?.where) return all[0] ? this.attachShopRelations(all[0], args?.include) : null;
      const found = all.find((s) => {
        return Object.entries(args.where!).every(([k, v]) => (s as any)[k] === v);
      });
      return found ? this.attachShopRelations(found, args?.include) : null;
    },
    findMany: async () => Array.from(this.shops.values()),
    count: async () => this.shops.size,
    create: async (args: { data: Partial<MockShop> }) => {
      const id = args.data.id || `shop-${Date.now()}`;
      const newShop: MockShop = {
        id,
        slug: args.data.slug || `shop-${Date.now()}`,
        name: args.data.name || 'New Print Hub',
        phone: args.data.phone || '+91 99999 99999',
        email: args.data.email || 'info@printhub.com',
        address: args.data.address || null,
        city: args.data.city || null,
        state: args.data.state || null,
        pincode: args.data.pincode || null,
        gstNumber: args.data.gstNumber || null,
        qrCodeUrl: null,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.shops.set(id, newShop);
      return newShop;
    },
    update: async (args: { where: { id: string }; data: Partial<MockShop> }) => {
      const existing = this.shops.get(args.where.id) || initialShop;
      const updated: MockShop = {
        ...existing,
        ...args.data,
        updatedAt: new Date(),
      };
      this.shops.set(updated.id, updated);
      return updated;
    },
  };

  // --- USER REPOSITORY ---
  public user = {
    findUnique: async (args: { where: { id?: string; email?: string }; include?: any }) => {
      let found: MockUser | undefined;
      if (args.where.id) found = this.users.get(args.where.id);
      else if (args.where.email) {
        found = Array.from(this.users.values()).find((u) => u.email.toLowerCase() === args.where.email?.toLowerCase());
      }
      if (!found) return null;
      const result: any = { ...found };
      if (args.include?.shop) {
        result.shop = found.shopId ? this.shops.get(found.shopId) || initialShop : null;
      }
      return result;
    },
    create: async (args: { data: Partial<MockUser> }) => {
      const id = args.data.id || `user-${Date.now()}`;
      const newUser: MockUser = {
        id,
        shopId: args.data.shopId || null,
        email: (args.data.email || '').toLowerCase(),
        passwordHash: args.data.passwordHash || DEMO_PASSWORD_HASH,
        fullName: args.data.fullName || 'Shop Staff',
        phone: args.data.phone || null,
        role: args.data.role || 'SHOP_OWNER',
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.users.set(id, newUser);
      return newUser;
    },
    count: async () => this.users.size,
  };

  // --- CUSTOMER REPOSITORY (CROSS-SHOP IDENTITY) ---
  public customer = {
    findFirst: async (args: { where: { shopId?: string; phone?: string; id?: string } }) => {
      const all = Array.from(this.customers.values());
      if (args.where.phone) {
        const clean = args.where.phone.replace(/[^0-9]/g, '');
        return all.find((c) => c.phone.replace(/[^0-9]/g, '') === clean) || null;
      }
      if (args.where.id) {
        return all.find((c) => c.id === args.where.id) || null;
      }
      if (args.where.shopId) {
        return all.find((c) => c.shopId === args.where.shopId) || null;
      }
      return all[0] || null;
    },
    findUnique: async (args: { where: { id?: string; phone?: string } }) => {
      if (args.where.id) return this.customers.get(args.where.id) || null;
      if (args.where.phone) {
        const clean = args.where.phone.replace(/[^0-9]/g, '');
        return Array.from(this.customers.values()).find((c) => c.phone.replace(/[^0-9]/g, '') === clean) || null;
      }
      return null;
    },
    findMany: async (args?: { where?: { phone?: string; shopId?: string } }) => {
      let list = Array.from(this.customers.values());
      if (args?.where?.phone) {
        const clean = args.where.phone.replace(/[^0-9]/g, '');
        list = list.filter((c) => c.phone.replace(/[^0-9]/g, '') === clean);
      }
      if (args?.where?.shopId) {
        list = list.filter((c) => c.shopId === args.where!.shopId);
      }
      return list;
    },
    upsert: async (args: { where: { id?: string; phone?: string }; update: Partial<MockCustomer>; create: Partial<MockCustomer> }) => {
      const cleanPhone = (args.create.phone || args.update.phone || '').replace(/[^0-9]/g, '');
      const existing = Array.from(this.customers.values()).find(
        (c) => c.phone.replace(/[^0-9]/g, '') === cleanPhone
      );
      if (existing) {
        const updated = { 
          ...existing, 
          ...args.update, 
          fullName: args.update.fullName || args.create.fullName || existing.fullName,
          phone: cleanPhone || existing.phone,
        };
        this.customers.set(existing.id, updated);
        return updated;
      }
      const id = args.create.id || `cust-${Date.now()}`;
      const newCust: MockCustomer = {
        id,
        shopId: args.create.shopId || 'shop-metro-001',
        phone: cleanPhone || '9876543210',
        fullName: args.create.fullName || 'Rahul Sharma',
        email: args.create.email || null,
        createdAt: new Date(),
      };
      this.customers.set(id, newCust);
      return newCust;
    },
    count: async () => this.customers.size,
  };

  // --- PRINTER REPOSITORY ---
  public printer = {
    findMany: async (args?: { where?: Partial<MockPrinter> }) => {
      let list = Array.from(this.printers.values());
      if (args?.where?.shopId) list = list.filter((p) => p.shopId === args.where!.shopId);
      if (args?.where?.isActive !== undefined) list = list.filter((p) => p.isActive === args.where!.isActive);
      return list;
    },
    findUnique: async (args: { where: { id: string } }) => {
      return this.printers.get(args.where.id) || null;
    },
    create: async (args: { data: Partial<MockPrinter> }) => {
      const id = args.data.id || `printer-${Date.now()}`;
      const newPrinter: MockPrinter = {
        id,
        shopId: args.data.shopId || 'shop-metro-001',
        agentId: args.data.agentId || 'agent-pc-001',
        windowsPrinterName: args.data.windowsPrinterName || 'Generic_Printer',
        displayName: args.data.displayName || 'Generic Printer',
        manufacturer: args.data.manufacturer || 'Generic',
        model: args.data.model || null,
        connectionType: args.data.connectionType || 'WINDOWS_SPOOLER',
        ipAddress: args.data.ipAddress || null,
        supportsColor: args.data.supportsColor ?? false,
        supportsDuplex: args.data.supportsDuplex ?? false,
        supportedPaperSizes: args.data.supportedPaperSizes || 'A4',
        status: args.data.status || 'ONLINE',
        isActive: args.data.isActive ?? true,
        currentQueueCount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.printers.set(id, newPrinter);
      return newPrinter;
    },
    update: async (args: { where: { id: string }; data: Partial<MockPrinter> }) => {
      const existing = this.printers.get(args.where.id);
      if (!existing) throw new Error('Printer not found');
      const updated: MockPrinter = { ...existing, ...args.data, updatedAt: new Date() };
      this.printers.set(args.where.id, updated);
      return updated;
    },
    delete: async (args: { where: { id: string } }) => {
      const existing = this.printers.get(args.where.id);
      this.printers.delete(args.where.id);
      return existing;
    },
    count: async () => this.printers.size,
  };

  // --- PRINT AGENTS REPOSITORY ---
  public printAgent = {
    findMany: async (args?: { where?: Partial<MockPrintAgent> }) => {
      let list = Array.from(this.printAgents.values());
      if (args?.where?.shopId) list = list.filter((a) => a.shopId === args.where!.shopId);
      return list;
    },
    findFirst: async (args?: { where?: Partial<MockPrintAgent> }) => {
      const list = Array.from(this.printAgents.values());
      if (!args?.where) return list[0] || null;
      return list.find((a) => Object.entries(args.where!).every(([k, v]) => (a as any)[k] === v)) || null;
    },
    findUnique: async (args: { where: { id: string } }) => {
      return this.printAgents.get(args.where.id) || null;
    },
    create: async (args: { data: Partial<MockPrintAgent> }) => {
      const id = args.data.id || `agent-${Date.now()}`;
      const newAgent: MockPrintAgent = {
        id,
        shopId: args.data.shopId || 'shop-metro-001',
        agentName: args.data.agentName || 'Windows-Print-Agent',
        machineHostname: args.data.machineHostname || 'WIN-PC',
        osVersion: args.data.osVersion || 'Windows 11',
        authTokenHash: args.data.authTokenHash || `sph-tok-${Date.now()}`,
        isConnected: args.data.isConnected ?? true,
        lastHeartbeatAt: new Date(),
        ipAddress: args.data.ipAddress || null,
        createdAt: new Date(),
      };
      this.printAgents.set(id, newAgent);
      return newAgent;
    },
    update: async (args: { where: { id: string }; data: Partial<MockPrintAgent> }) => {
      const existing = this.printAgents.get(args.where.id);
      if (!existing) throw new Error('Agent not found');
      const updated: MockPrintAgent = { ...existing, ...args.data };
      this.printAgents.set(args.where.id, updated);
      return updated;
    },
    count: async () => this.printAgents.size,
  };

  // --- PRICING RULES REPOSITORY ---
  public pricingRule = {
    findMany: async (args?: { where?: { shopId?: string; isActive?: boolean } }) => {
      let rules = Array.from(this.pricingRules.values());
      if (args?.where?.shopId) {
        rules = rules.filter((r) => r.shopId === args.where!.shopId);
      }
      if (args?.where?.isActive !== undefined) {
        rules = rules.filter((r) => r.isActive === args.where!.isActive);
      }
      return rules;
    },
    findUnique: async (args: { where: { id?: string; shopId_paperSize?: { shopId: string; paperSize: string } } }) => {
      if (args.where.id) return this.pricingRules.get(args.where.id) || null;
      if (args.where.shopId_paperSize) {
        const { shopId, paperSize } = args.where.shopId_paperSize;
        return Array.from(this.pricingRules.values()).find(
          (r) => r.shopId === shopId && r.paperSize.toUpperCase() === paperSize.toUpperCase()
        ) || null;
      }
      return null;
    },
    upsert: async (args: {
      where: { id?: string; shopId_paperSize?: { shopId: string; paperSize: string } };
      update: Partial<MockPricingRule>;
      create: Partial<MockPricingRule>;
    }) => {
      const shopId = args.where.shopId_paperSize?.shopId || args.create.shopId || 'shop-metro-001';
      const paperSize = (args.where.shopId_paperSize?.paperSize || args.create.paperSize || 'A4').toUpperCase();

      const existing = Array.from(this.pricingRules.values()).find(
        (r) => r.shopId === shopId && r.paperSize.toUpperCase() === paperSize
      );

      if (existing) {
        const updated: MockPricingRule = {
          ...existing,
          ...args.update,
        };
        this.pricingRules.set(existing.id, updated);
        return updated;
      }

      const id = `rule-${paperSize.toLowerCase()}-${Date.now()}`;
      const newRule: MockPricingRule = {
        id,
        shopId,
        paperSize,
        bwSinglePrice: args.create.bwSinglePrice ?? 2.0,
        bwDoublePrice: args.create.bwDoublePrice ?? 3.0,
        colorSinglePrice: args.create.colorSinglePrice ?? 10.0,
        colorDoublePrice: args.create.colorDoublePrice ?? 18.0,
        isActive: args.create.isActive ?? true,
        createdAt: new Date(),
      };
      this.pricingRules.set(id, newRule);
      return newRule;
    },
    update: async (args: { where: { id: string }; data: Partial<MockPricingRule> }) => {
      const existing = this.pricingRules.get(args.where.id);
      if (!existing) throw new Error('Pricing rule not found');
      const updated: MockPricingRule = { ...existing, ...args.data };
      this.pricingRules.set(args.where.id, updated);
      return updated;
    },
    create: async (args: { data: Partial<MockPricingRule> }) => {
      const id = args.data.id || `rule-${Date.now()}`;
      const newRule: MockPricingRule = {
        id,
        shopId: args.data.shopId || 'shop-metro-001',
        paperSize: (args.data.paperSize || 'A4').toUpperCase(),
        bwSinglePrice: args.data.bwSinglePrice ?? 2.0,
        bwDoublePrice: args.data.bwDoublePrice ?? 3.0,
        colorSinglePrice: args.data.colorSinglePrice ?? 10.0,
        colorDoublePrice: args.data.colorDoublePrice ?? 18.0,
        isActive: args.data.isActive ?? true,
        createdAt: new Date(),
      };
      this.pricingRules.set(id, newRule);
      return newRule;
    },
    delete: async (args: { where: { id: string } }) => {
      const existing = this.pricingRules.get(args.where.id);
      this.pricingRules.delete(args.where.id);
      return existing;
    },
  };

  // --- PRICING CONFIGS (Finishing & Bulk Discounts) ---
  public getPricingConfig = async (shopId: string): Promise<MockShopPricingConfig> => {
    const existing = this.pricingConfigs.get(shopId);
    if (existing) return existing;
    const defaultConfig: MockShopPricingConfig = {
      shopId,
      volumeDiscountsEnabled: true,
      finishing: {
        stapleCorner: 2.0,
        stapleSide: 5.0,
        bindingSpiral: 35.0,
        bindingHardcover: 65.0,
        bindingProject: 150.0,
        laminationGlossy: 15.0,
        laminationMatte: 25.0,
      },
      bulkDiscounts: [
        { minPages: 50, discountPercent: 10 },
        { minPages: 150, discountPercent: 15 },
        { minPages: 500, discountPercent: 25 },
      ],
    };
    this.pricingConfigs.set(shopId, defaultConfig);
    return defaultConfig;
  };

  public updatePricingConfig = async (
    shopId: string,
    data: Partial<MockShopPricingConfig>
  ): Promise<MockShopPricingConfig> => {
    const current = await this.getPricingConfig(shopId);
    const updated: MockShopPricingConfig = {
      ...current,
      ...data,
      finishing: {
        ...current.finishing,
        ...(data.finishing || {}),
      },
      bulkDiscounts: data.bulkDiscounts || current.bulkDiscounts,
    };
    this.pricingConfigs.set(shopId, updated);
    return updated;
  };

  // --- SUBSCRIPTIONS & PLANS ---
  private subscriptions: Map<string, any> = new Map([
    [
      initialShop.id,
      {
        id: 'sub-demo-001',
        shopId: initialShop.id,
        planId: 'BUSINESS',
        status: 'TRIALING',
        trialStartAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // Day 3 of 30
        trialEndAt: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
        plan: {
          name: 'Business Pro',
          maxPrinters: 4,
          maxMonthlyOrders: 2500,
        },
      },
    ],
  ]);

  public subscription = {
    findUnique: async (args?: { where?: { shopId?: string; id?: string } }) => {
      const shopId = args?.where?.shopId || initialShop.id;
      return this.subscriptions.get(shopId) || {
        id: 'sub-demo-001',
        shopId,
        planId: 'BUSINESS',
        status: 'TRIALING',
        trialStartAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        trialEndAt: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
      };
    },
    findFirst: async (args?: { where?: { shopId?: string } }) => {
      const shopId = args?.where?.shopId || initialShop.id;
      return this.subscriptions.get(shopId) || null;
    },
    create: async (args: { data: any }) => {
      const sub = {
        id: args.data.id || `sub-${Date.now()}`,
        ...args.data,
      };
      if (args.data.shopId) {
        this.subscriptions.set(args.data.shopId, sub);
      }
      return sub;
    },
    update: async (args: { where: { shopId?: string; id?: string }; data: any }) => {
      const shopId = args.where.shopId || initialShop.id;
      const existing = this.subscriptions.get(shopId) || {
        id: 'sub-demo-001',
        shopId,
        planId: 'BUSINESS',
        status: 'TRIALING',
        trialStartAt: new Date(),
        trialEndAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      };
      const updated = {
        ...existing,
        ...args.data,
        updatedAt: new Date(),
      };
      this.subscriptions.set(shopId, updated);
      return updated;
    },
  };

  public subscriptionPlan = {
    count: async () => 3,
  };

  // --- ORDERS REPOSITORY ---
  public order = {
    count: async (args?: { where?: any }) => {
      if (args?.where?.status?.in) {
        return Array.from(this.orders.values()).filter((o) => args.where.status.in.includes(o.status)).length;
      }
      if (args?.where?.status) {
        return Array.from(this.orders.values()).filter((o) => o.status === args.where.status).length;
      }
      return this.orders.size;
    },
    findMany: async (args?: { where?: any; include?: any; orderBy?: any; take?: number }) => {
      let result = Array.from(this.orders.values());
      if (args?.where?.shopId) {
        result = result.filter((o) => o.shopId === args.where.shopId);
      }
      if (args?.where?.customerPhone) {
        const clean = args.where.customerPhone.replace(/[^0-9]/g, '');
        result = result.filter((o) => {
          const cust = this.customers.get(o.customerId);
          return cust && cust.phone.replace(/[^0-9]/g, '') === clean;
        });
      }
      if (args?.where?.status?.in) {
        result = result.filter((o) => args.where.status.in.includes(o.status));
      } else if (args?.where?.status) {
        result = result.filter((o) => o.status === args.where.status);
      }
      result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      if (args?.take) {
        result = result.slice(0, args.take);
      }
      return result.map((o) => ({
        ...o,
        customer: this.customers.get(o.customerId) || initialCustomer,
        shop: this.shops.get(o.shopId) || initialShop,
        documents: o.documents || [],
      }));
    },
    findUnique: async (args: { where: { id: string }; include?: any }) => {
      const o = this.orders.get(args.where.id);
      if (!o) return null;
      return {
        ...o,
        customer: this.customers.get(o.customerId) || initialCustomer,
        documents: o.documents || [],
      };
    },
    create: async (args: { data: any }) => {
      const id = `ord-${Date.now()}`;
      const newOrder: MockOrder = {
        id,
        orderNumber: args.data.orderNumber || `SPH-${Date.now().toString().slice(-6)}`,
        shopId: args.data.shopId || 'shop-metro-001',
        customerId: args.data.customerId || 'cust-rahul-001',
        status: args.data.status || 'SUBMITTED',
        paymentStatus: args.data.paymentStatus || 'PENDING',
        paymentMethod: args.data.paymentMethod || null,
        paymentReference: args.data.paymentReference || null,
        paidAt: args.data.paidAt || null,
        totalDocuments: args.data.totalDocuments || 1,
        totalPages: args.data.totalPages || 1,
        estimatedAmount: args.data.estimatedAmount || 10.0,
        finalAmount: args.data.finalAmount || null,
        customerNotes: args.data.customerNotes || null,
        rejectionReason: null,
        documents: args.data.documents || [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.orders.set(id, newOrder);
      return {
        ...newOrder,
        customer: this.customers.get(newOrder.customerId) || initialCustomer,
      };
    },
    update: async (args: { where: { id: string }; data: any }) => {
      const existing = this.orders.get(args.where.id);
      if (!existing) throw new Error('Order not found');
      const updated: MockOrder = {
        ...existing,
        ...args.data,
        updatedAt: new Date(),
      };
      this.orders.set(args.where.id, updated);
      return {
        ...updated,
        customer: this.customers.get(updated.customerId) || initialCustomer,
        documents: updated.documents || [],
      };
    },
  };

  // --- AUDIT LOGS ---
  public auditLog = {
    create: async (args: { data: any }) => {
      this.auditLogs.push({ id: `log-${Date.now()}`, action: args.data.action, createdAt: new Date() });
      return args.data;
    },
  };

  // --- RAW & TRANSACTIONS ---
  public $queryRaw = async () => [{ '1': 1 }];
  public $transaction = async (cb: (tx: any) => Promise<any>) => cb(this);
}

// Global Singleton
const globalForMock = globalThis as unknown as {
  mockDbInstance: MockDatabase | undefined;
};

export const mockDb = globalForMock.mockDbInstance ?? new MockDatabase();

if (process.env.NODE_ENV !== 'production') {
  globalForMock.mockDbInstance = mockDb;
}
