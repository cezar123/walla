import { Module } from '@nestjs/common';
import { ShortUrlModule } from './short-url/short-url.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://root:example@mongo:27017'),
      // MongooseModule.forRoot(process.env.MONGODB_URL),
      ShortUrlModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
