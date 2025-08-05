import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { EventsService } from './events.service';

@UseGuards(JwtAuthGuard)
@Controller('events')
export class EventsController {
  constructor(private service: EventsService) {}

  @Post()
  create(@Body() body: { title: string; date: Date; capacity: number }) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
