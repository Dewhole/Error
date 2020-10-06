import { Module } from '@nestjs/common';
import { MetodModule } from '/home/dewhole/Project/nestjs-sequelize-typescript/src/metod-post/modules/MetodModule';


@Module({
    imports: [MetodModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
