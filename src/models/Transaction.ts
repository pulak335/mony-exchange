import mongoose, { Schema, Document } from 'mongoose';

export interface ITransaction extends Document {
  senderId: mongoose.Schema.Types.ObjectId;
  recipientId: mongoose.Schema.Types.ObjectId;
  amount: number;
  currency: string;
  type: 'sent' | 'received';
  createdAt: Date;
}

const TransactionSchema: Schema = new Schema({
  senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  recipientId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  type: { type: String, enum: ['sent', 'received'], required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Transaction || mongoose.model<ITransaction>('Transaction', TransactionSchema);