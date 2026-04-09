import { Injectable } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { UserRepository } from '../user/user.repository';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(
    private taskRepository: TaskRepository,
    private userRepository: UserRepository,
  ) {}

  /**
   * Creates a new task based on the provided CreateTaskDto.
   * @param createTaskDto - The data transfer object containing the title of the task and the ID of the user to associate with the task.
   * @returns A Promise that resolves to the newly created Task entity.
   * @throws An error if the user specified in the CreateTaskDto does not exist in the database.
   */
  async create(createTaskDto: CreateTaskDto) {
    const user = await this.userRepository.findById(createTaskDto.userId);
    if (!user) {
      throw new Error('User not found');
    }

    const task = await this.taskRepository.createTask(
      createTaskDto.title,
      user.id,
    );
    return task;
  }

  /**
   * Retrieves all tasks from the database, including their associated user information.
   * @returns A Promise that resolves to an array of Task entities, each with its associated user information.
   */
  async findAll() {
    return this.taskRepository.findAllTasks();
  }
}
