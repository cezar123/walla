import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShortUrl, ShortUrlSchema} from "./schemas/short-url.schema";
import { ShortUrlService } from './short-url.service';
import { ShortUrlController } from './short-url.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: ShortUrl.name, schema: ShortUrlSchema }])],
  controllers: [ShortUrlController],
  providers: [ShortUrlService],
})
export class ShortUrlModule {}
