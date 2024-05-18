import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { ShortUrlService } from './short-url.service';
import { ShortUrl } from './interfaces/short-url.interface';

@Controller('s')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  async create(@Body() createShortUrlDto: CreateShortUrlDto) {
    return this.shortUrlService.create(createShortUrlDto);
  }

  // @Get()
  // async findOne(id: number): Promise<ShortUrl | null> {
  //   return this.shortUrlService.findOne(+id);
  // }

  @Get()
  async findAll(id: number): Promise<ShortUrl[]> {
    return await this.shortUrlService.findAll();
  }
}
