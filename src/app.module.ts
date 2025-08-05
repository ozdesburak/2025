import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { EventsModule } from './events/events.module';
import { ReservationsModule } from './reservations/reservations.module';
import { WalletModule } from './wallet/wallet.module';
import { TablesModule } from './tables/tables.module';
import { RoomsModule } from './rooms/rooms.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { AiModule } from './ai/ai.module';
import { IotModule } from './iot/iot.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/restaurant'),
    UsersModule,
    AuthModule,
    OrdersModule,
    ProductsModule,
    CampaignsModule,
    EventsModule,
    ReservationsModule,
    WalletModule,
    TablesModule,
    RoomsModule,
    ReviewsModule,
    AiModule,
    IotModule,
  ],
})
export class AppModule {}
