import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongoose';
import SavedCard from '@/models/SavedCard';

export async function GET() {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userId = session.user.id;
    const savedCards = await SavedCard.find({ userId });

    return NextResponse.json(savedCards, { status: 200 });
  } catch (error) {
    console.error('Error fetching saved cards:', error);
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
    const { last4, brand, expirationMonth, expirationYear, cardToken, isDefault } = await req.json();

    if (!last4 || !brand || !expirationMonth || !expirationYear || !cardToken) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // If new card is set as default, set all other cards for this user to not default
    if (isDefault) {
      await SavedCard.updateMany({ userId }, { isDefault: false });
    }

    const newCard = new SavedCard({
      userId,
      last4,
      brand,
      expirationMonth,
      expirationYear,
      cardToken,
      isDefault: isDefault || false,
    });

    await newCard.save();

    return NextResponse.json(newCard, { status: 201 });
  } catch (error) {
    console.error('Error adding saved card:', error);
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
    const cardId = searchParams.get('id');

    if (!cardId) {
      return NextResponse.json({ message: 'Card ID is required' }, { status: 400 });
    }

    const deletedCard = await SavedCard.findOneAndDelete({ _id: cardId, userId });

    if (!deletedCard) {
      return NextResponse.json({ message: 'Card not found or not authorized' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Card deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting saved card:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}