import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { EnvironmentConfigService } from 'src/config/environment-config/environment-config.service';
import { LoginService } from '../auth/services/login.service';
import { TokenPayload } from '../auth/model/auth';
import { LoggerService } from '../logger/logger.service';
import { ExceptionsService } from '../exception/exception.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {
    constructor(
        private readonly configService: EnvironmentConfigService,
        @Inject('LoginUseCases')
        private readonly loginUsecases: LoginService,
        @Inject(LoggerService)
        private readonly logger: LoggerService,
        @Inject(ExceptionsService)
        private readonly exceptionService: ExceptionsService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    return request?.cookies?.Refresh;
                },
            ]),
            secretOrKey: configService.getJwtRefreshSecret(),
            passReqToCallback: true,
        });
    }

    async validate(request: Request, payload: TokenPayload) {
        const refreshToken = request.cookies?.Refresh;
        const user = this.loginUsecases.getUserIfRefreshTokenMatches(refreshToken, payload.username);
        if (!user) {
            this.logger.warn('JwtStrategy', `User not found or hash not correct`);
            this.exceptionService.UnauthorizedException({ message: 'User not found or hash not correct' });
        }
        return user;
    }
}
