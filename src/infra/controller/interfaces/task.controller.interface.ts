import { CreateTaskRequestDto } from "../task/dto/create-task.request.dto";
import { TaskListResultDto } from "../task/dto/task-list.result.dto";
import { TaskResultDto } from "../task/dto/task.result.dto";
import { UpdateTaskRequestDto } from "../task/dto/update-task.request.dto";

export interface ITaskController {
  create(request: CreateTaskRequestDto): Promise<TaskResultDto>;
  update(id: string, request: UpdateTaskRequestDto): Promise<TaskResultDto>;
  delete(id: string): Promise<void>;
  getList(): Promise<TaskListResultDto>;
  get(id: string): Promise<TaskResultDto>;
}
