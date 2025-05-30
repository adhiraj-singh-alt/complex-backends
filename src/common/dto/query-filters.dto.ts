// src/products/dto/filters.dto.ts
import { IsOptional, IsNumber, IsString, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { SortOrder } from '../enums';
import { ApiProperty } from '@nestjs/swagger';

export class FiltersDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number = 0;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number = 10;

  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ enum: SortOrder })
  @IsOptional()
  @IsEnum(SortOrder)
  sort?: SortOrder = SortOrder.ASC;
}
