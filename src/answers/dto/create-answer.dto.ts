import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty({ example: 1, description: 'Id of an Answer' })
  quizId: number;

  @ApiProperty({ example: 'Yuri Gagarin', description: 'Answer to a Quiz' })
  answer: string;

  @ApiProperty({
    example: true,
    description: 'Indicates whether this answer is correct or not'
  })
  correct: boolean;
}

class AnswerDto {
  @ApiProperty({ example: 'Yuri Gagarin', description: 'Answer to a Quiz' })
  answer: string;

  @ApiProperty({
    example: true,
    description: 'Indicates whether this answer is correct or not'
  })
  correct: boolean;
}

export class CreateMultipleAnswersDto {
  @ApiProperty({ example: 1, description: 'Id of an Answer' })
  quizId: number;

  answers: AnswerDto[];
}
