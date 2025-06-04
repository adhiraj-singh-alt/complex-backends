import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuoteRequestDto } from './dto/create-quote-request.dto';
import { Resend } from 'resend';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QuoteRequestService {
  constructor(
    private readonly resend: Resend,
    private readonly configService: ConfigService,
  ) {}

  create(createQuoteRequestDto: CreateQuoteRequestDto) {
    console.log(this.configService.get('RESEND_FROM'));
    console.log('Quote request data:', createQuoteRequestDto);
    return { message: 'Quote request received' };
    // TODO: Implement email sending logic
    // const { name, email, phone, message } = createQuoteRequestDto;
    // const { data, error } = await this.resend.emails.send({
    //   from: `${this.configService.get('RESEND_FROM')}`,
    //   to: ['delivered@resend.dev'],
    //   subject: 'Hello world!',
    //   html: '',
    // });

    // if (error) {
    //   throw new BadRequestException(error.message);
    // }

    // return data;
  }
}
