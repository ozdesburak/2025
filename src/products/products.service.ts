import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private model: Model<Product>) {}

  create(data: { name: string; price: number }) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find().exec();
  }
}
