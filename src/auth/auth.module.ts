import { Module } from '@nestjs/common';
import { LoginService } from './services/login.service';
import { LogoutService } from './services/logout.service';
import { IsAuthenticatedService } from './services/is-authenticated.service';
import { AuthController } from './auth.controller';
import { LoggerService } from 'src/logger/logger.service';
import { JwtTokenService } from 'src/adapters/jwt/jwt.service';
import { EnvironmentConfigService } from 'src/config/environment-config/environment-config.service';
import { DatabaseUserRepository } from 'src/user/model/userRepository.mongoose';
import { BcryptService } from 'src/adapters/bcrypt/bcrypt.service';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/model/user.schema';

@Module({
    imports: [ConfigModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    providers: [
        LoginService,
        LogoutService,
        IsAuthenticatedService,
        LoggerService,
        JwtTokenService,
        EnvironmentConfigService,
        DatabaseUserRepository,
        BcryptService,
        ConfigService,
    ],
    exports: [LoginService, LogoutService, IsAuthenticatedService],
    controllers: [AuthController],
})
export class AuthModule {}
