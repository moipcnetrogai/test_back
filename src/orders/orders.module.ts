import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { StatusesProviders } from "src/status/status.provider";
import { OrdersController } from "./orders.controller";
import { OrdersProviders } from "./orders.providers";
import { OrdersService } from "./orders.service";

@Module({
    imports: [DatabaseModule],
    controllers: [OrdersController],
    providers: [OrdersService,
        ...OrdersProviders,
        ...StatusesProviders
    ],
})
export class OrdersModule { }