import { Module } from "@nestjs/common";
import { StatusesProviders } from "./status.provider";

@Module({
    providers: [...StatusesProviders]
})
export class StatusesModule { }