import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterUserCommand } from '../register-user.command';
import { UserDto } from 'src/user/domain/dto/create-user.dto';
import { AuthAppService } from '../../service/auth-app.service';

@CommandHandler(RegisterUserCommand)
export class RegisterUserHandler implements ICommandHandler<RegisterUserCommand> {
  constructor(private readonly authAppService: AuthAppService) {}

  async execute(command: RegisterUserCommand): Promise<Partial<UserDto>> {
    return this.authAppService.register(command.userDto);
  }
}