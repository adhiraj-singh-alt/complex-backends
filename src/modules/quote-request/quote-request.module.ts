import { Module } from '@nestjs/common';
import { QuoteRequestService } from './quote-request.service';
import { QuoteRequestController } from './quote-request.controller';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Module({
  controllers: [QuoteRequestController],
  providers: [
    QuoteRequestService,
    {
      provide: Resend,
      useFactory: (configService: ConfigService) => {
        const apiKey = configService.get<string>('RESEND_API_KEY');
        return new Resend(apiKey);
      },
      inject: [ConfigService],
    },
  ],
})
export class QuoteRequestModule {}
