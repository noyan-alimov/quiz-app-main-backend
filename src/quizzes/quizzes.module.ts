import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities';
import { User } from 'src/users';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, User])],
  controllers: [QuizzesController],
  providers: [QuizzesService]
})
export class QuizzesModule {}
