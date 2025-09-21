import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongoose';
import User from '@/models/User';
import Transaction from '@/models/Transaction';
import { NextAuthOptions } from '@/app/auth/[...nextauth]/route';

export async function POST(req: NextRequest) {
  const _session = await getServerSession(NextAuthOptions);

  if (!_session || !_session.user || !_session.user.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { recipientEmail, amount, currency } = await req.json();

  if (!recipientEmail || !amount || typeof amount !== 'number' || amount <= 0 || !currency) {
    return NextResponse.json({ error: 'Invalid transfer details' }, { status: 400 });
  }

  try {
    await dbConnect();

    const sender = await User.findOne({ email: session.user.email });

    if (!sender) {
      return NextResponse.json({ error: 'Sender not found' }, { status: 404 });
    }

    const recipient = await User.findOne({ email: recipientEmail });

    if (!recipient) {
      return NextResponse.json({ error: 'Recipient not found' }, { status: 404 });
    }

    // For simplicity, assuming all users have a 'balance' field in USD.
    // In a real application, you'd handle multiple currencies and conversions.
    if (sender.balance < amount) {
      return NextResponse.json({ error: 'Insufficient balance' }, { status: 400 });
    }

    const sessionMongoose = await mongoose.startSession();
    sessionMongoose.startTransaction();

    try {
      await User.updateOne(
        { _id: sender._id },
        { $inc: { balance: -amount } },
        { session: sessionMongoose }
      );

      await User.updateOne(
        { _id: recipient._id },
        { $inc: { balance: amount } },
        { session: sessionMongoose }
      );

      await Transaction.create([
        {
          senderId: sender._id,
          recipientId: recipient._id,
          amount: amount,
          currency: currency,
          type: 'sent',
        },
        {
          senderId: recipient._id,
          recipientId: sender._id,
          amount: amount,
          currency: currency,
          type: 'received',
        },
      ], { session: sessionMongoose });

      await sessionMongoose.commitTransaction();
    } catch (error) {
      await sessionMongoose.abortTransaction();
      throw error;
    } finally {
      sessionMongoose.endSession();
    }

    return NextResponse.json({ message: 'Transfer successful' }, { status: 200 });
  } catch (error) {
    console.error('Transfer API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}