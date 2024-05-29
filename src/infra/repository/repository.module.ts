import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EnvConfigModule } from '../config/env-config.module';
import { TaskPrismaRepository } from './task/task.prisma.repository';
@Module({
  imports: [EnvConfigModule],
  providers: [PrismaService, TaskPrismaRepository, ],
  exports: [TaskPrismaRepository]
})
export class RepositoryModule {}
