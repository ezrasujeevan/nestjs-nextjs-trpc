import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TaskEntity } from '@server/tasks/entities/task.entity';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiCreatedResponse({ type: TaskEntity })
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.tasksService.create(createTaskDto);
  }

  @Get()
  @ApiOkResponse({ type: TaskEntity, isArray: true })
  async findAll() {
    return await this.tasksService.findAll();
  }

  @Get('/completed')
  @ApiOkResponse({ type: TaskEntity, isArray: true })
  async findCompleted() {
    return await this.tasksService.findCompleted();
  }
  @Get('/incomplete')
  @ApiOkResponse({ type: TaskEntity, isArray: true })
  async findIncomplete() {
    return await this.tasksService.findIncomplete();
  }

  @Get(':id')
  @ApiOkResponse({ type: TaskEntity })
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: TaskEntity })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TaskEntity, isArray: true })
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
