import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { UserService } from "src/user/application/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, "local") {
  constructor(private userAppService: UserService) {
    super({
      usernameField: "email",
      passwordField: "password",
    });
  }

  async validate(email: string, password: string): Promise<any> {
    try {
      const user = await this.userAppService.loginUser(email, password);
      if (!user) {
        throw new Error("El usuario no existe.");
      }
      return user;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`Email or password incorrect`);
    }
  }
}
