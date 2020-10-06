import { Module } from '@nestjs/common';
import { MetodPostController } from "/home/dewhole/Project/nestjs-sequelize-typescript/src/metod-post/controller/MetodPostController.1";
import { MetodPostServiceService } from '/home/dewhole/Project/nestjs-sequelize-typescript/src/metod-post/service/metod-post-service.service';
import { DatabaseModule } from '/home/dewhole/Project/nestjs-sequelize-typescript/src/database/database.module'

@Module({
    imports: [DatabaseModule],
    controllers: [MetodPostController],
    providers: [MetodPostServiceService],
})
export class MetodModule {
}

