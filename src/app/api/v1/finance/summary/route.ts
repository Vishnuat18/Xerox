import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();

    if (!session || !session.shop) {
      return NextResponse.json(
        { success: false, error: { message: 'Unauthorized' } },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const range = searchParams.get('range') || 'all'; // 'today', 'week', 'month', 'all'

    // Fetch all orders for this shop
    const orders = await db.order.findMany({
      where: { shopId: session.shop.id },
      orderBy: { createdAt: 'desc' },
      include: {
        customer: true,
        documents: true,
      },
    });

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const filteredOrders = (orders || []).filter((o: any) => {
      const orderDate = new Date(o.createdAt);
      if (range === 'today') return orderDate >= startOfToday;
      if (range === 'week') return orderDate >= startOfWeek;
      if (range === 'month') return orderDate >= startOfMonth;
      return true;
    });

    // Aggregations
    let totalGrossRevenue = 0;
    let cashRevenue = 0;
    let upiRevenue = 0;
    let pendingRevenue = 0;
    let totalPagesCount = 0;
    let bwPagesCount = 0;
    let colorPagesCount = 0;

    let todayGrossRevenue = 0;
    let todayCashRevenue = 0;
    let todayUpiRevenue = 0;
    let todayPendingRevenue = 0;

    const khataMap = new Map<string, {
      customerId: string;
      customerName: string;
      customerPhone: string;
      pendingAmount: number;
      orderCount: number;
      orders: any[];
    }>();

    const transactions: any[] = [];

    (orders || []).forEach((o: any) => {
      const orderDate = new Date(o.createdAt);
      const isToday = orderDate >= startOfToday;
      const amt = Number(o.finalAmount ?? o.estimatedAmount ?? 0);
      const isPaid = o.paymentStatus === 'PAID';
      const isCash = (o.paymentMethod || '').toUpperCase() === 'CASH';

      // Global today numbers
      if (isToday) {
        todayGrossRevenue += amt;
        if (isPaid) {
          if (isCash) todayCashRevenue += amt;
          else todayUpiRevenue += amt;
        } else {
          todayPendingRevenue += amt;
        }
      }

      // Khata map (all unpaid orders)
      if (!isPaid && amt > 0) {
        const custId = o.customerId || o.customerPhone || 'walkin';
        const existing = khataMap.get(custId) || {
          customerId: custId,
          customerName: o.customer?.fullName || 'Walk-in Customer',
          customerPhone: o.customerPhone || o.customer?.phone || '',
          pendingAmount: 0,
          orderCount: 0,
          orders: [] as any[],
        };
        existing.pendingAmount += amt;
        existing.orderCount += 1;
        existing.orders.push({
          id: o.id,
          orderNumber: o.orderNumber,
          amount: amt,
          date: o.createdAt,
          pages: o.totalPages,
        });
        khataMap.set(custId, existing);
      }
    });

    // Range-filtered aggregations
    filteredOrders.forEach((o: any) => {
      const amt = Number(o.finalAmount ?? o.estimatedAmount ?? 0);
      const isPaid = o.paymentStatus === 'PAID';
      const isCash = (o.paymentMethod || '').toUpperCase() === 'CASH';

      totalGrossRevenue += amt;
      if (isPaid) {
        if (isCash) cashRevenue += amt;
        else upiRevenue += amt;
      } else {
        pendingRevenue += amt;
      }

      const pgs = Number(o.totalPages || 1);
      totalPagesCount += pgs;

      // Inspect documents for color
      let hasColor = false;
      if (Array.isArray(o.documents)) {
        hasColor = o.documents.some((d: any) => d.specs?.color === 'COLOR');
      }
      if (hasColor) {
        colorPagesCount += pgs;
      } else {
        bwPagesCount += pgs;
      }

      transactions.push({
        id: o.id,
        orderNumber: o.orderNumber,
        customerName: o.customer?.fullName || 'Walk-in',
        customerPhone: o.customer?.phone || o.customerPhone || '',
        amount: amt,
        paymentStatus: o.paymentStatus || 'PENDING',
        paymentMethod: o.paymentMethod || 'UPI',
        totalPages: pgs,
        createdAt: o.createdAt,
      });
    });

    const khataCustomers = Array.from(khataMap.values()).sort((a, b) => b.pendingAmount - a.pendingAmount);

    return NextResponse.json({
      success: true,
      data: {
        range,
        summary: {
          totalOrders: filteredOrders.length,
          totalGrossRevenue,
          cashRevenue,
          upiRevenue,
          pendingRevenue,
          totalPagesCount,
          bwPagesCount,
          colorPagesCount,
          today: {
            grossRevenue: todayGrossRevenue,
            cashRevenue: todayCashRevenue,
            upiRevenue: todayUpiRevenue,
            pendingRevenue: todayPendingRevenue,
          },
        },
        khataCustomers,
        transactions: transactions.slice(0, 50),
      },
    });
  } catch (error: any) {
    console.error('Error fetching finance summary:', error);
    return NextResponse.json(
      { success: false, error: { message: error.message || 'Internal server error' } },
      { status: 500 }
    );
  }
}
