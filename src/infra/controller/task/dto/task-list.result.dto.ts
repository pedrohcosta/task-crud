import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { TaskResultDto } from './task.result.dto';


export class TaskListResultDto {

  @ApiProperty()
  @IsInt()
  total: number;

  @ApiProperty({
    isArray:true,
    type: TaskResultDto
  })
  data: TaskResultDto[];
}
