import { Module } from '@nestjs/common';
import { ShortUrlModule } from './short-url/short-url.module';

@Module({
  imports: [ShortUrlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
