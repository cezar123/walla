import { Injectable } from '@nestjs/common';
import {Connection, Model} from 'mongoose';
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { ShortUrl } from "./schemas/short-url.schema";


@Injectable()
export class ShortUrlService {

  constructor(@InjectModel(ShortUrl.name) private model: Model<ShortUrl>, @InjectConnection() private connection: Connection) {}

  async create(createShortUrlDto: CreateShortUrlDto): Promise<ShortUrl>{
    const createdShortUrl = new this.model(createShortUrlDto);
    return await createdShortUrl.save();
  }

  findOne(id: number) {
    return this.model.findById(id).exec();
  }
}
