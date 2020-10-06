import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '../shared/config/config.service';
import { MetodPostEntity } from 'src/metod-post/entities/MetodPostEntity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      // @ts-ignore
      const sequelize = new Sequelize(configService.sequelizeOrmConfig);
      sequelize.addModels([
        MetodPostEntity
      ]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
