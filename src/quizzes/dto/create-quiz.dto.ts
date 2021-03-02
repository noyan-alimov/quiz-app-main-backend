import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  question: string;

  @ApiProperty()
  imageFileName?: string;
}
