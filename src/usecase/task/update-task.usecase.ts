import { Task } from 'src/domain/task/entities/task.entity';
import { TaskResult } from '../dto/task.result';
import { UpdateTaskRequest } from '../dto/update-task.request';
import { IUpdateTaskUseCase } from '../interfaces/task.usecase.interface';
import { Injectable } from '@nestjs/common';
import { ITaskRepository } from 'src/infra/repository/task/interfaces/task.interface.repository';
import { NotFoundTaskException } from 'src/domain/task/exceptions/business.exception';

@Injectable()
export class UpdateTaskUseCase implements IUpdateTaskUseCase {
  
  constructor(
    private readonly taskRepository: ITaskRepository,
  ) {
  }
  
  async exec(id: string, request: UpdateTaskRequest): Promise<TaskResult> {
    
    const data = await this.taskRepository.get(id);
    if (data) {
      const task: Task = new Task(request);
      task.setUpdatedAt();
      task.createdAt = data.createdAt;

      return await this.taskRepository.update(id, task);
    }
    throw new NotFoundTaskException();
  }
}
