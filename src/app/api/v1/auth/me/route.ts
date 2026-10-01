// SMART PRINT HUB - Current User Session API
import { getSession } from '@/lib/auth';
import { apiSuccess, apiError } from '@/lib/api-response';
import { UnauthorizedError } from '@/lib/errors';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getSession();

    if (!session) {
      throw new UnauthorizedError('No active session found');
    }

    return apiSuccess({
      user: session.user,
      shop: session.shop,
    });
  } catch (error) {
    return apiError(error);
  }
}
