import { Injectable } from "@nestjs/common"
import { Builder } from 'builder-pattern'
import { productWishDTO, WhistListDTO } from "../dto/whist-list.dto"
import { WhistList } from "@/entities/whist-list.entity"
import { ProductDTO } from "../dto/product.dto"

@Injectable()
export class WhistListMapper {
    toDTO(source: WhistList): WhistListDTO {
        return Builder(WhistListDTO)
            .username(source.username)
            .products(source.products)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }

    toEntity(source: Partial<WhistListDTO>): WhistList {
        return Builder(WhistList)
            .username(source.username)
            .products(source.products)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }
}

export class ProductWishMapper {
    toEntity(source: Partial<ProductDTO>): productWishDTO {
        return Builder(productWishDTO)
            .id(source.id)
            .price(source.price)
            .name(source.title)
            .image(source.image)
            .mainSide(source.mainSide)
            .brand(source.brand)
            .build()
    }
}