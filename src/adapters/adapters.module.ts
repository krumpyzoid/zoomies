import { Module } from '@nestjs/common';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { JwtModule } from './jwt/jwt.module';

@Module({
  imports: [BcryptModule, JwtModule]
})
export class AdaptersModule {}
