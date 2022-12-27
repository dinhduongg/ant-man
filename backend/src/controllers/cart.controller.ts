import { productCart } from '@/entities/shared/cart.interface';
import { AuthorityRole, cartType } from '@/entities/shared/enums';
import { CartDTO } from '@/services/dto/cart.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CartService } from '../services/cart.service';
import { JwtAuthGuard, RolesGuard, Roles } from '@/authentication'

@Controller('carts')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @Get()
  findAll(): Promise<CartDTO[]> {
    return this.cartService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string): Promise<CartDTO> {
    return this.cartService.findOne(username);
  }

  @Post('create/:username')
  create(@Body() dto: productCart, @Param('username') username: string): Promise<CartDTO> {
    return this.cartService.create(dto, username);
  }

  @Patch('update/:username')
  update(@Param('username') username: string, @Body() dto: Partial<productCart> & { type: string }) {
    return this.cartService.update(username, dto);
  }

  @Delete('delete/:username/:id')
  remove(@Param('id') id: string, @Param('username') username: string) {
    return this.cartService.remove(id, username);
  }
}
