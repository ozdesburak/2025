import { Schema, Document } from 'mongoose';

export interface Device extends Document {
  deviceId: string;
  status: string;
  location?: string;
}

export const DeviceSchema = new Schema<Device>({
  deviceId: { type: String, required: true, unique: true, index: true },
  status: { type: String, default: 'offline' },
  location: { type: String },
});
