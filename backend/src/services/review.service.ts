import { Product } from '@/entities/product.entity';
import { Review } from '@/entities/review.entity';
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { Cache } from 'cache-manager';
import { cloneDeep } from 'lodash';
import { ReviewDTO } from './dto/review.dto';
import { ReviewMapper } from './mappers/review.mapper';
import { generalReviewTemplate } from './support/dictionary';

@Injectable()
export class ReviewService {

  constructor(
    @InjectRepository(Review)
    protected readonly repository: MongoEntityRepository<Review>,
    protected readonly em: EntityManager,
    // protected eventEmitter: EventEmitter2,
    protected readonly mapper: ReviewMapper,
    @Inject(CACHE_MANAGER)
    protected readonly _cache: Cache,
  ) { }

  findAll() {
    return `This action returns all review`;
  }

  async getProductReview(productId: string): Promise<ReviewDTO[]> {
    try {
      const reviews = await this.repository.find({ productId: { $in: [productId] } })
      return reviews.map(review => this.mapper.toDTO(review))
    } catch (error) {
      throw error
    }
  }

  async create(username: string, productId: string, dto: ReviewDTO) {
    try {
      const alreadyReviewed = await this.repository.findOne({ username, productId })
      if (alreadyReviewed) throw new HttpException('Bạn đã đánh giá sản phẩm này rồi!', HttpStatus.BAD_REQUEST)

      const review = this.repository.create(cloneDeep(generalReviewTemplate))
      review.username = username
      review.productId = productId
      review.rating = dto.rating
      review.comment = dto.comment
      await this.repository.persistAndFlush(review)

      const reviews = await this.repository.find({ productId: { $in: [productId] } })
      const product = await this.em.findOne(Product, { id: productId })

      product.numReviews = reviews.length
      product.rating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length
      await this.em.persistAndFlush(product)

      return this.mapper.toDTO(review)
    } catch (error) {
      throw error
    }
  }

  async findOne(id: string): Promise<ReviewDTO> {
    try {
      const review = await this.repository.findOne({ id })
      return this.mapper.toDTO(review)
    } catch (error) {
      throw error
    }
  }

  async update(id: string, dto: ReviewDTO): Promise<ReviewDTO> {
    try {
      const review = await this.repository.findOne({ id })

      review.rating = dto.rating ? dto.rating : review.rating
      review.comment = dto.comment ? dto.comment : review.comment
      await this.repository.persistAndFlush(review)

      const reviews = await this.repository.find({ productId: { $in: [review.productId] } })
      const product = await this.em.findOne(Product, { id: review.productId })

      product.numReviews = reviews.length
      product.rating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length
      await this.em.persistAndFlush(product)

      return this.mapper.toDTO(review)
    } catch (error) {
      throw error
    }
  }

  async remove(id: string) {
    try {
      const review = await this.repository.nativeDelete({ id })
      return review
    } catch (error) {
      throw error
    }
  }
}
