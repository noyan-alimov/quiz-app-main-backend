import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from '../../quizzes/entities/quiz.entity';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer: string;

  @Column()
  correct: boolean;

  @ManyToOne(() => Quiz, quiz => quiz.answers)
  quiz: Quiz;
}
