import { Task } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TaskEntity implements Task{
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty({ required: false, nullable: true })
    description: string | null;

    @ApiProperty()
    status: boolean;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

