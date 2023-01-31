import { Module } from '@nestjs/common';
import { OrdersProviders } from 'src/orders/orders.providers';
import { ProjectsController } from './projects.controller';
import { ProjectsProviders } from './projects.provider';
import { ProjectsService } from './projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService,
    ...ProjectsProviders,
    ...OrdersProviders],
})
export class ProjectsModule { }
