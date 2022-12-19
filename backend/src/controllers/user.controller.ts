import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { UserService } from '../services/user.service'
import { UserDTO } from '@/services/dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post('create')
  create(@Body() dto: UserDTO): Promise<UserDTO> {
    return this.userService.create(dto);
  }

  @Get(':username')
  findOne(@Param('username') username: string): Promise<UserDTO> {
    return this.userService.findOne(username);
  }

  @Patch('update/:username')
  update(@Param('username') username: string, @Body() dto: UserDTO): Promise<UserDTO> {
    return this.userService.update(username, dto);
  }

  @Patch(':username/password/:action')
  resetPassword(@Param('username') username: string, @Param('action') action: string, @Body() dto: UserDTO): Promise<UserDTO> {
    return this.userService.resetPassword(username, action, dto);
  }

  @Delete('delete/:username')
  remove(@Param('username') username: string) {
    return this.userService.remove(username);
  }
}
