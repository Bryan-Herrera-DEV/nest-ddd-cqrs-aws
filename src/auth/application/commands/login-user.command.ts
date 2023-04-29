import { UserDto } from "src/user/domain/dto/create-user.dto";

export class LoginUserCommand {
  constructor(public readonly userDto: UserDto) {}
}
