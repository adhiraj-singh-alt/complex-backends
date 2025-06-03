import { HttpStatus, Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { CablesModule } from './modules/cables/cables.module';
import { CategoriesModule } from './modules/categories/categories.module';
import configuration from './config/configuration';
import { PrismaModule, providePrismaClientExceptionFilter } from 'nestjs-prisma';
import { MulterModule } from '@nestjs/platform-express';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionsLoggerFilter } from './common/utils/exceptionsLogger.filter';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        prismaOptions: {
          log: [
            {
              emit: 'stdout',
              level: 'error',
            },
            {
              emit: 'stdout',
              level: 'warn',
            },
          ],
        },
      },
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    CablesModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionsLoggerFilter,
    },
    providePrismaClientExceptionFilter({
      P2000: HttpStatus.BAD_REQUEST,
      P2002: { statusCode: HttpStatus.CONFLICT, errorMessage: 'Same resource already exists' },
      P2025: { statusCode: HttpStatus.NOT_FOUND, errorMessage: 'Resource not found' },
      P2003: HttpStatus.BAD_REQUEST,
    }),
  ],
})
export class AppModule {}
