import { Module } from '@nestjs/common';
import { FactoryModule } from './factory.module';
import { ControllerModule } from './infra/controller/controller.module';

@Module({
  imports: [
    FactoryModule.register(),
    ControllerModule,
  ],
})
export class AppModule {}
