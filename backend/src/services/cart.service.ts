import { Cart } from '@/entities/cart.entity';
import { User } from '@/entities/user.entity';
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { Cache } from 'cache-manager';
import { CartDTO } from './dto/cart.dto';
import { CartMapper, ProductCartMapper } from './mappers/cart.mapper';
import { cloneDeep } from 'lodash'
import { generalCartTemplate } from '@/services/support/dictionary'
import { productCart } from '@/entities/shared/cart.interface';
import { HttpException } from '@nestjs/common/exceptions'
import { HttpStatus } from '@nestjs/common/enums'
import { Product } from '@/entities/product.entity';
import { cartType } from '@/entities/shared/enums';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class CartService {

  constructor(
    @InjectRepository(Cart)
    protected readonly repository: MongoEntityRepository<Cart>,
    protected readonly em: EntityManager,
    // protected eventEmitter: EventEmitter2,
    protected readonly mapper: CartMapper,
    protected readonly productCartMapper: ProductCartMapper,
    @Inject(CACHE_MANAGER)
    protected readonly _cache: Cache,
  ) { }

  async findAll(): Promise<CartDTO[]> {
    const carts = await this.repository.find({})
    return carts.map(cart => this.mapper.toDTO(cart))
  }

  async create(dto: Partial<ProductDTO> & { quantity: number, name: string }, username: string): Promise<CartDTO> {
    try {
      const user = await this.em.findOne(User, { username })
      if (!user) throw new HttpException(`Người dùng ${username} không tồn tại`, HttpStatus.BAD_REQUEST)

      const product = await this.em.findOne(Product, { id: dto.id })
      if (!product) throw new HttpException("Sản phẩm không tồn tại!", HttpStatus.BAD_REQUEST)

      const userCart = await this.repository.findOne({ username })

      const productCart = this.productCartMapper.toEntity(dto)

      if (userCart) {
        const isExistProduct = userCart.products.find(item => item.id === dto.id)
        if (isExistProduct) throw new HttpException("Sản phẩm đã tồn tại trong giỏ hàng!", HttpStatus.BAD_REQUEST)

        userCart.products.push(productCart)
        userCart.totalPrice += productCart.totalMoney
        userCart.totalQuantity += productCart.quantity

        await this.repository.flush()
        return this.mapper.toDTO(userCart)
      }

      const cart = this.repository.create(cloneDeep(generalCartTemplate))
      cart.username = username
      cart.products.push(productCart)
      cart.totalPrice += productCart.totalMoney
      cart.totalQuantity += productCart.quantity

      await this.repository.flush()
      return this.mapper.toDTO(cart)
    } catch (error) {
      throw error
    }
  }

  async findOne(username: string): Promise<CartDTO> {
    try {
      const cart = await this.repository.findOne({ username })
      return this.mapper.toDTO(cart)
    } catch (error) {
      throw error
    }
  }

  async update(username: string, dto: Partial<productCart> & { type: string }) {
    try {
      const user = await this.em.findOne(User, { username })
      if (!user) throw new HttpException(`Người dùng ${username} không tồn tại`, HttpStatus.BAD_REQUEST)

      const isExistProduct = await this.em.findOne(Product, { id: dto.id })
      if (!isExistProduct) throw new HttpException("Sản phẩm không tồn tại!", HttpStatus.BAD_REQUEST)

      const userCart = await this.repository.findOne({ username })
      if (!userCart) throw new HttpException("Giỏ hàng của bạn không tồn tại!", HttpStatus.BAD_REQUEST)

      const product = userCart.products.find(item => item.id === dto.id)
      if (dto.type === cartType.increase) {
        product.quantity += 1
        product.totalMoney = (product.quantity * product.price)

        userCart.totalPrice = userCart.products.reduce((sum, item) => sum + item.totalMoney, 0)
        userCart.totalQuantity = userCart.products.reduce((sum, item) => sum + item.quantity, 0)

        this.repository.persist(userCart)
      } else {
        product.quantity = product.quantity === 1 ? 1 : product.quantity - 1
        product.totalMoney = (product.quantity * product.price)

        userCart.totalPrice = userCart.products.reduce((sum, item) => sum + item.totalMoney, 0)
        userCart.totalQuantity = userCart.products.reduce((sum, item) => sum + item.quantity, 0)

        this.repository.persist(userCart)
      }

      await this.repository.flush()
      return this.mapper.toDTO(userCart)
    } catch (error) {
      throw error
    }
  }

  async remove(id: string, username: string) {
    try {
      const userCart = await this.repository.findOne({ username })
      if (!userCart) throw new HttpException("Giỏ hàng của bạn không tồn tại!", HttpStatus.BAD_REQUEST)

      userCart.products = userCart.products.filter(item => item.id !== id)
      await this.repository.persistAndFlush(userCart)
    } catch (error) {
      throw error
    }
  }
}
