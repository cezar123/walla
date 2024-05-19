import {Injectable, Inject, NotFoundException} from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { ShortUrl } from "../../../types/types";


@Injectable()
export class ShortUrlService {

  constructor(
    @Inject('SHORT_URL_MODEL') 
    private readonly model: Model<ShortUrl> 
    ) {}

  async create(createShortUrlDto: CreateShortUrlDto): Promise<ShortUrl>{
    return await this.model.create(createShortUrlDto);
  }

  async findOne(id: string): Promise<ShortUrl | null>{
    let url;
    try {
      url = await this.model.findById(id);
    } catch (error) {
      throw new NotFoundException('No matching URL found');
    }
    if (!url) {
      throw new NotFoundException('No matching URL found');
    }
    return url;
  }
}
