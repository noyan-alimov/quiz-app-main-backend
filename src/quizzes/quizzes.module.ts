import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz]), UsersModule],
  controllers: [QuizzesController],
  providers: [QuizzesService],
  exports: [QuizzesService]
})
export class QuizzesModule {}
