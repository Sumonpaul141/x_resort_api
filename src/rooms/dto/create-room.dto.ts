import {
  IsString,
  IsNumber,
  IsBoolean,
  IsOptional,
  IsArray,
  ValidateNested,
  IsUrl,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRoomImageDto {
  @IsUrl()
  url: string;

  @IsString()
  alt: string;
}

export class CreateRoomDto {
  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsString()
  shortDescription: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  @IsOptional()
  discountPrice?: number;

  @IsNumber()
  capacity: number;

  @IsNumber()
  @IsOptional()
  size?: number;

  @IsString()
  @IsOptional()
  bedType?: string;

  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;

  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  amenities?: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRoomImageDto)
  @IsOptional()
  images?: CreateRoomImageDto[];
}
