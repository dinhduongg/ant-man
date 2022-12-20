import { SnowflakeBase } from "./support/base.entity";
import { Order as IOrder, paymentResult as IPaymentResult } from "./shared/order.interface";
import { User as IUser, Address as IAddress } from './shared/account.interface';
import { productCart as IProduct } from './shared/cart.interface'
import {
    Entity, Property
} from "@mikro-orm/core";

@Entity()
export class Order extends SnowflakeBase implements IOrder {

    @Property() user: Pick<IUser, 'username' | 'email' | 'fullname' | 'phone'>
    @Property() orderItem: IProduct[]
    @Property() shippingAddress: IAddress
    @Property() paymentResult: IPaymentResult
    @Property() paymentMethod: string
    @Property() taxPrice: number
    @Property() shippingPrice: number
    @Property() totalPrice: number
    @Property() isPaid: boolean
    @Property() isDelivered: boolean
    @Property() paidAt: Date
    @Property() deliveredAt: Date

}
