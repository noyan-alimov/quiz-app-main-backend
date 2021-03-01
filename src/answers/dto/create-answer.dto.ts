import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty()
  quizId: number;

  @ApiProperty()
  answer: string;

  @ApiProperty()
  correct: boolean;
}
