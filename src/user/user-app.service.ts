import { Injectable } from "@nestjs/common";
import { UserService } from "./application/user.service";
import { User } from "./domain/user.interface";
import { UserDto } from "./domain/dto/create-user.dto";

@Injectable()
export class UserAppService {
  constructor(
    private userService: UserService
  ) {}

  async registerUser(userDto: Omit<UserDto, "_id">): Promise<Partial<UserDto>> {
    const { name, email, password } = userDto;
    const newUser = await this.userService.registerUser(name, email, password);
    return this.userToDto(newUser);
  }

  async loginUser(email: string, password: string): Promise<Partial<UserDto>> {
    const user = await this.userService.loginUser(email, password);
    return this.userToDto(user);
  }

  private userToDto(user: User): Partial<UserDto> {
    const { _id, name, email } = user;
    return { _id, name, email };
  }
}
