import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { TaskBaseDto } from './task-base.dto';
import { StatusTask } from 'src/infra/commons/enum/status.-task.enum';


export class UpdateTaskRequestDto extends TaskBaseDto {
    @ApiProperty({
    enum: StatusTask,
    })
    @IsEnum(StatusTask)
    status: StatusTask;
}
