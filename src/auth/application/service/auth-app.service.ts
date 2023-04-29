import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserDto } from "src/user/domain/dto/create-user.dto";
import { UserService } from "src/user/application/user.service";

@Injectable()
export class AuthAppService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async login(user: UserDto) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: Omit<UserDto, "_id">): Promise<Partial<UserDto>> {
    const { name, email, password } = userDto;
    console.log(userDto)
    const newUser = await this.userService.registerUser(name, email, password);
    return { _id: newUser._id, name: newUser.name, email: newUser.email };
  }
}