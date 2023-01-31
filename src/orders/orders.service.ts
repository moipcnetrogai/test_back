import { Inject, Injectable } from "@nestjs/common";
import { Status } from "src/status/status.model";
import { CreateOrderDto } from "./dto/create-order.dto";
import { StatusDto } from "./dto/status.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./order.model";

@Injectable()
export class OrdersService {
    constructor(
        @Inject('ORDERS_REPOSITORY') private readonly ordersRepository: typeof Order,
        @Inject('STATUSES_REPOSITORY') private readonly statusesRepository: typeof Status
    ) { }


    async create(orderDto: CreateOrderDto): Promise<Order> {
        return await this.ordersRepository.create<Order>(
            {
                ...orderDto
            })
    }

    async findUnAttached(): Promise<Order[]> {
        return this.ordersRepository.findAll({
            where: {
                projectId: null
            }
        })
    }

    async findOne(id: string): Promise<Order> {
        return this.ordersRepository.findOne({
            where: {
                id
            },
            include: {
                model: Status,
                as: 'status'
            }
        })
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
                id
            }
        })
        return (await orderToDelete).destroy()
    }

    async bind(orderId: string, projectId: string) {
        const orderToBind = this.ordersRepository.findOne({
            where: {
                id: orderId
            }
        })
        return (await orderToBind).update({
            projectId: projectId
        })
    }

    async unbind(orderId: string, projectId: string) {
        const orderToUnbind = this.ordersRepository.findOne({
            where: {
                id: orderId
            }
        })
        return (await orderToUnbind).update({
            projectId: null
        })
    }

    async changeStatus(orderId: string, statusDto: StatusDto) {
        const orderToChange = this.ordersRepository.findOne({
            where: {
                id: orderId
            },
            include: {
                model: Status,
                as: 'status'
            }
        })
        return (await orderToChange).update({
            statusId: statusDto.id
        })

    }

}