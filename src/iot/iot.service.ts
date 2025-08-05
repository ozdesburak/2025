import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device } from './device.schema';

@Injectable()
export class IotService {
  constructor(@InjectModel('Device') private deviceModel: Model<Device>) {}

  create(data: { deviceId: string; status?: string; location?: string }) {
    return this.deviceModel.create(data);
  }

  findAll() {
    return this.deviceModel.find().exec();
  }

  update(id: string, data: Partial<Device>) {
    return this.deviceModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }
}
