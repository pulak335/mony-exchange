import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const { emailOrUsername, password } = await request.json();

    // Validation
    if (!emailOrUsername || !password) {
      return NextResponse.json({ 
        message: 'Email/Username and password are required' 
      }, { status: 400 });
    }

    await dbConnect();

    // Find user by email or username
    const user = await User.findOne({
      $or: [
        { email: emailOrUsername.toLowerCase() },
        { username: emailOrUsername.toLowerCase() }
      ]
    });

    if (!user) {
      return NextResponse.json({ 
        message: 'Invalid credentials' 
      }, { status: 401 });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ 
        message: 'Invalid credentials' 
      }, { status: 401 });
    }

    // Create JWT token
    const token = jwt.sign(
      { 
        userId: user._id,
        email: user.email,
        username: user.username
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    // Return user data without password
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

    // Set HTTP-only cookie
    const response = NextResponse.json({ 
      message: 'Login successful', 
      user: userResponse,
      token 
    }, { status: 200 });

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ 
      message: 'Internal server error' 
    }, { status: 500 });
  }
}
