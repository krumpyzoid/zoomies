import { Module } from '@nestjs/common';
import { MongodbModule } from './mongodb/mongodb.module';
import { EnvironmentConfigModule } from './environment-config/environment-config.module';

@Module({
    imports: [MongodbModule, EnvironmentConfigModule],
})
export class ConfigModule {}
