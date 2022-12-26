import { Product } from "@/entities/product.entity";
import { Injectable } from "@nestjs/common";
import { Builder } from "builder-pattern";
import { ProductDTO } from "../dto/product.dto";

@Injectable()
export class ProductMapper {
    toDTO(source: Product): ProductDTO {
        return Builder(ProductDTO)
            .id(source.id)
            .title(source.title)
            .mainSide(source.mainSide)
            .price(source.price)
            .brand(source.brand)
            .rating(source.rating)
            .numReviews(source.numReviews)
            .countInStock(source.countInStock)
            .sale(source.sale)
            .soldCount(source.soldCount)
            .description(source.description)
            .image(source.image)
            .imageGalley(source.imageGalley)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }

    toEntity(source: Partial<ProductDTO>): Product {
        return Builder(Product)
            .id(source.id)
            .title(source.title)
            .mainSide(source.mainSide)
            .price(source.price)
            .brand(source.brand)
            .rating(source.rating)
            .numReviews(source.numReviews)
            .countInStock(source.countInStock)
            .sale(source.sale)
            .soldCount(source.soldCount)
            .description(source.description)
            .image(source.image)
            .imageGalley(source.imageGalley)
            .createdAt(source.createdAt)
            .updatedAt(source.updatedAt)
            .build()
    }
}