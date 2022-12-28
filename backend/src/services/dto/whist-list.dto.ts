import { productWhist, WhistList as IWhistList } from '@/entities/shared/whist-list.interface'

export class productWishDTO implements productWhist {
    id: string
    price: number
    name: string
    image: string
    brand: string
    mainSide: string
}

export class WhistListDTO implements IWhistList {
    username: string
    products: productWhist[]

    createdAt: Date
    updatedAt: Date
}
