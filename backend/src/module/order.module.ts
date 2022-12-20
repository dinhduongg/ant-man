import { Module } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { OrderController } from '../controllers/order.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Order } from '@/entities/order.entity';
import { OrderMapper } from '@/services/mappers/order.mapper';

@Module({
  imports: [MikroOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderService, OrderMapper]
})
export class OrderModule { }
