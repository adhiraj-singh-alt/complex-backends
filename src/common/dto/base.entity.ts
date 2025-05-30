import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsDate, IsInt, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class BaseEntity {
  @ApiHideProperty()
  @Exclude()
  @IsInt()
  id: number;

  @IsUUID()
  uuid: UUID;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @ApiHideProperty()
  @Exclude()
  @IsDate()
  deletedAt: Date;
}
