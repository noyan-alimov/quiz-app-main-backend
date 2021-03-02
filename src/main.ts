import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NextFunction } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Quiz App')
    .setDescription('The Quiz App API description')
    .setVersion('1.0')
    .addTag('quizzes')
    .addTag('answers')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use((err: Error, req: Request, res: any, next: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({ statusCode: 401, message: 'Unauthorized' });
    } else if (err.name === 'ForbiddenError') {
      res.status(403).json({ statusCode: 403, message: 'Forbidden' });
    } else {
      next();
    }
  });

  await app.listen(8000);
}
bootstrap();
