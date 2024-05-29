import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  HttpCode,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ITaskController } from '../interfaces/task.controller.interface';
import { FactoryModule } from 'src/factory.module';
import {
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTaskRequestDto } from './dto/create-task.request.dto';
import { TaskListResultDto } from './dto/task-list.result.dto';
import { UpdateTaskRequestDto } from './dto/update-task.request.dto';
import { TaskResultDto } from './dto/task.result.dto';
import { CreateTaskUseCase } from 'src/usecase/task/create-task.usecase';
import { DeleteTaskUseCase } from 'src/usecase/task/delete-task.usecase';
import { GetTaskUseCase } from 'src/usecase/task/get-task.usecase';
import { GetListTaskUseCase } from 'src/usecase/task/get-list-task.usecase';
import { UpdateTaskUseCase } from 'src/usecase/task/update-task.usecase';


@Controller('/v1/tasks')
@ApiTags('Tasks')
@ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
@UsePipes(ValidationPipe)
export class TaskController implements ITaskController {
  constructor(
    @Inject(FactoryModule.TASK_CREATE_USE_CASE)
    private createTaskUseCase: CreateTaskUseCase,
    @Inject(FactoryModule.TASK_DELETE_USE_CASE)
    private deleteTaskUseCase: DeleteTaskUseCase,
    @Inject(FactoryModule.TASK_GET_USE_CASE)
    private getTaskUseCase: GetTaskUseCase,
    @Inject(FactoryModule.TASK_GET_LIST_USE_CASE)
    private getListTaskUseCase: GetListTaskUseCase,
    @Inject(FactoryModule.TASK_UPDATE_USE_CASE)
    private updateTaskUseCase: UpdateTaskUseCase,
    
  ) {}

  @Post()
  @ApiOkResponse({
    description: "Task create successfully",
    type: TaskResultDto
  })
  async create(@Body() request: CreateTaskRequestDto): Promise<TaskResultDto> {
    return await this.createTaskUseCase.exec(request);
  }

  @Put(':id')
  @ApiOkResponse({
    description: "Task updating with successfully",
    type: TaskResultDto
  })
  async update(@Param('id') id: string, @Body() request: UpdateTaskRequestDto): Promise<TaskResultDto> {
    return await this.updateTaskUseCase.exec(id, request);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({
    description: "Task deleting with successfully",
  })
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteTaskUseCase.exec(id);
  }

  @Get(':id')
  @ApiOkResponse({
    description: "Task result successfully",
    type: TaskResultDto
  })
  async get(@Param('id') id: string): Promise<TaskResultDto> {
    return await this.getTaskUseCase.exec(id);
  }

  @Get()
  @ApiOkResponse({
    description: "Task list result successfully",
    isArray: true,
    type: TaskListResultDto
  })
  async getList(): Promise<TaskListResultDto> {
    return await this.getListTaskUseCase.exec();
  }
}
