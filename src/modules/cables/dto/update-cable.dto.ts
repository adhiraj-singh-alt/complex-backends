import { PartialType } from '@nestjs/swagger';
import { CreateCableDto } from './create-cable.dto';

export class UpdateCableDto extends PartialType(CreateCableDto) {}
