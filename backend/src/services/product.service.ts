import { Product } from '@/entities/product.entity';
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { Cache } from 'cache-manager';
import { wrap } from '@mikro-orm/core';
import { ProductDTO } from './dto/product.dto';
import { ProductMapper } from './mappers/product.mapper';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    protected readonly repository: MongoEntityRepository<Product>,
    protected readonly em: EntityManager,
    // protected eventEmitter: EventEmitter2,
    protected readonly mapper: ProductMapper,
    @Inject(CACHE_MANAGER)
    protected readonly _cache: Cache,
  ) { }

  async create(dto: ProductDTO): Promise<ProductDTO | any> {
    try {
      const product = this.repository.create(this.mapper.toEntity(dto))
      await this.repository.persistAndFlush(product)
      return this.mapper.toDTO(product)
    } catch (error) {
      console.log("lỗi catch: ", error)
    }
  }

  async findAll(): Promise<ProductDTO[]> {
    try {
      const products = await this.repository.find({})
      return products.map(product => this.mapper.toDTO(product))
    } catch (error) {
      console.log("lỗi catch: ", error)
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.repository.findOne({ id: id })
      if (!product) throw new HttpException("Không tìm thấy sản phẩm", HttpStatus.BAD_REQUEST)
      return this.mapper.toDTO(product)
    } catch (error) {
      console.log("lỗi catch: ", error)
    }
  }

  async update(id: string, dto: ProductDTO): Promise<ProductDTO> {
    const product = await this.repository.findOne({ id })
    if (!product) throw new HttpException('Không tìm thấy sản phẩm', HttpStatus.BAD_REQUEST)
    wrap(product).assign(dto)
    await this.repository.flush()
    return this.mapper.toDTO(product)
  }

  async remove(id: string) {
    return await this.repository.nativeDelete({ id })
  }
}
