import { Injectable } from '@nestjs/common';
import { ITaskRepository } from './interfaces/task.interface.repository';
import { TaskEntityRepository } from './entities/task.entity.repository';
import { PrismaRepository } from '../prisma/prisma.repository';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskPrismaRepository
  extends PrismaRepository<TaskEntityRepository>
  implements ITaskRepository
{
  constructor(public readonly prisma: PrismaService) {
    super(prisma);
  }
}
