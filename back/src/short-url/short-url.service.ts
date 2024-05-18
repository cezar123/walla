import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { ShortUrl } from "./interfaces/short-url.interface";


@Injectable()
export class ShortUrlService {

  constructor(
    @Inject('SHORT_URL_MODEL') 
    private readonly model: Model<ShortUrl> 
    ) {}

  async create(createShortUrlDto: CreateShortUrlDto): Promise<ShortUrl>{
    return this.model.create(createShortUrlDto);
  }

  async findOne(id: number): Promise<ShortUrl | null>{
    return this.model.findById(id).exec();
  }

  async findAll(): Promise<ShortUrl[]>{
    return this.model.find().exec();
  }
}
