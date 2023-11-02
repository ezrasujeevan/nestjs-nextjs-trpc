import {ApiProperty} from "@nestjs/swagger";

export class CreateTaskDto {

    @ApiProperty()
    title: string;

    @ApiProperty({ required: false })
    description?: string;

    @ApiProperty({ required: false, default: false })
    status?: boolean = false;
}
