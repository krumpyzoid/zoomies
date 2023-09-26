import { DatabaseUserRepository } from './model/userRepository.mongoose';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './model/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [DatabaseUserRepository],
  providers: [DatabaseUserRepository],
})
export class UserModule {}
