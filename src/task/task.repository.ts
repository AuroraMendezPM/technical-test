import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Task } from './entities/task.entity';

@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  /**
   * Creates a new task with the given title and user ID. The task is initially marked as not completed.
   * @param title - The title of the task to create.
   * @param userId - The ID of the user to associate with the task.
   * @returns A Promise that resolves to the newly created Task entity.
   */
  async createTask(title: string, userId: number): Promise<Task> {
    const task = this.create({ title, user: { id: userId } });
    return this.save(task);
  }

  /**
   * Finds all tasks in the database, including their associated user information.
   * @returns A Promise that resolves to an array of Task entities, each with its associated user information.
   */
  async findAllTasks(): Promise<Task[]> {
    return this.find({ relations: ['user'] });
  }

  /**
   * Marks the task with the given ID as completed. If no task is found with the given ID, returns null.
   * @param taskId - The ID of the task to mark as completed.
   * @returns A Promise that resolves to the updated Task entity if the task was found and marked as completed, or null if no task was found with the given ID.
   */
  async markAsCompleted(taskId: number) {
    await this.update(taskId, { completed: true });
    return this.findOneBy({ id: taskId });
  }
}
