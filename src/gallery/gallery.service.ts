import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.galleryItem.findMany({
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
  }

  async findPublished() {
    return this.prisma.galleryItem.findMany({
      where: { isPublished: true },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
  }

  async findById(id: string) {
    const item = await this.prisma.galleryItem.findUnique({
      where: { id },
    });

    if (!item) {
      throw new NotFoundException(`Gallery item with id "${id}" not found`);
    }

    return item;
  }

  async create(createGalleryDto: CreateGalleryDto) {
    return this.prisma.galleryItem.create({
      data: createGalleryDto,
    });
  }

  async toggleStatus(id: string) {
    const item = await this.findById(id);

    return this.prisma.galleryItem.update({
      where: { id },
      data: { isPublished: !item.isPublished },
    });
  }

  async remove(id: string) {
    await this.findById(id);

    return this.prisma.galleryItem.delete({
      where: { id },
    });
  }
}
