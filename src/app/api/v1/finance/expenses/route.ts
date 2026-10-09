import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

// In-memory expense store with realistic starter seed
interface ExpenseItem {
  id: string;
  shopId: string;
  category: 'PAPER' | 'TONER' | 'ELECTRICITY' | 'MAINTENANCE' | 'SALARY' | 'OTHER';
  title: string;
  amount: number;
  paymentMode: 'CASH' | 'UPI';
  date: string;
  notes?: string;
}

// Global store across server reloads
const globalExpenses = (global as any).__smart_print_expenses || [
  {
    id: 'exp-1',
    shopId: 'shop-metro',
    category: 'PAPER',
    title: '5x JK Copier A4 Ream (75 GSM)',
    amount: 1100,
    paymentMode: 'CASH',
    date: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
    notes: 'Bought from wholesale market',
  },
  {
    id: 'exp-2',
    shopId: 'shop-metro',
    category: 'TONER',
    title: 'HP LaserJet 12A Toner Refill (2x)',
    amount: 650,
    paymentMode: 'UPI',
    date: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
    notes: 'Standard B&W toner powder',
  },
  {
    id: 'exp-3',
    shopId: 'shop-metro',
    category: 'MAINTENANCE',
    title: 'Lamination Machine Heating Element',
    amount: 400,
    paymentMode: 'CASH',
    date: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    notes: 'Roller cleaning & replacement fuse',
  },
];
(global as any).__smart_print_expenses = globalExpenses;

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.shop) {
      return NextResponse.json(
        { success: false, error: { message: 'Unauthorized' } },
        { status: 401 }
      );
    }

    const shopId = session.shop.id;
    const shopExpenses = ((global as any).__smart_print_expenses as ExpenseItem[])
      .filter((e) => e.shopId === shopId || e.shopId === 'shop-metro')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const totalExpenses = shopExpenses.reduce((sum, e) => sum + e.amount, 0);

    return NextResponse.json({
      success: true,
      data: {
        expenses: shopExpenses,
        totalExpenses,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: { message: error.message || 'Failed to load expenses' } },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.shop) {
      return NextResponse.json(
        { success: false, error: { message: 'Unauthorized' } },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { category, title, amount, paymentMode = 'CASH', notes } = body;

    if (!title || !amount || isNaN(Number(amount))) {
      return NextResponse.json(
        { success: false, error: { message: 'Title and valid amount are required' } },
        { status: 400 }
      );
    }

    const newExpense: ExpenseItem = {
      id: `exp-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      shopId: session.shop.id,
      category: category || 'OTHER',
      title: title.trim(),
      amount: Math.abs(Number(amount)),
      paymentMode: paymentMode === 'UPI' ? 'UPI' : 'CASH',
      date: new Date().toISOString(),
      notes: notes ? notes.trim() : undefined,
    };

    const currentList = (global as any).__smart_print_expenses as ExpenseItem[];
    currentList.unshift(newExpense);
    (global as any).__smart_print_expenses = currentList;

    return NextResponse.json({
      success: true,
      data: { expense: newExpense },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: { message: error.message || 'Failed to create expense' } },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.shop) {
      return NextResponse.json(
        { success: false, error: { message: 'Unauthorized' } },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: { message: 'Expense ID required' } },
        { status: 400 }
      );
    }

    const currentList = (global as any).__smart_print_expenses as ExpenseItem[];
    (global as any).__smart_print_expenses = currentList.filter((e) => e.id !== id);

    return NextResponse.json({
      success: true,
      data: { deletedId: id },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: { message: error.message || 'Failed to delete expense' } },
      { status: 500 }
    );
  }
}
