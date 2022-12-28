import { Cart as ICart, productCart } from '@/entities/shared/cart.interface'

export class productCartDTO implements productCart {
    id: string
    quantity: number
    price: number
    name: string
    totalMoney: number
    image: string
}

export class CartDTO implements ICart {
    username: string
    products: productCart[]
    totalPrice: number
    totalQuantity: number
    createdAt: Date
    updatedAt: Date
}