import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrdersService } from './order.service';
import { Order } from './order.schema';

@Controller('orders')
export class OrdersController {
  constructor(private service: OrdersService) {}

  @Post()
  create(@Body() data: Partial<Order>) {
    return this.service.create(data);
  }

  @Get('table/:id')
  findByTable(@Param('id') id: string) {
    return this.service.findByTable(id);
  }

  @Patch(':id/pay')
  pay(@Param('id') id: string) {
    return this.service.pay(id);
  }
}
