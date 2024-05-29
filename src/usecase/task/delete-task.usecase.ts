import { ITaskRepository } from 'src/infra/repository/task/interfaces/task.interface.repository';
import { IDeleteTaskUseCase } from '../interfaces/task.usecase.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteTaskUseCase implements IDeleteTaskUseCase {
  
  constructor(
    private readonly taskRepository: ITaskRepository,
  ) {
  }
  async exec(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }  
}
