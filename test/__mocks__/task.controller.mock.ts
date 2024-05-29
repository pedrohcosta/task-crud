
import { CreateTaskRequestDto } from '../../src/infra/controller/task/dto/create-task.request.dto';
import { TaskListResultDto } from '../..//src/infra/controller/task/dto/task-list.result.dto';
import { TaskResultDto } from '../../src/infra/controller/task/dto/task.result.dto';
import { UpdateTaskRequestDto } from '../../src/infra/controller/task/dto/update-task.request.dto';

export const createTaskRequestDtoMock: CreateTaskRequestDto = {
    "title": "string",
    "description": "string"
};

export const updateTaskRequestDtoMock: UpdateTaskRequestDto = {
    "title": "string",
    "description": "string",
    "status": 0  
};

export const taskResultDtoMock: TaskResultDto = {
    "title": "string",
    "description": "string",
    "id": "string",
    "status": 0,
    "updatedAt": new Date("2024-05-29T11:11:57.712Z"),
    "createdAt": new Date("2024-05-29T11:11:57.712Z")
};

export const taskListResultDtoMock: TaskListResultDto = {
    "total": 1,
    "data": [taskResultDtoMock]
};