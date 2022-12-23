import { LocalAuthGuard } from '@/authentication/guards/local-auth.guard';
import { registerData } from '@/entities/shared/account.interface';
import { AuthService } from '@/services/auth.service';
import { Controller, Post, Request, UseGuards, Response, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req, @Response({ passthrough: true }) res) {
        return this.authService.login(req.user, res)
    }

    @Post('register')
    register(@Body() dto: registerData) {
        return this.authService.register(dto)
    }
}
