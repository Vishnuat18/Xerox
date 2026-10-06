// SMART PRINT HUB - Unified MySQL Database Access Layer using Prisma
import { PrismaClient } from '../generated/prisma';

declare global {
  var prismaGlobal: PrismaClient | undefined;
}

const prisma =
  globalThis.prismaGlobal ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}

// Attach helper functions for pricing configuration compatibility
const dbExtended = Object.assign(prisma, {
  getPricingConfig: async (_shopId: string) => {
    return {
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
  },
  updatePricingConfig: async (_shopId: string, updates: any) => {
    return {
      volumeDiscountsEnabled: updates.volumeDiscountsEnabled ?? true,
      finishing: updates.finishing ?? {
        stapleCorner: 2.0,
        stapleSide: 5.0,
        bindingSpiral: 35.0,
        bindingHardcover: 65.0,
        bindingProject: 150.0,
        laminationGlossy: 15.0,
        laminationMatte: 25.0,
      },
      bulkDiscounts: updates.bulkDiscounts ?? [
        { minPages: 50, discountPercent: 10 },
        { minPages: 150, discountPercent: 15 },
        { minPages: 500, discountPercent: 25 },
      ],
    };
  },
});

export const db: PrismaClient & {
  getPricingConfig: (shopId: string) => Promise<any>;
  updatePricingConfig: (shopId: string, updates: any) => Promise<any>;
} = dbExtended as any;
