import { Cart } from '@/entities/cart.entity';
import { User } from '@/entities/user.entity';
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { CACHE_MANAGER, Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators/core/inject.decorator';
import { Cache } from 'cache-manager';
import { CartDTO } from './dto/cart.dto';
import { CartMapper } from './mappers/cart.mapper';
import { cloneDeep } from 'lodash'
import { generalCartTemplate } from '@/services/support/dictionary'
import { productCart } from '@/entities/shared/cart.interface';
import { HttpException } from '@nestjs/common/exceptions'
import { HttpStatus } from '@nestjs/common/enums'
import { Product } from '@/entities/product.entity';
import { cartType } from '@/entities/shared/enums';

@Injectable()
export class CartService {

  constructor(
    @InjectRepository(Cart)
    protected readonly repository: MongoEntityRepository<Cart>,
    protected readonly em: EntityManager,
    // protected eventEmitter: EventEmitter2,
    protected readonly mapper: CartMapper,
    @Inject(CACHE_MANAGER)
    protected readonly _cache: Cache,
  ) { }

  async findAll(): Promise<CartDTO[]> {
    const carts = await this.repository.find({})
    return carts.map(cart => this.mapper.toDTO(cart))
  }

  async create(dto: productCart, username: string): Promise<CartDTO> {
    const user = await this.em.findOne(User, { username })
    if (!user) throw new HttpException(`Người dùng ${username} không tồn tại`, HttpStatus.BAD_REQUEST)

    const product = await this.em.findOne(Product, { id: dto.id })
    if (!product) throw new HttpException("Sản phẩm không tồn tại!", HttpStatus.BAD_REQUEST)

    const userCart = await this.repository.findOne({ username })
    dto.totalMoney = dto.quantity * dto.price

    if (userCart) {
      const isExistProduct = userCart.products.find(item => item.id === dto.id)
      if (isExistProduct) {
        isExistProduct.quantity += dto.quantity
        isExistProduct.totalMoney = isExistProduct.quantity * isExistProduct.price

        userCart.totalQuantity += dto.quantity
        userCart.totalPrice += dto.totalMoney

        await this.repository.flush()
        return this.mapper.toDTO(userCart)
      } else {
        userCart.username = username
        userCart.products.push(dto)
        userCart.totalPrice += dto.totalMoney
        userCart.totalQuantity += dto.quantity

        await this.repository.flush()
        return this.mapper.toDTO(userCart)
      }
    }

    const cart = this.repository.create(cloneDeep(generalCartTemplate))
    cart.username = username
    cart.products.push(dto)
    cart.totalPrice += dto.totalMoney
    cart.totalQuantity += dto.quantity

    await this.repository.flush()
    return this.mapper.toDTO(cart)
  }

  async findOne(username: string): Promise<CartDTO> {
    const cart = await this.repository.findOne({ username })
    return this.mapper.toDTO(cart)
  }

  async update(username: string, type: cartType, dto: productCart) {
    const user = await this.em.findOne(User, { username })
    if (!user) throw new HttpException(`Người dùng ${username} không tồn tại`, HttpStatus.BAD_REQUEST)

    const product = await this.em.findOne(Product, { id: dto.id })
    if (!product) throw new HttpException("Sản phẩm không tồn tại!", HttpStatus.BAD_REQUEST)

    const userCart = await this.repository.findOne({ username })
    if (!userCart) throw new HttpException("Giỏ hàng của bạn không tồn tại!", HttpStatus.BAD_REQUEST)

    dto.totalMoney = dto.quantity * dto.price

    if (type === cartType.increase) {
      const product = userCart.products.find(item => item.id === dto.id)
      product.quantity += dto.quantity
      product.totalMoney += (dto.quantity * dto.price)

      userCart.totalPrice += (dto.price * dto.quantity)
      userCart.totalQuantity += dto.quantity

      await this.repository.flush()
      return this.mapper.toDTO(userCart)
    } else {
      const product = userCart.products.find(item => item.id === dto.id)
      product.quantity -= dto.quantity
      product.totalMoney -= (dto.quantity * dto.price)

      userCart.totalPrice -= (dto.price * dto.quantity)
      userCart.totalQuantity -= dto.quantity

      await this.repository.flush()
      return this.mapper.toDTO(userCart)
    }
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
