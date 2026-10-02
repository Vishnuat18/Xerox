// SMART PRINT HUB - Unified Database Access Layer
// Configured with in-memory database mock for instant, zero-dependency Vercel deployment and testing.
import { mockDb } from './mock-db';

export const db = mockDb as any;
