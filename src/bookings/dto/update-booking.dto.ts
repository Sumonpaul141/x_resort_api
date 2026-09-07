import { IsEnum, IsString, IsOptional } from 'class-validator';
import { BookingStatus } from '@prisma/client';

export class UpdateBookingDto {
  @IsEnum(BookingStatus)
  status: BookingStatus;

  @IsString()
  @IsOptional()
  notes?: string;
}
