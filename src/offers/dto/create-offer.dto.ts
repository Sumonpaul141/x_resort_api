import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsArray,
  IsDateString,
  IsUrl,
} from 'class-validator';

export class CreateOfferDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  shortDescription: string;

  @IsString()
  description: string;

  @IsNumber()
  discountPercent: number;

  @IsDateString()
  validFrom: string;

  @IsDateString()
  validTo: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  terms?: string[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsUrl()
  @IsOptional()
  image?: string;
}
