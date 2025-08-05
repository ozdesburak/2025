import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Table } from './table.schema';

@Injectable()
export class TablesService {
  constructor(@InjectModel(Table.name) private model: Model<Table>) {}

  create(data: { number: number; capacity: number }) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find().exec();
  }

  update(id: string, data: Partial<Table>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
