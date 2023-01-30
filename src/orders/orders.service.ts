import { Inject, Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { Order } from "./order.model";

@Injectable()
export class OrdersService {
    constructor(
        @Inject('ORDERS_REPOSITORY') private readonly ordersRepository: typeof Order
    ) { }

    async create(orderDto: CreateOrderDto): Promise<Order> {
        return await this.ordersRepository.create<Order>(
            {
                ...orderDto
            })
    }
    /*async findAll(): Promise<Order[]> {
        return this.orderModel.findAll()
    }
    getAll() {
        return this.orders
    }

    getById(id: string) {
        return this.orders.find(p => p.id === id)
    }

    create(orderDto: CreateOrderDto) {
        this.orders.push({
            ...orderDto,
            id: Date.now().toString()
        })
    }*/
}