import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtTokenService } from './jwt.service';

@Module({
    imports: [
        NestJwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '60s' },
        }),
    ],
    providers: [JwtTokenService],
    exports: [JwtTokenService],
})
export class JwtModule {}
