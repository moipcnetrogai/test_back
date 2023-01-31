import { Sequelize } from "sequelize-typescript";
import { Project } from "src/projects/projects.model";
import { Order } from '../orders/order.model';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: process.env.DATABASE_HOST,
                port: parseInt(process.env.DATABASE_PORT),
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
            });
            sequelize.addModels([Project, Order])
            await sequelize.sync()
            return sequelize
        },
    },
]