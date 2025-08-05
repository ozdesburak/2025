import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Campaign extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  discount: number;

  @Prop({ default: true })
  active: boolean;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
CampaignSchema.index({ name: 1 });
