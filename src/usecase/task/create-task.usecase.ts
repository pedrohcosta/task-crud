import {
  ICreateTaskUseCase,
} from '../interfaces/task.usecase.interface';
import { Injectable } from '@nestjs/common';
import { CreateTaskRequest } from '../dto/create-task.request';
import { TaskResult } from '../dto/task.result';
import { ITaskRepository } from 'src/infra/repository/task/interfaces/task.interface.repository';
import { Task } from 'src/domain/task/entities/task.entity';
import { StatusTask } from 'src/infra/commons/enum/status.-task.enum';

@Injectable()
export class CreateTaskUseCase implements ICreateTaskUseCase {
  constructor(
    private readonly taskRepository: ITaskRepository,
  ) {
  }
  async exec(request: CreateTaskRequest): Promise<TaskResult> {
    const task: Task = new Task(request);
    task.setId();
    task.setStatus(StatusTask.TODO);
    task.setCreatedAt();
    return await this.taskRepository.create(task);
  }
}
