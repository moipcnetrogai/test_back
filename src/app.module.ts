import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { DatabaseModule } from './database/database.module';
import { ProjectsModule } from './projects/projects.module';
import { ConfigModule } from '@nestjs/config';
import { StatusesModule } from './status/status.module';

@Module({
  imports: [ConfigModule.forRoot(),
    OrdersModule,
    DatabaseModule,
    ProjectsModule,
    StatusesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
