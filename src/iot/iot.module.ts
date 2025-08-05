import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IotController } from './iot.controller';
import { IotService } from './iot.service';
import { DeviceSchema } from './device.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Device', schema: DeviceSchema }])],
  controllers: [IotController],
  providers: [IotService],
})
export class IotModule {}
