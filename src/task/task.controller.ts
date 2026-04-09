import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new task',
    description:
      'Creates a new task with the given title and associates it with the user specified by the userId in the CreateTaskDto. If the user specified by the userId does not exist, an error is thrown.',
  })
  @ApiBody({
    description:
      'The data transfer object containing the title of the task and the ID of the user to associate with the task.',
    type: CreateTaskDto,
  })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all tasks',
    description:
      'Retrieves all tasks from the database, including their associated user information.',
  })
  findAll() {
    return this.taskService.findAll();
  }
}
