import { Module } from '@nestjs/common';
import { LoginService } from './services/login.service';
import { LogoutService } from './services/logout.service';
import { IsAuthenticatedService } from './services/is-authenticated.service';
import { AuthController } from './auth.controller';

@Module({
    providers: [LoginService, LogoutService, IsAuthenticatedService],
    exports: [LoginService, LogoutService, IsAuthenticatedService],
    controllers: [AuthController],
})
export class AuthModule {}
