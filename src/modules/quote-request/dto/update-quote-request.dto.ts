import { PartialType } from '@nestjs/swagger';
import { CreateQuoteRequestDto } from './create-quote-request.dto';

export class UpdateQuoteRequestDto extends PartialType(CreateQuoteRequestDto) {}
