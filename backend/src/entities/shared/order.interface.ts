import { productCart as IProduct } from '@/entities/shared/cart.interface'
import { User as IUser, Address as IAddress } from '@/entities/shared/account.interface'

export interface paymentResult {
    username: string
    status: boolean
    update_time: Date
    email: string
}

export interface Order {
    user: Pick<IUser, 'username' | 'email' | 'fullname' | 'phone'>
    orderItem: IProduct[]
    shippingAddress: IAddress
    paymentResult: paymentResult
    paymentMethod: string
    taxPrice: number
    shippingPrice: number
    totalPrice: number
    isPaid: boolean
    isDelivered: boolean
    paidAt: Date
    deliveredAt: Date
} 