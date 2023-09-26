import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { LoginService } from '../auth/services/login.service';
import { LoggerService } from '../logger/logger.service';
import { ExceptionsService } from '../exception/exception.service';
import { TokenPayload } from '../auth/model/auth';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('LoginService')
        private readonly loginService: LoginService,
        private readonly logger: LoggerService,
        private readonly exceptionService: ExceptionsService,
    ) {
        super();
    }

    async validate(username: string, password: string) {
        if (!username || !password) {
            this.logger.warn('LocalStrategy', `Username or password is missing, BadRequestException`);
            this.exceptionService.UnauthorizedException();
        }
        const user = await this.loginService.validateUserForLocalStragtegy(username, password);
        if (!user) {
            this.logger.warn('LocalStrategy', `Invalid username or password`);
            this.exceptionService.UnauthorizedException({ message: 'Invalid username or password.' });
        }
        return user;
    }
}
