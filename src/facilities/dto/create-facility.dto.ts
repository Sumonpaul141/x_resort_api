import { IsString, IsBoolean, IsOptional, IsUrl } from 'class-validator';

export class CreateFacilityDto {
  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsString()
  shortDescription: string;

  @IsString()
  description: string;

  @IsString()
  icon: string;

  @IsUrl()
  @IsOptional()
  image?: string;

  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;

  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;
}
