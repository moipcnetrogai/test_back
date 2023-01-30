import { Sequelize } from "sequelize-typescript";
import { Order } from '../orders/order.model';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'rkis3_user',
                password: '123',
                database: 'smevproxy',
            });
            sequelize.addModels([Order])
            await sequelize.sync()
            return sequelize
        },
    },
]