import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsArray,
  IsUrl,
} from 'class-validator';

export class CreatePackageDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  shortDescription: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  duration: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  includes?: string[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsUrl()
  @IsOptional()
  image?: string;
}
