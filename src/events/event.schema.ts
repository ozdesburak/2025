import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Event extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  capacity: number;
}

export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.index({ title: 1, date: 1 });
