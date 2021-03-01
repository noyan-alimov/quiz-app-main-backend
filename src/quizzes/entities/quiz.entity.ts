import { User } from 'src/users';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Answer } from '../../answers';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @OneToMany(() => Answer, answer => answer.quiz)
  answers: Answer[];

  @Column({ nullable: true })
  imageurl: string;

  @ManyToOne(() => User, user => user.quizzes)
  user: User;
}
