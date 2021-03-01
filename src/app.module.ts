import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { QuizzesModule } from './quizzes/quizzes.module';
import { Quiz } from './quizzes/entities/quiz.entity';
import { AnswersModule } from './answers/answers.module';
import { Answer } from './answers/entities/answer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'quizapp',
      entities: [User, Quiz, Answer],
      synchronize: true
    }),
    UsersModule,
    QuizzesModule,
    AnswersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
