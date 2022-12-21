import { Review as IReview } from '@/entities/shared/review.interface'
import { SnowflakeBase } from '@/entities/support/base.entity'
import { Entity, Property } from '@mikro-orm/core'

@Entity()
export class Review extends SnowflakeBase implements IReview {
    @Property() rating: number
    @Property() comment: string
    @Property() username: string
    @Property() productId: string
}