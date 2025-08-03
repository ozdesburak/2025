import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Event extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: Date;

  @Prop()
  capacity: number;

  @Prop({ default: [] })
  participants: string[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
