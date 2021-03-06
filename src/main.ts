import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NextFunction } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  app.setGlobalPrefix('api/v0/main-backend');

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

  await app.listen(8080);
}
bootstrap();
