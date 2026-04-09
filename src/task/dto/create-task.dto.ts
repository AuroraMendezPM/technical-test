import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Task Title',
    description: 'The title of the task',
  })
  @IsNotEmpty({
    message: 'Title is required',
  })
  title!: string;

  @ApiProperty({
    example: 1,
    description: 'The ID of the user',
  })
  @IsNotEmpty({
    message: 'User ID is required',
  })
  userId!: number;
}
