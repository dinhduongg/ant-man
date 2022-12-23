import { JwtAuthGuard, RolesGuard, AuthUser, Roles } from '@/authentication';
import { AuthorityRole } from '@/entities/shared/enums';
import { ProductDTO } from '@/services/dto/product.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  findAll(): Promise<ProductDTO[]> {
    return this.productService.findAll();
  }

  @Post('create')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AuthorityRole.ADMIN, AuthorityRole.MANAGER)
  create(@Body() dto: ProductDTO): Promise<ProductDTO | any> {
    return this.productService.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProductDTO> {
    return this.productService.findOne(id);
  }

  @Patch('update/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AuthorityRole.ADMIN, AuthorityRole.MANAGER)
  update(@Param('id') id: string, @Body() dto: ProductDTO) {
    return this.productService.update(id, dto);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(AuthorityRole.ADMIN, AuthorityRole.MANAGER)
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
