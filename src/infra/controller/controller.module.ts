import { Module } from '@nestjs/common';
import { FactoryModule } from '../../factory.module';
import { TaskController } from './task/task.controller';


@Module({
  imports: [FactoryModule.register(), ],
  controllers: [TaskController],
})
export class ControllerModule {}
