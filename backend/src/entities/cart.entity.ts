import { Cart as ICart, productCart } from '@/entities/shared/cart.interface'
import { Base } from '@/entities/support/base.entity'
import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class Cart extends Base implements ICart {

    @PrimaryKey({ fieldName: '_id' }) username: string
    @Property() totalPrice: number
    @Property() totalQuantity: number
    @Property() products: productCart[]

}