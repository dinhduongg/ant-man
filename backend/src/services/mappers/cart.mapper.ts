import { Injectable } from "@nestjs/common"
import { Builder } from 'builder-pattern'
import { CartDTO } from "../dto/cart.dto"
import { Cart } from "@/entities/cart.entity"

@Injectable()
export class CartMapper {
    toDTO(source: Cart): CartDTO {
        return Builder(CartDTO)
            .username(source.username)
            .products(source.products)
            .totalPrice(source.totalPrice)
            .totalQuantity(source.totalQuantity)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }

    toEntity(source: Partial<CartDTO>): Cart {
        return Builder(Cart)
            .username(source.username)
            .products(source.products)
            .totalPrice(source.totalPrice)
            .totalQuantity(source.totalQuantity)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }
}