import { Controller, Request, Post, UseGuards, Get, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./infrastructure/local-auth.guard";
import { JwtAuthGuard } from "./infrastructure/jwt-auth.guard";
import { UserDto } from "src/user/domain/dto/create-user.dto";

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("auth/login")
  async login(@Body() userDto: Omit<UserDto, "_id">) {
    return this.authService.login(userDto);
  }

  @Post("auth/register")
  async register(@Body() userDto: Omit<UserDto, "_id">): Promise<Partial<UserDto>>{
    return this.authService.register(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("auth/profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
