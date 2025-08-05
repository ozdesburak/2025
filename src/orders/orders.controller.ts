import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() body: { items: string[] }) {
    return this.ordersService.create(req.user.sub, body.items);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  myOrders(@Req() req) {
    return this.ordersService.findByUser(req.user.sub);
  }
}
