import { IsString, IsUrl, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateGalleryDto {
  @IsString()
  title: string;

  @IsUrl()
  url: string;

  @IsString()
  category: string;

  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;

  @IsNumber()
  @IsOptional()
  sortOrder?: number;
}
