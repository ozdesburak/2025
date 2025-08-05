import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './review.schema';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel(Review.name) private model: Model<Review>) {}

  create(data: { userId: string; targetId: string; rating: number; comment?: string }) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find().exec();
  }
}
