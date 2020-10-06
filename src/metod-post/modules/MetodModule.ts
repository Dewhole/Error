import { Module } from '@nestjs/common';
import { MetodPostController } from "src/metod-post/controller/MetodPostController.1";
import { MetodPostServiceService } from 'src/metod-post/service/metod-post-service.service';
import { DatabaseModule } from 'src/database/database.module'

@Module({
    imports: [],
    controllers: [MetodPostController],
    providers: [MetodPostServiceService],
})
export class MetodModule {
}

