import { Module } from '@nestjs/common';
import { ExceptionsService } from './exception.service';

@Module({
  providers: [ExceptionsService],
})
export class ExceptionModule {}
