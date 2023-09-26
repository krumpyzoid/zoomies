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
        AuthModule,
        UserModule,
        AnimalModule,
        BookingModule,
        LoggerModule,
        ExceptionModule,
        AdaptersModule,
        ConfigModule,
    ],
    providers: [AppService],
})
export class AppModule {}
