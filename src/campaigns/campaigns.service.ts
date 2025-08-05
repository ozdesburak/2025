import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from './campaign.schema';

@Injectable()
export class CampaignsService {
  constructor(@InjectModel(Campaign.name) private model: Model<Campaign>) {}

  create(data: { name: string; discount: number; active?: boolean }) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find().exec();
  }
}
