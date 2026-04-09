import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { UserRepository } from '../user/user.repository';

import { Task } from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository, UserRepository],
  exports: [TaskService, TaskRepository],
})
export class TaskModule {}
