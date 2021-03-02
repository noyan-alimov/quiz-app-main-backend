import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Answer } from '../../answers/entities/answer.entity';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Id of a Quiz' })
  id: number;

  @Column()
  @ApiProperty({
    example: 'skdfjhskdfjh',
    description: 'Id of a User who created the Quiz'
  })
  userId: string;

  @Column()
  @ApiProperty({
    example: 'Who was the first man that went to space?',
    description: 'Question of the Quiz'
  })
  question: string;

  @OneToMany(() => Answer, answer => answer.quiz)
  answers: Answer[];

  @Column({ nullable: true })
  @ApiProperty({ example: 'space.jpg', description: 'Image URL of the Quiz' })
  imageurl: string;
}
