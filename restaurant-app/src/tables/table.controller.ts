import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TablesService } from './table.service';
import { Table } from './table.schema';

@Controller('tables')
export class TablesController {
  constructor(private service: TablesService) {}

  @Post()
  create(@Body() data: Partial<Table>) {
    return this.service.create(data);
  }

  @Get('restaurant/:id')
  findByRestaurant(@Param('id') id: string) {
    return this.service.findByRestaurant(id);
  }

  @Patch(':id/close')
  close(@Param('id') id: string, @Body('totalPrice') totalPrice: number) {
    return this.service.closeTable(id, totalPrice);
  }
}
