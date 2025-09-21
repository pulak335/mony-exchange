import mongoose, { Schema, Document } from 'mongoose';

export interface IBankAccount extends Document {
  userId: mongoose.Types.ObjectId;
  bankName: string;
  accountHolderName: string;
  accountNumber: string; // In a real application, this would be tokenized or encrypted
  routingNumber: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BankAccountSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bankName: { type: String, required: true },
  accountHolderName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  routingNumber: { type: String, required: true },
  isDefault: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Update `updatedAt` field on save
BankAccountSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const BankAccount = mongoose.models.BankAccount || mongoose.model<IBankAccount>('BankAccount', BankAccountSchema);

export default BankAccount;