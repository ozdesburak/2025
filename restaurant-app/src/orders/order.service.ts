import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderStatus } from './order.schema';
import { TablesService } from '../tables/table.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private model: Model<Order>,
    private tablesService: TablesService,
  ) {}

  async create(data: Partial<Order>) {
    const order = new this.model(data);
    const saved = await order.save();
    await this.tablesService.closeTable(String(order.table), order.totalPrice);
    return saved;
  }

  findByTable(tableId: string) {
    return this.model.find({ table: tableId }).exec();
  }

  pay(id: string) {
    return this.model.findByIdAndUpdate(id, { status: OrderStatus.PAID }, { new: true }).exec();
  }
}
