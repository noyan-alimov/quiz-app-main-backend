import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './entities/quiz.entity';
import { imageGetSignedUrl } from './helpers/imageGetSignedUrl';

@Injectable()
export class QuizzesService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>
  ) {}

  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    const quiz = new Quiz();

    quiz.userId = createQuizDto.userId;
    quiz.question = createQuizDto.question;

    if (createQuizDto.imageFileName) {
      quiz.imageurl = await imageGetSignedUrl(createQuizDto.imageFileName);
    }

    return this.quizRepository.save(quiz);
  }

  findAll(): Promise<Quiz[]> {
    return this.quizRepository.find();
  }

  async findOne(id: number): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne(id);
    if (!quiz) {
      throw new HttpException('Quiz not found', HttpStatus.NOT_FOUND);
    }

    return quiz;
  }

  async update(id: number, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne(id);
    if (!quiz) {
      throw new HttpException('Quiz not found', HttpStatus.NOT_FOUND);
    }

    if (updateQuizDto.question) {
      quiz.question = updateQuizDto.question;
    }

    if (updateQuizDto.imageFileName) {
      quiz.imageurl = updateQuizDto.imageFileName;
    }

    return this.quizRepository.save(quiz);
  }

  async remove(id: number): Promise<void> {
    const quiz = await this.quizRepository.findOne(id);
    if (!quiz) {
      throw new HttpException('Quiz not found', HttpStatus.NOT_FOUND);
    }

    this.quizRepository.delete(id);
  }
}
