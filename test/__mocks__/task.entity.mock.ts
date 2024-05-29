
import { Task } from '../../src/domain/task/entities/task.entity';

export const taskMock = new Task({
    "title": "string",
    "description": "string",
    "status": 0,
    "updatedAt": new Date("2024-05-29T11:11:57.712Z"),
    "createdAt": new Date("2024-05-29T11:11:57.712Z")
});

