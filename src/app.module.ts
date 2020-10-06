import { Module } from '@nestjs/common';
import { MetodModule } from 'src/metod-post/modules/MetodModule';


@Module({
    imports: [MetodModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
