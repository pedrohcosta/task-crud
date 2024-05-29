import { StatusTask } from "src/infra/commons/enum/status.-task.enum";

export class TaskEntityRepository {
  public id: string;
  public title: string;
  public description: string;
  public createdAt: Date;
  public updatedAt: Date;
  public status: StatusTask;
  
  constructor(props: {id: string, title: string; description: string; status?: StatusTask; createdAt?: Date; updatedAt?: Date; }) {
    this.id = props.id;
    this.title = props.title;
    this.description = props.description;
    this.status = props.status;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}  