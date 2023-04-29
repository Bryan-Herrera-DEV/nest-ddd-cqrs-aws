import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { UserAppService } from "./user-app.service";
import { UserDto } from "./domain/dto/create-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userAppService: UserAppService) {}

  @Post("register")
  async registerUser(@Body() userDto: Omit<UserDto, "_id">): Promise<Partial<UserDto>> {
    return this.userAppService.registerUser(userDto);
  }
}
