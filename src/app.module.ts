import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesModule } from './quizzes/quizzes.module';
import { Quiz } from './quizzes/entities/quiz.entity';
import { AnswersModule } from './answers/answers.module';
import { Answer } from './answers/entities/answer.entity';
import { config } from './config';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.DB_PATH,
      entities: [Quiz, Answer],
      synchronize: true
    }),
    QuizzesModule,
    AnswersModule,
    AuthzModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
