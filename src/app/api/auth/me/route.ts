import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/mongoose';
import User from '@/models/User';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'No token provided' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as any;
    
    await dbConnect();
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const userResponse = {
      id: user._id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      balance: user.balance,
      isVerified: user.isVerified,
      createdAt: user.createdAt
    };

    return NextResponse.json({ user: userResponse }, { status: 200 });

  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}
