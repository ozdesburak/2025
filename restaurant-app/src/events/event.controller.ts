import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EventsService } from './event.service';
import { Event } from './event.schema';

@Controller('events')
export class EventsController {
  constructor(private service: EventsService) {}

  @Post()
  create(@Body() data: Partial<Event>) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post(':id/apply')
  apply(@Param('id') id: string, @Body('participant') participant: string) {
    return this.service.apply(id, participant);
  }
}
