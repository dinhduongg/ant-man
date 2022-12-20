import { Cart } from '@/entities/cart.entity';
import { CartMapper } from '@/services/mappers/cart.mapper';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CartController } from '../controllers/cart.controller';
import { CartService } from '../services/cart.service';

@Module({
  imports: [MikroOrmModule.forFeature([Cart])],
  controllers: [CartController],
  providers: [CartService, CartMapper]
})
export class CartModule { }
