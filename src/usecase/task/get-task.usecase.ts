import { ITaskRepository } from 'src/infra/repository/task/interfaces/task.interface.repository';
import { TaskResult } from '../dto/task.result';
import { IGetTaskUseCase } from '../interfaces/task.usecase.interface';
import { Injectable } from '@nestjs/common';
import { NotFoundTaskException } from 'src/domain/task/exceptions/business.exception';

@Injectable()
export class GetTaskUseCase implements IGetTaskUseCase {
  
  constructor(
    private readonly taskRepository: ITaskRepository,
  ) {
  }
  
  async exec(id: string): Promise<TaskResult> {
    const data = await this.taskRepository.get(id);
    if (data) {
      return data;
    }
    throw new NotFoundTaskException();
  }
}
