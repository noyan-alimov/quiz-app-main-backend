import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities';
import { Quiz } from 'src/quizzes';

@Module({
  imports: [TypeOrmModule.forFeature([Answer, Quiz])],
  controllers: [AnswersController],
  providers: [AnswersService]
})
export class AnswersModule {}
