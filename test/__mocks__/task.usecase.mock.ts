
import { CreateTaskRequest } from '../../src/usecase/dto/create-task.request';
import { TaskListResult } from '../../src/usecase/dto/task-list.result';
import { TaskResult } from '../../src/usecase/dto/task.result';
import { UpdateTaskRequest } from '../../src/usecase/dto/update-task.request';

export const createTaskRequestMock: CreateTaskRequest = {
    "title": "string",
    "description": "string"
};

export const updateTaskRequestMock: UpdateTaskRequest = {
    "title": "string",
    "description": "string",
    "status": 0  
};

export const taskResultMock: TaskResult = {
    "title": "string",
    "description": "string",
    "id": "string",
    "status": 0,
    "updatedAt": new Date("2024-05-29T11:11:57.712Z"),
    "createdAt": new Date("2024-05-29T11:11:57.712Z")
};

export const taskListResultMock: TaskListResult = {
    "total": 1,
    "data": [taskResultMock]
};