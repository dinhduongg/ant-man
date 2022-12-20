import { OrderDTO } from '@/services/dto/order.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Post('create/:username')
  create(@Param('username') username: string, @Body() dto: OrderDTO) {
    return this.orderService.create(username, dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: OrderDTO) {
    return this.orderService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
