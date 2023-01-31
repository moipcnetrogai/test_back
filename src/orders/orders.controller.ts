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
}
