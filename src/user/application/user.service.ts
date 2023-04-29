import { v4 as uuidv4, v5 } from 'uuid';
import { User as IUser } from '../domain/user.interface';
import { UserRepository } from '../repository/user.repository';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { comparePasswords, encryptPassword } from 'src/common/helpers/password.utils';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository, @InjectModel(User.name) private userModel: Model<IUser>) {}

  async registerUser(name: string, email: string, password: string): Promise<IUser> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await encryptPassword(password);
    const newUser: IUser = {
      _id: uuidv4(),
      name,
      email,
      password: hashedPassword,
    };

    return this.userRepository.save(newUser);
  }
  async loginUser(email: string, password: string): Promise<IUser> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('El usuario no existe.');
    }
    console.log(password, user.password)
    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      throw new Error('La contraseña es incorrecta.');
    }

    return user;
  }
}