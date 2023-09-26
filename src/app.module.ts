import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AnimalModule } from './animal/animal.module';
import { BookingModule } from './booking/booking.module';
import { LoggerModule } from './logger/logger.module';
import { ExceptionModule } from './exception/exception.module';
import { AdaptersModule } from './adapters/adapters.module';
import { ConfigModule } from './config/config.module';

@Module({
    imports: [
        ConfigModule,
        LoggerModule,
        ExceptionModule,
        AdaptersModule,
        AuthModule,
        UserModule,
        AnimalModule,
        BookingModule,
    ],
    providers: [AppService],
})
export class AppModule {}
