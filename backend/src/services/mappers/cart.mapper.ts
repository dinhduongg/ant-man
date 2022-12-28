import { Injectable } from "@nestjs/common"
import { Builder } from 'builder-pattern'
import { CartDTO, productCartDTO } from "../dto/cart.dto"
import { Cart } from "@/entities/cart.entity"
import { productCart } from '@/entities/shared/cart.interface'
import { ProductDTO } from "../dto/product.dto"

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

export class ProductCartMapper {
    toEntity(source: Partial<ProductDTO> & { quantity: number, name: string }): productCartDTO {
        return Builder(productCartDTO)
            .id(source.id)
            .price(source.price)
            .quantity(source.quantity)
            .name(source.title ?? source.name)
            .totalMoney(source.quantity * source.price)
            .image(source.image)
            .build()
    }
}