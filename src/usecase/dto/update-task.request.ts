import { StatusTask } from 'src/infra/commons/enum/status.-task.enum';
import { TaskBase } from './task.base';


export class UpdateTaskRequest extends TaskBase {
    status: StatusTask;
}
