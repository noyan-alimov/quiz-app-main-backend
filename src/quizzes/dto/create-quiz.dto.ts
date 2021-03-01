import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  question: string;

  @ApiProperty()
  imageFileName?: string;
}
