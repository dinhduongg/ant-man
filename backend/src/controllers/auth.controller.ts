import { LocalAuthGuard } from '@/authentication/guards/local-auth.guard';
import { registerData } from '@/entities/shared/account.interface';
import { AuthService } from '@/services/auth.service';
import { UserDTO } from '@/services/dto/user.dto';
import { Controller, Post, UseGuards, Res, Body, Req } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Req() req, @Res({ passthrough: true }) res) {
        return this.authService.login(req.user, res)
    }

    @Post('register')
    register(@Body() dto: registerData) {
        return this.authService.register(dto)
    }

    @Get('logout')
    logout(@Req() request: Request, @Res() response: Response) {
        return this.authService.logout(request, response)
    }
}
