import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhistListService } from '../services/whist-list.service';

@Controller('whist-list')
export class WhistListController {
  constructor(private readonly whistListService: WhistListService) { }

  @Post('create/:username')
  create(@Param('username') username: string, @Body() dto: any) {
    return this.whistListService.create(username, dto);
  }

  @Get()
  findAll() {
    return this.whistListService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.whistListService.findOne(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.whistListService.update(+id, dto);
  }

  @Delete('delete/:username/:id')
  remove(@Param('username') username: string, @Param('id') id: string) {
    return this.whistListService.remove(username, id);
  }
}
