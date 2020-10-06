import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { MetodPostEntity } from '/home/dewhole/Project/nestjs-sequelize-typescript/src/metod-post/entities/MetodPostEntity';
import { MetodPostDto } from '/home/dewhole/Project/nestjs-sequelize-typescript/src/metod-post/dto/MetodPostDto';

import {
    /* ApiCreatedResponse, */
    ApiBearerAuth,
    ApiTags
} from '@nestjs/swagger';


@Controller('metod-post')
@ApiTags('posts')
export class MetodPostController {
    @Post()
     async create() {
        return 'This action adds a new cat';
}

@Get()
findAll(@Query() query: MetodPostEntity) {
  return `This action returns all cats (limit: ${query} items)`;
}

@Get(':id')
findOne(@Param('id') id: string) {
  return `This action returns a #${id} cat`;
}

@Put(':id')
update(@Param('id') id: string, @Body() metodPostDto: MetodPostDto) {
  return `This action updates a #${id} cat`;
}

@Delete(':id')
remove(@Param('id') id: string) {
  return `This action removes a #${id} cat`;
}
}