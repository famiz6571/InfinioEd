import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ---------- ENV VARIABLES ----------
  const PORT = process.env.PORT || 3000;
  const COOKIE_SECRET = process.env.COOKIE_SECRET || 'default_secret';
  const RAW_ORIGINS = process.env.FRONTEND_ORIGIN || '*';
  // -----------------------------------

  // Convert comma-separated origins to array
  const ALLOWED_ORIGINS =
    RAW_ORIGINS === '*' ? '*' : RAW_ORIGINS.split(',').map((o) => o.trim());

  // ---------- CORS ----------
  app.enableCors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
  });

  // ---------- Cookie Parser ----------
  app.use(cookieParser(COOKIE_SECRET));

  // ---------- Global Validation ----------
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // ---------- Swagger Setup ----------
  const config = new DocumentBuilder()
    .setTitle('Admin User API')
    .setDescription('API documentation for Admin & User Application')
    .setVersion('1.0')
    .addCookieAuth('token')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const production = process.env.NODE_ENV;

  // ---------- Start Server ----------
  await app.listen(PORT);

  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📘 Swagger docs available at http://localhost:${PORT}/api`);
  console.log(`🌍 CORS Origins Allowed:`, ALLOWED_ORIGINS);
  console.log(production);
}
bootstrap();
