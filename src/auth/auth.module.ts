import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/user/user.module";
import { JwtStrategy } from "./infrastructure/jwt.strategy";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { CommonModule } from "src/common/common.module";
import { LocalProviderService } from "src/common/services/local-provider/local-provider.service";
import { LocalStrategy } from "./infrastructure/local.strategy";
import { CqrsModule } from "@nestjs/cqrs";
import { LoginUserCommand } from "./application/commands/login-user.command";
import { RegisterUserCommand } from "./application/commands/register-user.command";
import { LoginUserHandler } from "./application/commands/handlers/login-user.handler";
import { RegisterUserHandler } from "./application/commands/handlers/register-user.handler";
import { AuthAppService } from "./application/service/auth-app.service";
@Module({
  imports: [
    
    UserModule,
    PassportModule,
    CommonModule,
    JwtModule.registerAsync({
      imports: [CommonModule],
      inject: [LocalProviderService],
      useFactory: async (localProviderService: LocalProviderService) => ({
        secret: localProviderService.getAllLocals().JWT_SECRET,
        signOptions: { expiresIn: "60m" },
      }),
    }),
    CqrsModule,
  ],
  providers: [
    AuthService,
    AuthAppService,
    JwtStrategy,
    LocalStrategy,
    LoginUserCommand,
    RegisterUserCommand,
    LoginUserHandler,
    RegisterUserHandler,
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
