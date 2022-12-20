import { Cart as ICart, productCart } from '@/entities/shared/cart.interface'

export class CartDTO implements ICart {
    username: string
    products: productCart[]
    totalPrice: number
    totalQuantity: number
    createdAt: Date
    updatedAt: Date
}