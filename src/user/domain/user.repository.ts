import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User as IUser } from './user.interface';
import { User } from './../schemas/user.schema';

export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async findAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findById(id: string): Promise<IUser | null> {
    return this.userModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return this.userModel.findOne({ email: email.toString() });
  }

  async save(user: IUser): Promise<IUser> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async update(id: string, updatedUser: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id.toString(), updatedUser, {
      new: true,
    });
  }

  async delete(id: number): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }
}