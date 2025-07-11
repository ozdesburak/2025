import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Table, TableStatus } from './table.schema';

@Injectable()
export class TablesService {
  constructor(@InjectModel(Table.name) private model: Model<Table>) {}

  create(data: Partial<Table>) {
    const table = new this.model(data);
    return table.save();
  }

  findByRestaurant(restaurantId: string) {
    return this.model.find({ restaurant: restaurantId }).exec();
  }

  closeTable(id: string, totalPrice: number) {
    return this.model.findByIdAndUpdate(id, { status: TableStatus.CLOSED, totalPrice }, { new: true }).exec();
  }
}
