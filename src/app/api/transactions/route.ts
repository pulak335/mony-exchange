import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongoose';
import Transaction from '@/models/Transaction';

export async function GET() {
  try {
    const session = await getServerSession();

    if (!session || !session.user || !session.user.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const transactions = await Transaction.find({
      $or: [
        { senderId: session.user.id },
        { recipientId: session.user.id }
      ]
    }).sort({ createdAt: -1 });

    return NextResponse.json({ transactions });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}