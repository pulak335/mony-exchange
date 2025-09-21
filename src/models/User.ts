import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  balance: number;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  username: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
    match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores']
  },
  password: { 
    type: String, 
    required: true,
    minlength: 8
  },
  firstName: { 
    type: String, 
    trim: true,
    maxlength: 50
  },
  lastName: { 
    type: String, 
    trim: true,
    maxlength: 50
  },
  phone: { 
    type: String, 
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  balance: { 
    type: Number, 
    required: true, 
    default: 0.0,
    min: 0
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  }
}, {
  timestamps: true
});

// Index for faster queries
UserSchema.index({ email: 1 });
UserSchema.index({ username: 1 });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);