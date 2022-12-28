import { Product } from '@/entities/product.entity';
import { productWhist } from '@/entities/shared/whist-list.interface';
import { User } from '@/entities/user.entity';
import { WhistList } from '@/entities/whist-list.entity';
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { Cache } from 'cache-manager';
import { cloneDeep } from 'lodash';
import { ProductWishMapper, WhistListMapper } from './mappers/whist-list.mapper';
import { generalWishTemplate } from './support/dictionary';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class WhistListService {

  constructor(
    @InjectRepository(WhistList)
    protected readonly repository: MongoEntityRepository<WhistList>,
    protected readonly em: EntityManager,
    // protected eventEmitter: EventEmitter2,
    protected readonly mapper: WhistListMapper,
    protected readonly productWishMapper: ProductWishMapper,
    @Inject(CACHE_MANAGER)
    protected readonly _cache: Cache,
  ) { }

  async create(username: string, dto: ProductDTO) {
    try {
      const user = await this.em.findOne(User, { username })
      if (!user) throw new HttpException(`Người dùng ${username} không tồn tại`, HttpStatus.BAD_REQUEST)

      const product = await this.em.findOne(Product, { id: dto.id })
      if (!product) throw new HttpException("Sản phẩm không tồn tại!", HttpStatus.BAD_REQUEST)

      const userWish = await this.repository.findOne({ username })
      const productWish = this.productWishMapper.toEntity(dto)

      if (userWish) {
        const isExistProduct = userWish.products.find(item => item.id === dto.id)
        if (isExistProduct) throw new HttpException("Sản phẩm đã tồn tại trong danh sách yêu thích!", HttpStatus.BAD_REQUEST)

        userWish.products.push(productWish)

        await this.repository.flush()
        return this.mapper.toDTO(userWish)
      }

      const wish = this.repository.create(cloneDeep(generalWishTemplate))
      wish.username = username
      wish.products.push(productWish)

      await this.repository.flush()
      return this.mapper.toDTO(wish)
    } catch (error) {
      throw error
    }
  }

  findAll() {
    try {
      return `This action returns all whistList`;
    } catch (error) {
      throw error
    }
  }

  async findOne(username: string) {
    try {
      const wish = await this.repository.findOne({ username })
      return this.mapper.toDTO(wish)
    } catch (error) {
      throw error
    }
  }

  update(id: number, dto: any) {
    return `This action updates a #${id} whistList`;
  }

  async remove(username: string, id: string) {
    try {
      const userWish = await this.repository.findOne({ username })
      if (!userWish) throw new HttpException("Danh sách yêu thích không tồn tại!", HttpStatus.BAD_REQUEST)

      userWish.products = userWish.products.filter(item => item.id !== id)
      await this.repository.persistAndFlush(userWish)
    } catch (error) {
      throw error
    }
  }
}
