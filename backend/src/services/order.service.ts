import { Cart } from '@/entities/cart.entity';
import { Order } from '@/entities/order.entity';
import { User } from '@/entities/user.entity';
import { EntityManager, MongoEntityRepository } from '@mikro-orm/mongodb';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/common/cache';
import { Cache } from 'cache-manager';
import { OrderDTO } from './dto/order.dto';
import { OrderMapper } from './mappers/order.mapper';
import { generalOrderTemplate } from './support/dictionary';
import { cloneDeep } from 'lodash'
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order)
    protected readonly repository: MongoEntityRepository<Order>,
    protected readonly em: EntityManager,
    // protected eventEmitter: EventEmitter2,
    protected readonly mapper: OrderMapper,
    @Inject(CACHE_MANAGER)
    protected readonly _cache: Cache,
  ) { }

  findAll() {
    return `This action returns all order`;
  }

  async create(username: string, dto: OrderDTO): Promise<any> {
    const user = await this.em.findOne(User, { username })
    if (!user) throw new HttpException(`Người dùng ${username} không tồn tại!`, HttpStatus.BAD_REQUEST)

    const userCart = await this.em.findOne(Cart, { username })
    if (userCart.products.length === 0) throw new HttpException("Giỏ hàng chưa có gì. Mời bạn mua hàng", HttpStatus.BAD_REQUEST)

    const order = this.repository.create(cloneDeep(generalOrderTemplate))

    // user order
    order.user.email = user.email
    order.user.fullname = user.fullname
    order.user.phone = user.phone
    order.user.username = username

    // order items
    order.orderItem = [...userCart.products]

    // shipping address
    order.shippingAddress.city = user.city
    order.shippingAddress.country = user.country
    order.shippingAddress.postalCode = user.postalCode
    order.shippingAddress.street = user.street

    // payment result
    order.paymentResult.username = username
    order.paymentResult.status = false
    order.paymentResult.email = user.email
    order.paymentResult.update_time = undefined

    // other
    order.paymentMethod = dto.paymentMethod
    order.taxPrice = dto.taxPrice
    order.shippingPrice = dto.shippingPrice
    order.totalPrice = userCart.totalPrice
    order.isPaid = dto.isPaid
    order.isDelivered = dto.isDelivered
    order.paidAt = dto.paidAt
    order.deliveredAt = dto.deliveredAt

    await this.repository.persistAndFlush(order)
    return this.mapper.toDTO(order)
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: any) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
