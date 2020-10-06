import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodPostEntity } from 'src/metod-post/entities/MetodPostEntity';
import { MetodPostDto   } from 'src/metod-post/dto/MetodPostDto';

  @Injectable()
  export class MetodPostServiceService{
    private readonly metods: MetodPostDto[] = [];

    create(metod: MetodPostDto) {
      this.metods.push(metod);
    }
  
    findAll(): MetodPostDto[] {
      return this.metods;
    }
  }