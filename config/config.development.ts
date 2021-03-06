import { Dialect } from 'sequelize/types';
import * as dotenv from 'dotenv';

dotenv.config();
export const config = {
    database: {
        dialect: 'postgres' as Dialect,
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'nest',
        logging: false,
    },
    jwtPrivateKey: 'jwtPrivateKey',
};
