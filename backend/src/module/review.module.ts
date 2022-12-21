import { Review } from '@/entities/review.entity';
import { ReviewMapper } from '@/services/mappers/review.mapper';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ReviewController } from '../controllers/review.controller';
import { ReviewService } from '../services/review.service';

@Module({
  imports: [MikroOrmModule.forFeature([Review])],
  controllers: [ReviewController],
  providers: [ReviewService, ReviewMapper]
})
export class ReviewModule { }
