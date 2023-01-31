import { Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UpdateOrderDto } from 'src/orders/dto/update-order.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService){
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('content-type', 'application/json')
    create(@Body() createProjectDto: CreateProjectDto){
        return this.projectsService.create(createProjectDto)
    }

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('id') id:string){
        return this.projectsService.findOne(id)
    }

    @Get()
    @HttpCode(HttpStatus.ACCEPTED)
    getAll(){
        return this.projectsService.findAll()
    }

    @Get(':id/requests')
    @HttpCode(HttpStatus.ACCEPTED)
    getOneWhisOrders(@Param('id') id:string){
        return this.projectsService.findOneWhisOrders(id)
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    @Header('content-type', 'application/json')
    update(@Param('id') id:string, @Body() updateOrderDto: UpdateOrderDto){
        return this.projectsService.update(id, updateOrderDto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    delte(@Param('id') id:string){
        return this.projectsService.remove(id)
    }
}
