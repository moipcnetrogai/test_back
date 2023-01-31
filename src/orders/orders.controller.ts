import { Body, Controller,Delete,Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { StatusDto } from './dto/status.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('request')
export class OrdersController {

    constructor (private readonly ordersService: OrdersService) {
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('content-type', 'application/json')
    create(@Body() createOrderDto: CreateOrderDto){
        return this.ordersService.create(createOrderDto)
    }

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('id') id:string){
        return this.ordersService.findOne(id)
    }

    @Get()
    @HttpCode(HttpStatus.ACCEPTED)
    getUnAttached(){
        return this.ordersService.findUnAttached()
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    @Header('content-type', 'application/json')
    update(@Body() updateOrderDto: UpdateOrderDto, @Param('id') id:string){
        return this.ordersService.update(id, updateOrderDto)
    }
    
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    delete(@Param('id') id:string){
        return this.ordersService.remove(id)
    }

    @Post(':oid/bind/:pid')
    @HttpCode(HttpStatus.OK)
    bindOrderToProject(@Param('oid') orderId:string, @Param('pid') projectId:string){
        return this.ordersService.bind(orderId, projectId)
    }

    @Post(':oid/unbind/:pid')
    @HttpCode(HttpStatus.OK)
    onbindOrderAtProject(@Param('oid') orderId:string, @Param('pid') projectId:string){
        return this.ordersService.unbind(orderId, projectId)
    }

    @Post(':id/status/next')
    @HttpCode(HttpStatus.OK)
    nextStatus(@Param('id') orderId: string, @Body() statusDto: StatusDto){
        return this.ordersService.changeStatus(orderId, statusDto)
    }

    @Post(':id/status/prev')
    @HttpCode(HttpStatus.OK)
    prevStatus(@Param('id') orderId: string, @Body() statusDto: StatusDto){
        return this.ordersService.changeStatus(orderId, statusDto)
    }
}
