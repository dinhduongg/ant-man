import { Review as IReview } from '@/entities/shared/review.interface'

export class ReviewDTO implements IReview {
    id: string
    rating: number
    comment: string
    username: string
    productId: string
    createdAt: Date
    updatedAt: Date
}
