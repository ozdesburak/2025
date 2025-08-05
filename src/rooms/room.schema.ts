import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Room extends Document {
  @Prop({ unique: true, index: true })
  number: number;

  @Prop({ default: 'available' })
  status: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
RoomSchema.index({ number: 1 });
