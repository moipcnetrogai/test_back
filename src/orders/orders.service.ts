import { Inject, Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./order.model";

@Injectable()
export class OrdersService {
    constructor(
        @Inject('ORDERS_REPOSITORY') private readonly ordersRepository: typeof Order
    ) { }

    async create(orderDto: CreateOrderDto): Promise<Order> {
        return await this.ordersRepository.create<Order>(
            {
                ...orderDto,
            });
    }

    async findUnAttached(): Promise<Order[]> {
        return this.ordersRepository.findAll({
            where: {
                projectId: null,
            }
        });
    }

    async findOne(id: string): Promise<Order> {
        return this.ordersRepository.findOne({
            where: {
                id,
            },
        });
    }

    async update(id: string, orderDto: UpdateOrderDto) {
        const orderToUpdate = this.ordersRepository.findOne({
            where: {
                id,
            },
        });
        return (await orderToUpdate).update(id, orderDto)
    }

    async remove(id: string): Promise<void> {
        const orderToDelete = this.ordersRepository.findOne({
            where: {
                id,
            },
        });
        return (await orderToDelete).destroy()
    }
}