import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './event.schema';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private model: Model<Event>) {}

  create(data: { title: string; date: Date; capacity: number }) {
    return this.model.create(data);
  }

  findAll() {
    return this.model.find().exec();
  }
}
