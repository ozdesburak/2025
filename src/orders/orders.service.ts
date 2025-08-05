import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  create(userId: string, items: string[]) {
    const order = new this.orderModel({ userId, items });
    return order.save();
  }

  findByUser(userId: string) {
    return this.orderModel.find({ userId }).exec();
  }
}
