import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { QuizzesModule } from './quizzes/quizzes.module';
import { Quiz } from './quizzes/entities/quiz.entity';
import { AnswersModule } from './answers/answers.module';
import { Answer } from './answers/entities/answer.entity';
import { config } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.DB_PATH,
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
