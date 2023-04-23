import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { User, UserSchema } from "./schemas/user.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { UserAppService } from "./user-app.service";
import { UserService } from "./domain/user.service";
import { UserRepository } from "./domain/user.repository";

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [
    UserAppService,
    UserService,
    UserRepository,
  ],
  exports: [UserAppService, UserRepository]
})
export class UserModule {}
