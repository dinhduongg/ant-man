import { JwtAuthGuard, RolesGuard } from '@/authentication';
import { ReviewDTO } from '@/services/dto/review.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
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
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Param('username') username: string, @Param('productId') productId: string, @Body() dto: ReviewDTO) {
    return this.reviewService.create(username, productId, dto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  findOne(@Param('id') id: string): Promise<ReviewDTO> {
    return this.reviewService.findOne(id);
  }

  @Patch('update/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(@Param('id') id: string, @Body() dto: ReviewDTO): Promise<ReviewDTO> {
    return this.reviewService.update(id, dto);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id') id: string) {
    return this.reviewService.remove(id);
  }
}
