import { Entity, Property } from '@mikro-orm/core'
import { Product as IProduct } from '@/entities/shared/product.interface'
import { SnowflakeBase } from '@/entities/support/base.entity'

@Entity()
export class Product extends SnowflakeBase implements IProduct {

    @Property() title: string
    @Property() mainSide: 'male' | 'female'
    @Property() price: number
    @Property() brand: string
    @Property() rating: number
    @Property() numReviews: number
    @Property() countInStock: number
    @Property() sale: number
    @Property() soldCount: number
    @Property() description: string
    @Property() image: string
    @Property() imageGalley: string[]

}