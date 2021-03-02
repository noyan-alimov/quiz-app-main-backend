import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Quiz } from './entities/quiz.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('quizzes')
@ApiTags('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  @ApiCreatedResponse({ type: Quiz })
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizzesService.create(createQuizDto);
  }

  @Get()
  @ApiOkResponse({ type: [Quiz] })
  findAll() {
    return this.quizzesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Quiz })
  findOne(@Param('id') id: string) {
    return this.quizzesService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ type: Quiz })
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizzesService.update(+id, updateQuizDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.quizzesService.remove(+id);
  }
}
