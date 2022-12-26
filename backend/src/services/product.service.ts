import { Product } from '@/entities/product.entity';
import { Actions } from '@/entities/shared/enums';
import { Pageable, Query as IQuery } from "@/entities/shared/interface";
import { makeFindOptions } from '@/support/utility';
import { wrap } from '@mikro-orm/core';
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { Cache } from 'cache-manager';
import { ProductDTO } from './dto/product.dto';
import { ProductMapper } from './mappers/product.mapper';

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

  async findAll(query: IQuery): Promise<ProductDTO[]> {
    try {
      const { filters, pageable, search, searchType } = query
      const where = {}

      for (var key in filters) {
        if (filters[key] !== 'all') {
          where[key] = filters[key]
        }
      }

      const products = await this.repository.find(where, makeFindOptions(pageable))
      return products.map(product => this.mapper.toDTO(product))
    } catch (error) {
      throw error
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.repository.findOne({ id: id })
      if (!product) throw new HttpException("Không tìm thấy sản phẩm", HttpStatus.BAD_REQUEST)
      return this.mapper.toDTO(product)
    } catch (error) {
      throw error
    }
  }

  async findByAction(action: string, product: ProductDTO): Promise<ProductDTO[]> {
    try {
      const pageable: Pageable = {
        page: 0,
        maxPage: 12,
        sort: {
          field: 'createdAt',
          order: 'd'
        }
      }

      const where = {}

      if (action === Actions.POPULAR) {
        // num review
        pageable.sort['field'] = 'numReviews'
      }

      if (action === Actions.NEW) {
        // created at
        pageable.sort['field'] = 'createdAt'
      }

      if (action === Actions.SALE) {
        // sale
        where['sale'] = { $exists: true }
      }

      if (action === Actions.SOLDCOUNT) {
        // soldCount
        pageable.sort['field'] = 'soldCount'
      }

      if (action === Actions.SIMILAR) {
        where['brand'] = { $in: [product.brand] }
        where['mainSide'] = product.mainSide
      }

      const products = await this.repository.find(where, makeFindOptions(pageable))
      return products.map(product => this.mapper.toDTO(product))
    } catch (error) {
      throw error
    }
  }

  async update(id: string, dto: ProductDTO): Promise<ProductDTO> {
    try {
      const product = await this.repository.findOne({ id })
      if (!product) throw new HttpException('Không tìm thấy sản phẩm', HttpStatus.BAD_REQUEST)
      wrap(product).assign(dto)
      await this.repository.flush()
      return this.mapper.toDTO(product)
    } catch (error) {
      throw error
    }
  }

  async remove(id: string) {
    return await this.repository.nativeDelete({ id })
  }
}
