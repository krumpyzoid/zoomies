import { Body, Controller, Get, Inject, Post, Req, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiExtraModels, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthLoginDto } from './auth-dto.class';
import { IsAuthPresenter } from './auth.presenter';

import JwtRefreshGuard from '../guards/jwt-refresh-guard/jwt-refresh-guard.guard';
import { JwtAuthGuard } from '../guards/jwt-auth-guard/jwt-auth-guard.guard';
import { LoginGuard } from '../guards/login-guard/login-guard.guard';
import { LoginService } from './services/login.service';
import { IsAuthenticatedService } from './services/is-authenticated.service';
import { LogoutService } from './services/logout.service';

import { ApiResponseType } from 'src/response/response.decorator';

@Controller('auth')
@ApiTags('auth')
@ApiResponse({
    status: 401,
    description: 'No authorization token was found',
})
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(IsAuthPresenter)
export class AuthController {
    constructor(
        @Inject(LoginService)
        private readonly loginUsecases: LoginService,
        @Inject(LogoutService)
        private readonly logoutUsecases: LogoutService,
        @Inject(IsAuthenticatedService)
        private readonly isAuthUsecases: IsAuthenticatedService,
    ) {}

    @Post('login')
    @UseGuards(LoginGuard)
    @ApiBearerAuth()
    @ApiBody({ type: AuthLoginDto })
    @ApiOperation({ description: 'login' })
    async login(@Body() auth: AuthLoginDto, @Request() request: any) {
        const accessTokenCookie = await this.loginUsecases.getCookieWithJwtToken(auth.username);
        const refreshTokenCookie = await this.loginUsecases.getCookieWithJwtRefreshToken(auth.username);
        request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
        return 'Login successful';
    }

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ description: 'logout' })
    async logout(@Request() request: any) {
        const cookie = await this.logoutUsecases.execute();
        request.res.setHeader('Set-Cookie', cookie);
        return 'Logout successful';
    }

    @Get('is_authenticated')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({ description: 'is_authenticated' })
    @ApiResponseType(IsAuthPresenter, false)
    async isAuthenticated(@Req() request: any) {
        const user = await this.isAuthUsecases.execute(request.user.username);
        const response = new IsAuthPresenter();
        response.username = user.username;
        return response;
    }

    @Get('refresh')
    @UseGuards(JwtRefreshGuard)
    @ApiBearerAuth()
    async refresh(@Req() request: any) {
        const accessTokenCookie = await this.loginUsecases.getCookieWithJwtToken(request.user.username);
        request.res.setHeader('Set-Cookie', accessTokenCookie);
        return 'Refresh successful';
    }
}
