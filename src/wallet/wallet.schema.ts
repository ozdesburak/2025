import { Schema, Document } from 'mongoose';

export interface Wallet extends Document {
  userId: string;
  balance: number;
}

export const WalletSchema = new Schema<Wallet>({
  userId: { type: String, required: true, unique: true, index: true },
  balance: { type: Number, required: true, default: 0 },
});
