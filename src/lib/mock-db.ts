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

export interface MockOrder {
  id: string;
  orderNumber: string;
  shopId: string;
  customerId: string;
  status: string;
  totalDocuments: number;
  totalPages: number;
  estimatedAmount: number;
  finalAmount: number | null;
  customerNotes: string | null;
  rejectionReason: string | null;
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
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const initialOwner: MockUser = {
  id: 'user-owner-001',
  shopId: 'shop-metro-001',
  email: 'owner@metroprint.com',
  passwordHash: DEMO_PASSWORD_HASH,
  fullName: 'Rajesh Sharma (Owner)',
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
  fullName: 'Rahul Sharma (Customer)',
  email: 'rahul.customer@example.com',
  createdAt: new Date(),
};

const initialPrinters: MockPrinter[] = [
  {
    id: 'printer-hp-001',
    shopId: 'shop-metro-001',
    agentId: 'agent-pc-001',
    windowsPrinterName: 'HP_LaserJet_Pro_4103fdw',
    displayName: 'Counter 1 - HP LaserJet Pro (B&W)',
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
    displayName: 'Main Machine - Canon iR 2520 (Color MFP)',
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
];

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
];

class MockDatabase {
  private shops: Map<string, MockShop> = new Map([[initialShop.id, initialShop]]);
  private users: Map<string, MockUser> = new Map([[initialOwner.id, initialOwner]]);
  private customers: Map<string, MockCustomer> = new Map([[initialCustomer.id, initialCustomer]]);
  private printers: Map<string, MockPrinter> = new Map(initialPrinters.map((p) => [p.id, p]));
  private pricingRules: Map<string, MockPricingRule> = new Map(initialPricingRules.map((r) => [r.id, r]));
  private orders: Map<string, MockOrder> = new Map();
  private auditLogs: Array<{ id: string; action: string; createdAt: Date }> = [];

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
      result.subscription = {
        id: 'sub-pro-001',
        shopId: shop.id,
        planId: 'PROFESSIONAL',
        status: 'TRIALING',
        trialStartAt: new Date(),
        trialEndAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        plan: {
          id: 'PROFESSIONAL',
          name: 'Professional Hub',
          monthlyPrice: 999,
          yearlyPrice: 9999,
          maxPrinters: 4,
          maxMonthlyOrders: 2500,
        },
      };
    }
    if (include.orders) {
      result.orders = Array.from(this.orders.values())
        .filter((o) => o.shopId === shop.id)
        .slice(0, include.orders.take || 10)
        .map((o) => ({
          ...o,
          customer: this.customers.get(o.customerId) || initialCustomer,
          documents: [],
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
      const shopToUse = found || initialShop;
      return this.attachShopRelations(shopToUse, args.include);
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
      const userToUse = found || initialOwner;
      const result: any = { ...userToUse };
      if (args.include?.shop) {
        result.shop = userToUse.shopId ? this.shops.get(userToUse.shopId) || initialShop : initialShop;
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

  // --- CUSTOMER REPOSITORY ---
  public customer = {
    findFirst: async (args: { where: { shopId?: string; phone?: string } }) => {
      return Array.from(this.customers.values()).find(
        (c) => c.phone === args.where.phone || c.shopId === args.where.shopId
      ) || null;
    },
    upsert: async (args: { where: { id: string }; update: Partial<MockCustomer>; create: Partial<MockCustomer> }) => {
      const existing = Array.from(this.customers.values()).find(
        (c) => c.phone === args.create.phone && c.shopId === args.create.shopId
      );
      if (existing) {
        const updated = { ...existing, ...args.update };
        this.customers.set(existing.id, updated);
        return updated;
      }
      const id = `cust-${Date.now()}`;
      const newCust: MockCustomer = {
        id,
        shopId: args.create.shopId || 'shop-metro-001',
        phone: args.create.phone || '9876543210',
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
      return Array.from(this.printers.values());
    },
    count: async () => this.printers.size,
  };

  // --- PRICING RULES REPOSITORY ---
  public pricingRule = {
    findMany: async () => Array.from(this.pricingRules.values()),
    create: async (args: { data: any }) => args.data,
  };

  // --- SUBSCRIPTIONS & PLANS ---
  public subscription = {
    findUnique: async () => ({
      id: 'sub-demo-001',
      planId: 'PROFESSIONAL',
      status: 'TRIALING',
      trialStartAt: new Date(),
      trialEndAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      plan: {
        name: 'Professional Hub',
        maxPrinters: 4,
        maxMonthlyOrders: 2500,
      },
    }),
    create: async (args: { data: any }) => args.data,
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
      return this.orders.size;
    },
    create: async (args: { data: any }) => {
      const id = `ord-${Date.now()}`;
      const newOrder: MockOrder = {
        id,
        orderNumber: args.data.orderNumber || `SPH-${Date.now()}`,
        shopId: args.data.shopId || 'shop-metro-001',
        customerId: args.data.customerId || 'cust-rahul-001',
        status: args.data.status || 'SUBMITTED',
        totalDocuments: args.data.totalDocuments || 1,
        totalPages: args.data.totalPages || 1,
        estimatedAmount: args.data.estimatedAmount || 10.0,
        finalAmount: null,
        customerNotes: args.data.customerNotes || null,
        rejectionReason: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.orders.set(id, newOrder);
      return newOrder;
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
