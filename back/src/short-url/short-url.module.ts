import { Module } from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { ShortUrlController } from './short-url.controller';
import { DatabaseModule } from '../database/database.module';
import { shortUrlProviders } from './short-url.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ShortUrlController],
  providers: [ShortUrlService, ...shortUrlProviders],
})

export class ShortUrlModule {}
