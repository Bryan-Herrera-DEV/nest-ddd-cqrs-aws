import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { User as IUser } from "./../domain/user.interface";

@Schema({ timestamps: true })
export class User extends Document implements IUser {
  @Prop({ required: false })
  _id: string;

  @Prop({ required: false })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
