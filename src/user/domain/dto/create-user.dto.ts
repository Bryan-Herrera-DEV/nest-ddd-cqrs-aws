import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../user.interface'
export class UserDto implements User {
    @IsString()
    _id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}