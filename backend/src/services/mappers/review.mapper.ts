import { Injectable } from "@nestjs/common"
import { Builder } from 'builder-pattern'
import { ReviewDTO } from "../dto/review.dto"
import { Review } from "@/entities/review.entity"

@Injectable()
export class ReviewMapper {
    toDTO(source: Review): ReviewDTO {
        return Builder(ReviewDTO)
            .id(source.id)
            .rating(source.rating)
            .comment(source.comment)
            .username(source.username)
            .productId(source.productId)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }

    toEntity(source: Partial<ReviewDTO>): Review {
        return Builder(Review)
            .id(source.id)
            .rating(source.rating)
            .comment(source.comment)
            .username(source.username)
            .productId(source.productId)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }
}