import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongoose';
import BankAccount from '@/models/BankAccount';

export async function GET() {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const bankAccounts = await BankAccount.find({ userId });

    return NextResponse.json(bankAccounts, { status: 200 });
  } catch (error) {
    console.error('Error fetching bank accounts:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const { bankName, accountHolderName, accountNumber, routingNumber, isDefault } = await req.json();

    if (!bankName || !accountHolderName || !accountNumber || !routingNumber) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // If new account is set as default, set all other accounts for this user to not default
    if (isDefault) {
      await BankAccount.updateMany({ userId }, { isDefault: false });
    }

    const newAccount = new BankAccount({
      userId,
      bankName,
      accountHolderName,
      accountNumber,
      routingNumber,
      isDefault: isDefault || false,
    });

    await newAccount.save();

    return NextResponse.json(newAccount, { status: 201 });
  } catch (error) {
    console.error('Error adding bank account:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const { searchParams } = new URL(req.url);
    const accountId = searchParams.get('id');

    if (!accountId) {
      return NextResponse.json({ message: 'Account ID is required' }, { status: 400 });
    }

    const deletedAccount = await BankAccount.findOneAndDelete({ _id: accountId, userId });

    if (!deletedAccount) {
      return NextResponse.json({ message: 'Account not found or not authorized' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Bank account deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting bank account:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}