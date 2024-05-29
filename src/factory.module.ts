import { DynamicModule, Module } from '@nestjs/common';
import { EnvConfigModule } from './infra/config/env-config.module';
import { CreateTaskUseCase } from './usecase/task/create-task.usecase';
import { DeleteTaskUseCase } from './usecase/task/delete-task.usecase';
import { RepositoryModule } from './infra/repository/repository.module';
import { TaskPrismaRepository } from './infra/repository/task/task.prisma.repository';
import { GetTaskUseCase } from './usecase/task/get-task.usecase';
import { GetListTaskUseCase } from './usecase/task/get-list-task.usecase';
import { UpdateTaskUseCase } from './usecase/task/update-task.usecase';

@Module({
  imports: [RepositoryModule, EnvConfigModule],
})

export class FactoryModule {
  static TASK_CREATE_USE_CASE = 'CreateTaskUseCase';
  static TASK_DELETE_USE_CASE = 'DeleteTaskUseCase';
  static TASK_GET_USE_CASE = 'GetTaskUseCase';
  static TASK_GET_LIST_USE_CASE = 'GetListTaskUseCase';
  static TASK_UPDATE_USE_CASE = 'UpdateTaskUseCase';


  static register(): DynamicModule {
    return {
      module: FactoryModule,
      imports: [],
      providers: [
        {
          inject: [TaskPrismaRepository],
          provide: FactoryModule.TASK_CREATE_USE_CASE,
          useFactory: (repository: TaskPrismaRepository) => new CreateTaskUseCase(repository),
        },
        {
          inject: [TaskPrismaRepository],
          provide: FactoryModule.TASK_DELETE_USE_CASE,
          useFactory: (repository: TaskPrismaRepository) => new DeleteTaskUseCase(repository),
        },
        {
          inject: [TaskPrismaRepository],
          provide: FactoryModule.TASK_GET_USE_CASE,
          useFactory: (repository: TaskPrismaRepository) => new GetTaskUseCase(repository),
        },
        {
          inject: [TaskPrismaRepository],
          provide: FactoryModule.TASK_GET_LIST_USE_CASE,
          useFactory: (repository: TaskPrismaRepository) => new GetListTaskUseCase(repository),
        },
        {
          inject: [TaskPrismaRepository],
          provide: FactoryModule.TASK_UPDATE_USE_CASE,
          useFactory: (repository: TaskPrismaRepository) => new UpdateTaskUseCase(repository),
        },

      ],
      exports: [
        FactoryModule.TASK_CREATE_USE_CASE,
        FactoryModule.TASK_DELETE_USE_CASE,
        FactoryModule.TASK_GET_USE_CASE,
        FactoryModule.TASK_GET_LIST_USE_CASE,
        FactoryModule.TASK_UPDATE_USE_CASE,
      ],
    };
  }
}
