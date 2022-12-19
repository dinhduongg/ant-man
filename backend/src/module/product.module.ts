import { Module } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductController } from '../controllers/product.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Product } from '@/entities/product.entity';
import { ProductMapper } from '@/services/mappers/product.mapper';

@Module({
  imports: [MikroOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService, ProductMapper]
})
export class ProductModule { }
