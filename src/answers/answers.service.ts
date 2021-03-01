import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizzesService } from 'src/quizzes/quizzes.service';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
    private quizzesService: QuizzesService
  ) {}

  async create(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    const answer = new Answer();
    answer.answer = createAnswerDto.answer;
    answer.correct = createAnswerDto.correct;

    const quiz = await this.quizzesService.findOne(createAnswerDto.quizId);
    answer.quiz = quiz;

    return this.answerRepository.save(answer);
  }

  findAll(): Promise<Answer[]> {
    return this.answerRepository.find();
  }

  async findOne(id: number): Promise<Answer> {
    const answer = await this.answerRepository.findOne(id);
    if (!answer) {
      throw new HttpException('Answer not found', HttpStatus.NOT_FOUND);
    }

    return answer;
  }

  async update(id: number, updateAnswerDto: UpdateAnswerDto): Promise<Answer> {
    const answer = await this.answerRepository.findOne(id);
    if (!answer) {
      throw new HttpException('Answer not found', HttpStatus.NOT_FOUND);
    }

    if (updateAnswerDto.answer) {
      answer.answer = updateAnswerDto.answer;
    }

    if (updateAnswerDto.correct) {
      answer.correct = updateAnswerDto.correct;
    }

    return this.answerRepository.save(answer);
  }

  async remove(id: number): Promise<void> {
    const answer = await this.answerRepository.findOne(id);
    if (!answer) {
      throw new HttpException('Answer not found', HttpStatus.NOT_FOUND);
    }

    this.answerRepository.delete(id);
  }
}
