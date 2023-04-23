import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, registerAs } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { CommonModule } from "./common/common.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
      load: [registerAs("app", () => ({ projectName: "DDD-NEST-CQRS" }))],
    }),
    UserModule,
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/nestjs-ddd-example", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    CommonModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
