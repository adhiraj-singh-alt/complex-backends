import { Controller, Post, Body } from '@nestjs/common';
import { QuoteRequestService } from './quote-request.service';
import { CreateQuoteRequestDto } from './dto/create-quote-request.dto';

@Controller('quote-request')
export class QuoteRequestController {
  constructor(private readonly quoteRequestService: QuoteRequestService) {}

  @Post()
  create(@Body() createQuoteRequestDto: CreateQuoteRequestDto) {
    return this.quoteRequestService.create(createQuoteRequestDto);
  }
}
