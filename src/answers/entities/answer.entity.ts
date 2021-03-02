import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from '../../quizzes/entities/quiz.entity';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Id of an Answer' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Yuri Gagarin', description: 'Answer to a question' })
  answer: string;

  @Column()
  @ApiProperty({
    example: true,
    description: 'Indicates whether this answer is correct'
  })
  correct: boolean;

  @ManyToOne(() => Quiz, quiz => quiz.answers)
  quiz: Quiz;
}
