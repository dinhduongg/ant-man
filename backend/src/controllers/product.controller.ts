import { JwtAuthGuard, Roles, RolesGuard } from '@/authentication';
import { AuthorityRole } from '@/entities/shared/enums';
import { Query as IQuery } from '@/entities/shared/interface';
import { ProductDTO } from '@/services/dto/product.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  findAll(@Query() query: IQuery): Promise<ProductDTO[]> {
    return this.productService.findAll(query);
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

  @Get('action/:action')
  findByAction(@Param('action') action: string, @Query() product: ProductDTO): Promise<ProductDTO[]> {
    return this.productService.findByAction(action, product)
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
