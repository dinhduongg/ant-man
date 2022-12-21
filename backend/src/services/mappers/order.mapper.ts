import { Injectable } from '@nestjs/common'
import { Builder } from 'builder-pattern'
import { OrderDTO } from '../dto/order.dto'
import { Order } from '@/entities/order.entity'

@Injectable()
export class OrderMapper {
    toDTO(source: Order): OrderDTO {
        return Builder(OrderDTO)
            .id(source.id)
            .user(source.user)
            .orderItem(source.orderItem)
            .shippingAddress(source.shippingAddress)
            .paymentResult(source.paymentResult)
            .paymentMethod(source.paymentMethod)
            .taxPrice(source.taxPrice)
            .shippingPrice(source.shippingPrice)
            .totalPrice(source.totalPrice)
            .isPaid(source.isPaid)
            .isDelivered(source.isDelivered)
            .paidAt(source.paidAt)
            .deliveredAt(source.deliveredAt)
            .build()
    }

    toEntity(source: Partial<OrderDTO>): Order {
        return Builder(Order)
            .id(source.id)
            .user(source.user)
            .orderItem(source.orderItem)
            .shippingAddress(source.shippingAddress)
            .paymentResult(source.paymentResult)
            .paymentMethod(source.paymentMethod)
            .taxPrice(source.taxPrice)
            .shippingPrice(source.shippingPrice)
            .totalPrice(source.totalPrice)
            .isPaid(source.isPaid)
            .isDelivered(source.isDelivered)
            .paidAt(source.paidAt)
            .deliveredAt(source.deliveredAt)
            .build()
    }
}