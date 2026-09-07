import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get('gallery')
  getPublishedGallery() {
    return this.galleryService.findPublished();
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/gallery')
  getAdminGallery() {
    return this.galleryService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('admin/gallery')
  createGalleryItem(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.create(createGalleryDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/gallery/:id/toggle')
  toggleGalleryItemStatus(@Param('id') id: string) {
    return this.galleryService.toggleStatus(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('admin/gallery/:id')
  removeGalleryItem(@Param('id') id: string) {
    return this.galleryService.remove(id);
  }
}
