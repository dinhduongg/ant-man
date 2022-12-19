import { ProductDTO } from '@/services/dto/product.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  findAll(): Promise<ProductDTO[]> {
    return this.productService.findAll();
  }

  @Post('create')
  create(@Body() dto: ProductDTO): Promise<ProductDTO | any> {
    return this.productService.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProductDTO> {
    return this.productService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() dto: ProductDTO) {
    return this.productService.update(id, dto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
