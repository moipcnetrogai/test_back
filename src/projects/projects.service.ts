import { Inject, Injectable } from '@nestjs/common';
import { Order } from 'src/orders/order.model';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './projects.model';

@Injectable()
export class ProjectsService {
    constructor(
        @Inject('PROJECTS_REPOSITORY') private readonly projectsRepository: typeof Project,
        @Inject('ORDERS_REPOSITORY') private readonly ordersRepository: typeof Order
    ) { }

    async create(projectDto: CreateProjectDto): Promise<Project> {
        return await this.projectsRepository.create<Project>(
            {
                ...projectDto
            })
    }

    async findOne(id: string): Promise<Project> {
        return this.projectsRepository.findOne({
            where: {
                id,
            },
        });
    }

    async findAll(): Promise<Project[]> {
        return this.projectsRepository.findAll()
    }

    async findOneWhisOrders(id: string): Promise<Project> {
        return this.projectsRepository.findOne({
            where: {
                id,
            },
            include: {
                model: Order,
                as: 'orders',
                where: {},
                required: true,
            }
        });
    }

    async update(id: string, projectDto: UpdateProjectDto) {
        const projectToUpdate = this.projectsRepository.findOne({
            where: {
                id,
            },
        });
        return (await projectToUpdate).update(id, projectDto)
    }

    async remove(id: string): Promise<void> {
        const projectToDelete = this.projectsRepository.findOne({
            where: {
                id,
            },
            include: {
                model: Order,
                as: 'orders',
                where: {},
                required: true,
            }
        });
        const ordersData = this.ordersRepository.findAll({
            where: {
                projectId: id,
            },
        });
        (await ordersData).forEach((order)=>{
            order.update({
                projectId: null
            })
        });
        return (await projectToDelete).destroy()
    }
}
