'use server';
import db  from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getUserRecord(): Promise<{
  record?: number;
  daysWithRecords?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
    });

    // FIX 1: Explicitly type 'sum' as number and 'record' as any
    const record = records.reduce((sum: number, record: any) => sum + record.amount, 0);

    // Count the number of days with valid sleep records
    // FIX 2: Explicitly type 'record' as any
    const daysWithRecords = records.filter(
      (record: any) => record.amount > 0
    ).length;

    return { record, daysWithRecords };
  } catch (error) {
    console.error('Error fetching user record:', error); // Log the error
    return { error: 'Database error' };
  }
}

export default getUserRecord;