import { Quiz } from 'src/quizzes';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @OneToMany(() => Quiz, quiz => quiz.user)
  quizzes: Quiz[];
}
