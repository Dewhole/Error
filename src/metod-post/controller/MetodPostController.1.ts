import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
/* import { MetodPostEntity } from '/home/dewhole/Project/nestjs-sequelize-typescript/src/metod-post/entities/MetodPostEntity';
import { MetodPostDto } from '/home/dewhole/Project/nestjs-sequelize-typescript/src/metod-post/dto/MetodPostDto';
 */
import {
    /* ApiCreatedResponse, */
    ApiBearerAuth,
    ApiTags
} from '@nestjs/swagger';


@Controller('metod-post')
@ApiTags('posts')
export class MetodPostController {
    @Post()
    @ApiBearerAuth()
 
    async create() {
        return 'asdgasdgasdg';  
    }
} 

/* 
    @Get(':id')
    getOneAction(@Param('id') id: string): string {
        return "Todo Get One by id=" + id;
    }

    // Create
    @Post()
    createAction(@Body() todo: CreateMetodPOSTDto): CreateMetodPOSTDto {
        console.log(todo);
        return todo;
    }


    @Put(':id')
    updateAction(
        @Param('id') id: string,
        @Body() todo: UpdateDto
    ): UpdateDto {
        console.log('Search by ID', id);
        console.log(todo, 'saved');
        return todo;
    }

    @Delete(':id')
    deleteAction(@Param('id') id: string): string {
        return "Delete by id=" + id;
    }

}


 */