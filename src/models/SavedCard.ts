import mongoose, { Schema, Document } from 'mongoose';

export interface ISavedCard extends Document {
  userId: mongoose.Types.ObjectId;
  last4: string;
  brand: string;
  expirationMonth: number;
  expirationYear: number;
  cardToken: string; // Storing a token instead of raw card number
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SavedCardSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  last4: { type: String, required: true },
  brand: { type: String, required: true },
  expirationMonth: { type: Number, required: true },
  expirationYear: { type: Number, required: true },
  cardToken: { type: String, required: true },
  isDefault: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Update `updatedAt` field on save
SavedCardSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const SavedCard = mongoose.models.SavedCard || mongoose.model<ISavedCard>('SavedCard', SavedCardSchema);

export default SavedCard;