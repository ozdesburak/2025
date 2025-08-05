import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ReservationsService } from './reservations.service';

@UseGuards(JwtAuthGuard)
@Controller('reservations')
export class ReservationsController {
  constructor(private service: ReservationsService) {}

  @Post()
  create(@Req() req, @Body() body: { table: string; time: Date }) {
    return this.service.create(req.user.sub, body);
  }

  @Get()
  myReservations(@Req() req) {
    return this.service.findByCustomer(req.user.sub);
  }
}
