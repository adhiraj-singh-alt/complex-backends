import { Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class ExceptionsLoggerFilter extends BaseExceptionFilter {
  private readonly logger = new Logger('Exception error message');

  catch(exception: unknown, host: ArgumentsHost) {
    this.logger.error(exception);
    super.catch(exception, host);
  }
}
