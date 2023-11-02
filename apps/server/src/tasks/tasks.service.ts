import {Injectable} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {PrismaService} from "@server/prisma/prisma.service";

@Injectable()
export class TasksService {

    constructor(private prisma: PrismaService) {
    }

    async create(createTaskDto: CreateTaskDto) {
        return await this.prisma.task.create({data: createTaskDto})
    }

    async findAll() {
        return await this.prisma.task.findMany();
    }

    async findCompleted() {
        return await this.prisma.task.findMany({where: {status: true}})
    }

    async findIncomplete() {
        return await this.prisma.task.findMany({where: {status: false}})
    }


    async findOne(id: number) {
        return await this.prisma.task.findUnique({where: {id}})
    }

    async update(id: number, updateTaskDto: UpdateTaskDto) {
        return await this.prisma.task.update({
            where: {id},
            data: UpdateTaskDto,
        })
    }

    async remove(id: number) {
        return await this.prisma.task.delete({where: {id}})
    }
}
