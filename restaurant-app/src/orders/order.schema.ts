import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Table } from '../tables/table.schema';

export enum OrderStatus {
  OPEN = 'open',
  PAID = 'paid',
}

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ type: Types.ObjectId, ref: Table.name, required: true })
  table: Types.ObjectId;

  @Prop({ required: true })
  items: string[];

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ default: OrderStatus.OPEN })
  status: OrderStatus;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
