import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/mongodb';
import { Admin } from '@/models/Blog';

// POST /api/admin/auth - Admin login
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Check if admin exists
    let admin = await Admin.findOne({ username }).lean();
    // If no admin exists, create default admin (first time setup)
    
    if (!admin) {
      
      const defaultUsername = process.env.ADMIN_USERNAME;
      const defaultPassword = process.env.ADMIN_PASSWORD;
      if (username === defaultUsername && password === defaultPassword) {
        const hashedPassword = await bcrypt.hash(defaultPassword, 10);
        
        admin = await Admin.create({
          username: defaultUsername,
          password: hashedPassword,
          email: 'admin@umeshgajjar.com',
          role: 'admin',
        });
      } else {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }
    } else {
      // Verify password
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        adminId: admin._id,
        username: admin.username,
        role: admin.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );

    // Set cookie with token
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role,
      },
    });

    // Set HTTP-only cookie
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60, // 24 hours
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}

// GET /api/admin/auth - Check auth status
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin-token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    
    return NextResponse.json({
      authenticated: true,
      admin: {
        id: decoded.adminId,
        username: decoded.username,
        role: decoded.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }
}

// DELETE /api/admin/auth - Logout
export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully',
  });

  // Clear the auth cookie
  response.cookies.delete('admin-token');

  return response;
}