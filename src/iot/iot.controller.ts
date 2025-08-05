import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { IotService } from './iot.service';

@UseGuards(JwtAuthGuard)
@Controller('iot')
export class IotController {
  constructor(private service: IotService) {}

  @Post('devices')
  create(@Body() body: { deviceId: string; status?: string; location?: string }) {
    return this.service.create(body);
  }

  @Get('devices')
  findAll() {
    return this.service.findAll();
  }

  @Patch('devices/:id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(id, body);
  }
}
