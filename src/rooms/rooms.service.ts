import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './room.schema';

@Injectable()
export class RoomsService {
  constructor(@InjectModel(Room.name) private model: Model<Room>) {}

  create(data: { number: number; status?: string }) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find().exec();
  }

  update(id: string, data: Partial<Room>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
