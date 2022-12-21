import { ReviewDTO } from '@/services/dto/review.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewService } from '../services/review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) { }

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Get('get/:productId')
  getProductReview(@Param('productId') productId: string): Promise<ReviewDTO[]> {
    return this.reviewService.getProductReview(productId);
  }

  @Post('create/:username/:productId')
  create(@Param('username') username: string, @Param('productId') productId: string, @Body() dto: ReviewDTO) {
    return this.reviewService.create(username, productId, dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ReviewDTO> {
    return this.reviewService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() dto: ReviewDTO): Promise<ReviewDTO> {
    return this.reviewService.update(id, dto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.reviewService.remove(id);
  }
}
