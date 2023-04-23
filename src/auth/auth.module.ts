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

@Module({
  imports: [
    UserModule,
    PassportModule,
    CommonModule,
    JwtModule.registerAsync({
      imports: [CommonModule],
      inject: [LocalProviderService],
      useFactory: async (localProviderService: LocalProviderService) => ({
        secret:  localProviderService.getAllLocals().JWT_SECRET,
        signOptions: { expiresIn: "60m" },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
