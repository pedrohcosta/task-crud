import { CreateTaskRequest } from "../dto/create-task.request";
import { TaskListResult } from "../dto/task-list.result";
import { TaskResult } from "../dto/task.result";
import { UpdateTaskRequest } from "../dto/update-task.request";

export interface ICreateTaskUseCase {
  exec(request: CreateTaskRequest):  Promise<TaskResult>;
}

export interface IUpdateTaskUseCase {
  exec(id: string, request: UpdateTaskRequest): Promise<TaskResult>;
}

export interface IGetTaskUseCase {
  exec(id: string): Promise<TaskResult>;
}

export interface IGetListTaskUseCase {
  exec(): Promise<TaskListResult>;
}

export interface IDeleteTaskUseCase {
  exec(id: string): Promise<void>;
}

