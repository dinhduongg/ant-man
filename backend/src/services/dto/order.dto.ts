import { Address, User } from '@/entities/shared/account.interface'
import { productCart } from '@/entities/shared/cart.interface'
import { Order as IOrder, paymentResult } from '@/entities/shared/order.interface'

export class OrderDTO implements IOrder {
    id: string
    user: Pick<User, 'username' | 'email' | 'fullname' | 'phone'>
    orderItem: productCart[]
    shippingAddress: Address
    paymentResult: paymentResult
    paymentMethod: string
    taxPrice: number
    shippingPrice: number
    totalPrice: number
    isPaid: boolean
    isDelivered: boolean
    paidAt: Date
    deliveredAt: Date
    createdAt: Date
    updatedAt: Date
}