import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment-config.service';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot()],
    providers: [EnvironmentConfigService, ConfigService],
    exports: [EnvironmentConfigService, ConfigService],
})
export class EnvironmentConfigModule {}
