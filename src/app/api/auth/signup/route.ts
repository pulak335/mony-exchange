import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, username, password, firstName, lastName, phone } = await request.json();

    // Validation
    if (!email || !username || !password) {
      return NextResponse.json({ 
        message: 'Email, username, and password are required' 
      }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        message: 'Please enter a valid email address' 
      }, { status: 400 });
    }

    // Username validation
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username) || username.length < 3 || username.length > 30) {
      return NextResponse.json({ 
        message: 'Username must be 3-30 characters and contain only letters, numbers, and underscores' 
      }, { status: 400 });
    }

    // Password validation
    if (password.length < 8) {
      return NextResponse.json({ 
        message: 'Password must be at least 8 characters long' 
      }, { status: 400 });
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
    if (!passwordRegex.test(password)) {
      return NextResponse.json({ 
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' 
      }, { status: 400 });
    }

    await dbConnect();

    // Check if user already exists
    const existingUserByEmail = await User.findOne({ email: email.toLowerCase() });
    if (existingUserByEmail) {
      return NextResponse.json({ 
        message: 'User with this email already exists' 
      }, { status: 409 });
    }

    const existingUserByUsername = await User.findOne({ username: username.toLowerCase() });
    if (existingUserByUsername) {
      return NextResponse.json({ 
        message: 'Username is already taken' 
      }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await User.create({
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password: hashedPassword,
      firstName: firstName || '',
      lastName: lastName || '',
      phone: phone || '',
      balance: 0.0,
      isVerified: false
    });

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

    return NextResponse.json({ 
      message: 'User created successfully', 
      user: userResponse 
    }, { status: 201 });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ 
      message: 'Internal server error' 
    }, { status: 500 });
  }
}