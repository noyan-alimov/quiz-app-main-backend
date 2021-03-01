import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { QuizzesModule } from 'src/quizzes/quizzes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Answer]), QuizzesModule],
  controllers: [AnswersController],
  providers: [AnswersService]
})
export class AnswersModule {}
