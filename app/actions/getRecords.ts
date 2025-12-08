'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Record } from '@/types/Record';

async function getRecords(): Promise<{
  records?: Record[];
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
      orderBy: {
        Date: 'desc', // Sort by the `date` field in descending order
      },
      take: 10, // Limit the request to 10 records
    });

   // Use ': any' to bypass the type check
    const formattedRecords: Record[] = records.map((record: any) => {
      // Extract properties safely to avoid keyword collision
      const { Date: recordDate, ...rest } = record;
      
      return {
        ...rest,
        date: recordDate,
      };
    });

    return { records: formattedRecords };
  } catch (error) {
    console.error('Error fetching records:', error); // Log the error
    return { error: 'Database error' };
  }
}

export default getRecords;