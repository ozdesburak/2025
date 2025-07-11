import { Body, Controller, Get, Post } from '@nestjs/common';
import { RestaurantsService } from './restaurant.service';
import { Restaurant } from './restaurant.schema';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private service: RestaurantsService) {}

  @Post()
  create(@Body() data: Partial<Restaurant>) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
