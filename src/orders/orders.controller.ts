import { Body, Controller,Delete,Get, Header, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {

    constructor (private readonly ordersService: OrdersService) {
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('content-type', 'application/json')
    create(@Body() createOrderDto: CreateOrderDto){
        return this.ordersService.create(createOrderDto)
    }

    /*@Get(':id')
    getOne(@Param('id') id:string){
        return this.ordersService.getById(id)
    }

    @Put(':id')
    @Header('content-type', 'application/json')
    update(@Body() updateOrderDto: UpdateOrderDto, @Param('id') id:string){
        return 'update ' + id + ' ' + updateOrderDto
    }
    
    @Delete(':id')
    delete(@Param('id') id:string){
        return 'remove ' + id
    }*/
}
