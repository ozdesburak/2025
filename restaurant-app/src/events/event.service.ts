import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './event.schema';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private model: Model<Event>) {}

  create(data: Partial<Event>) {
    const event = new this.model(data);
    return event.save();
  }

  findAll() {
    return this.model.find().exec();
  }

  apply(id: string, participant: string) {
    return this.model
      .findByIdAndUpdate(
        id,
        { $addToSet: { participants: participant } },
        { new: true },
      )
      .exec();
  }
}
