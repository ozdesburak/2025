import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Restaurant } from '../restaurants/restaurant.schema';

export enum TableStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

@Schema()
export class Table extends Document {
  @Prop({ type: Types.ObjectId, ref: Restaurant.name, required: true })
  restaurant: Types.ObjectId;

  @Prop({ required: true })
  number: number;

  @Prop({ default: TableStatus.OPEN })
  status: TableStatus;

  @Prop({ default: 0 })
  totalPrice: number;
}

export const TableSchema = SchemaFactory.createForClass(Table);
