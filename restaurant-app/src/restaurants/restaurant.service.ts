import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from './restaurant.schema';

@Injectable()
export class RestaurantsService {
  constructor(@InjectModel(Restaurant.name) private model: Model<Restaurant>) {}

  create(data: Partial<Restaurant>) {
    const restaurant = new this.model(data);
    return restaurant.save();
  }

  findAll() {
    return this.model.find().exec();
  }
}
