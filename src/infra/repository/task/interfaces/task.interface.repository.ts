import { TaskEntityRepository } from "../entities/task.entity.repository";

export interface ITaskRepository {
  create(model: TaskEntityRepository): Promise<TaskEntityRepository>;
  get(id: string): Promise<TaskEntityRepository>;
  update(id: string, model: TaskEntityRepository): Promise<TaskEntityRepository>;
  delete(id: string): Promise<void>;
  getList(): Promise<TaskEntityRepository[]>;
}
