import { StatusTask } from 'src/infra/commons/enum/status.-task.enum';
import { TaskBase } from './task.base';


export class TaskResult extends TaskBase {
  id: string;
  status: StatusTask;
  updatedAt?: Date;
  createdAt?: Date;
}
