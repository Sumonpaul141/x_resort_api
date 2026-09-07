import {
  IsString,
  IsEmail,
  IsOptional,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateBookingDto {
  @IsString()
  guestName: string;

  @IsEmail()
  guestEmail: string;

  @IsString()
  @IsOptional()
  guestPhone?: string;

  @IsString()
  roomId: string;

  @IsDateString()
  checkIn: string;

  @IsDateString()
  checkOut: string;

  @IsNumber()
  guests: number;

  @IsNumber()
  @IsOptional()
  total?: number;

  @IsString()
  @IsOptional()
  notes?: string;
}
