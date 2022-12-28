import { WhistList } from '@/entities/whist-list.entity';
import { ProductWishMapper, WhistListMapper } from '@/services/mappers/whist-list.mapper';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { WhistListController } from '../controllers/whist-list.controller';
import { WhistListService } from '../services/whist-list.service';

@Module({
  imports: [MikroOrmModule.forFeature([WhistList])],
  controllers: [WhistListController],
  providers: [WhistListService, WhistListMapper, ProductWishMapper]
})
export class WhistListModule { }
