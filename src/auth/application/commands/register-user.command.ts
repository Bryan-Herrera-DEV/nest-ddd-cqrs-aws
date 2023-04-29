import { UserDto } from "src/user/domain/dto/create-user.dto";

export class RegisterUserCommand {
  constructor(public readonly userDto: Omit<UserDto, "_id">) {}
}
