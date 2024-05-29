import { Injectable } from '@nestjs/common';
import { IGetListTaskUseCase } from '../interfaces/task.usecase.interface';
import { TaskListResult } from '../dto/task-list.result';
import { ITaskRepository } from 'src/infra/repository/task/interfaces/task.interface.repository';

@Injectable()
export class GetListTaskUseCase implements IGetListTaskUseCase {
 
  constructor(
    private readonly taskRepository: ITaskRepository,
  ) {
  }
  
  async exec(): Promise<TaskListResult> {
    const result = await this.taskRepository.getList();
    return <TaskListResult>{
      data: result,
      total: result.length
    };
  }  
}
