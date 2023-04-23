import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserAppService } from "src/user/user-app.service";
import { UserDto } from "src/user/dto/create-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userAppService: UserAppService
  ) {}

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: Omit<UserDto, "_id">): Promise<Partial<UserDto>> {
    const newUser = await this.userAppService.registerUser(userDto);
    return { _id: newUser._id, name: newUser.name, email: newUser.email };
  }
}
