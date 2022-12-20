import { productCart } from '@/entities/shared/cart.interface';
import { cartType } from '@/entities/shared/enums';
import { CartDTO } from '@/services/dto/cart.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CartService } from '../services/cart.service';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @Get()
  findAll(): Promise<CartDTO[]> {
    return this.cartService.findAll();
  }

  @Post('create/:username')
  create(@Body() dto: productCart, @Param('username') username: string): Promise<CartDTO> {
    return this.cartService.create(dto, username);
  }

  @Get(':username')
  findOne(@Param('username') username: string): Promise<CartDTO> {
    return this.cartService.findOne(username);
  }

  @Patch(':username/:type')
  update(@Param('username') username: string, @Param('type') type: cartType, @Body() dto: productCart) {
    return this.cartService.update(username, type, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
