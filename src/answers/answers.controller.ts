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
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from './entities/answer.entity';

@Controller('answers')
@ApiTags('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  @ApiCreatedResponse({ type: Answer })
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answersService.create(createAnswerDto);
  }

  @Get()
  @ApiOkResponse({ type: [Answer] })
  findAll() {
    return this.answersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Answer })
  findOne(@Param('id') id: string) {
    return this.answersService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ type: Answer })
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.answersService.update(+id, updateAnswerDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.answersService.remove(+id);
  }
}
