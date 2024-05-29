import { randomUUID } from "crypto";
import { StatusTask } from "src/infra/commons/enum/status.-task.enum";

export class Task {
  public id: string;
  public title: string;
  public description: string;
  public createdAt: Date;
  public updatedAt: Date;
  public status: StatusTask;
 
  constructor(props: {title: string; description: string; status?: StatusTask; createdAt?: Date; updatedAt?: Date; }) {
    this.title = props.title;
    this.description = props.description;
    this.status = props.status;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  public setId() {
    this.id = randomUUID();
  }

  public setStatus(status: StatusTask) {
    this.status = status;
  }

  public setCreatedAt() {
    this.createdAt = new Date();
  }

  public setUpdatedAt() {
    this.updatedAt = new Date();
  }
}