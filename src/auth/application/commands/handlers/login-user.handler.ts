import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginUserCommand } from '../login-user.command';
import { AuthAppService } from '../../service/auth-app.service';

@CommandHandler(LoginUserCommand)
export class  LoginUserHandler implements ICommandHandler<LoginUserCommand> {
  constructor(private readonly authAppService: AuthAppService) {}

  async execute(command: LoginUserCommand): Promise<{
    access_token: string;
  }> {
    return this.authAppService.login(command.userDto);
  }
}