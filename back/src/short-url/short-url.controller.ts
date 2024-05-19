import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { ShortUrlService } from './short-url.service';
import { ShortUrl } from '../../../types/types';

@Controller('s')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  async create(@Body() createShortUrlDto: CreateShortUrlDto) {
    return await this.shortUrlService.create(createShortUrlDto);
  }

  @Get()
  async findOne(id: string): Promise<ShortUrl | null> {
    return this.shortUrlService.findOne(id);
  }
}