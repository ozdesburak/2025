import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('rooms')
@UseGuards(JwtAuthGuard)
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Post()
  create(@Body() body: { number: number; status?: string }) {
    return this.roomsService.create(body);
  }

  @Get()
  findAll() {
    return this.roomsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.roomsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsService.remove(id);
  }
}
