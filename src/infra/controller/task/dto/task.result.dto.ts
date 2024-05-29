import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskBaseDto } from './task-base.dto';
import { StatusTask } from 'src/infra/commons/enum/status.-task.enum';


export class TaskResultDto extends TaskBaseDto {

  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty({
    enum: StatusTask,
  })
  @IsEnum(StatusTask)
  status: StatusTask;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  updatedAt?: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  createdAt?: Date;
}
