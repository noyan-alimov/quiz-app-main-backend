import { ApiProperty } from '@nestjs/swagger';
import { Quiz } from 'src/quizzes/entities/quiz.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Id of a User' })
  id: number;

  @Column()
  @ApiProperty({ example: 'john@mail.com', description: 'Email of a User' })
  email: string;

  @Column()
  @ApiProperty({ example: 'John', description: 'Name of a User' })
  name: string;

  @OneToMany(() => Quiz, quiz => quiz.user)
  quizzes: Quiz[];
}
