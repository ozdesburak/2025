import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsModule } from './restaurants/restaurant.module';
import { TablesModule } from './tables/table.module';
import { OrdersModule } from './orders/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/restaurant'),
    RestaurantsModule,
    TablesModule,
    OrdersModule,
  ],
})
export class AppModule {}
