import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Table extends Document {
  @Prop({ required: true, unique: true, index: true })
  number: number;

  @Prop({ required: true })
  capacity: number;

  @Prop({ default: 'available' })
  status: string;
}

export const TableSchema = SchemaFactory.createForClass(Table);
