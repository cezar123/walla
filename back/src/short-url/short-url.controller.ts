import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { ShortUrl } from "./schemas/short-url.schema";

@Controller('s')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  async create(@Body() createShortUrlDto: CreateShortUrlDto):  Promise<ShortUrl>{
    return this.shortUrlService.create(createShortUrlDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return id;
    return this.shortUrlService.findOne(+id);
  }
}
