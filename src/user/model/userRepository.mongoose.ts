import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserM } from './user';
import { UserRepository } from './userRepository.interface';
import { User } from './user.schema';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectModel('User')
    private readonly userEntityRepository: Model<User>,
  ) {}

  getUserByUsername(username: string): Promise<UserM> {
    throw new Error('Method not implemented.');
  }
  updateLastLogin(username: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateRefreshToken(username: string, refreshToken: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async updateContent(id: number, isDone: boolean): Promise<void> {
    await this.userEntityRepository.findByIdAndUpdate(
      {
        id: id,
      },
      { is_done: isDone },
    );
  }
  async create(user: UserM): Promise<UserM> {
    const userEntity = this.toUserEntity(user);
    const result = await this.userEntityRepository.create(userEntity);
    return this.toUser(result as User);
  }
  async findAll(): Promise<UserM[]> {
    const usersEntity = await this.userEntityRepository.find();
    return usersEntity.map((userEntity) => this.toUser(userEntity));
  }
  async findById(id: number): Promise<UserM> {
    const userEntity = await this.userEntityRepository.findById(id);
    return this.toUser(userEntity);
  }
  async deleteById(id: number): Promise<void> {
    await this.userEntityRepository.deleteOne({ id: id });
  }

  private toUser(userEntity: User): UserM {
    const user: UserM = new UserM();

    return user;
  }

  private toUserEntity(user: UserM): User {
    const userEntity: User = new User();

    return userEntity;
  }
}
