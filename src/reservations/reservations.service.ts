import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Reservation } from './reservation.schema';

@Injectable()
export class ReservationsService {
  constructor(@InjectModel(Reservation.name) private model: Model<Reservation>) {}

  create(customerId: string, data: { table: string; time: Date }) {
    return this.model.create({ customerId, ...data });
  }

  findByCustomer(customerId: string) {
    return this.model.find({ customerId: new Types.ObjectId(customerId) }).exec();
  }
}
