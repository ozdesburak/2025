import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TablesService } from './tables.service';
import { TablesController } from './tables.controller';
import { Table, TableSchema } from './table.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Table.name, schema: TableSchema }])],
  providers: [TablesService],
  controllers: [TablesController],
})
export class TablesModule {}
