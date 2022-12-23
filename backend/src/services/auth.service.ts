import { registerData } from '@/entities/shared/account.interface';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username)
    const match = await compare(password, user.password)
    if (user && match) {
      const { password, createdAt, updatedAt, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserDTO, res) {
    try {
      const accessToken = this.jwtService.sign(user)

      res.cookie('jwt', accessToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      })

      return { accessToken };
    } catch (error) {
      throw error
    }
  }

  async register(dto: registerData) {
    await this.userService.create(dto)
  }
}
