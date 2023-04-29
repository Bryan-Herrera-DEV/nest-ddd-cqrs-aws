import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserAppService } from "src/user/user-app.service";
import { UserDto } from "src/user/domain/dto/create-user.dto";
import { CommandBus } from "@nestjs/cqrs";
import { RegisterUserCommand } from "./application/commands/register-user.command";
import { LoginUserCommand } from "./application/commands/login-user.command";

@Injectable()
export class AuthService {
  constructor(
    private readonly commandBus: CommandBus,
  ) {}

  async login(userDto: any) {
    return this.commandBus.execute(new LoginUserCommand(userDto));
  }

  async register(userDto: Omit<UserDto, "_id">): Promise<Partial<UserDto>> {
    return this.commandBus.execute(new RegisterUserCommand(userDto));
  }
}
