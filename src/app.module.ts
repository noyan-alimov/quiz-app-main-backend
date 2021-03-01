import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule, User } from './users';
import { QuizzesModule, Quiz } from './quizzes';
import { AnswersModule, Answer } from './answers';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'quizzapp',
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
