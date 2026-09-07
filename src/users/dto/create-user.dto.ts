import { IsString, IsEmail, IsOptional, MinLength } from 'class-validator';
import { UserRole, UserStatus } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  role?: UserRole;

  @IsOptional()
  status?: UserStatus;
}
