import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.room.findMany({
      include: { images: { orderBy: { sortOrder: 'asc' } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findPublished() {
    return this.prisma.room.findMany({
      where: { isPublished: true },
      include: { images: { orderBy: { sortOrder: 'asc' } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findBySlug(slug: string) {
    const room = await this.prisma.room.findUnique({
      where: { slug },
      include: { images: { orderBy: { sortOrder: 'asc' } } },
    });

    if (!room) {
      throw new NotFoundException(`Room with slug "${slug}" not found`);
    }

    return room;
  }

  async findById(id: string) {
    const room = await this.prisma.room.findUnique({
      where: { id },
      include: { images: { orderBy: { sortOrder: 'asc' } } },
    });

    if (!room) {
      throw new NotFoundException(`Room with id "${id}" not found`);
    }

    return room;
  }

  async create(createRoomDto: CreateRoomDto) {
    const { images, amenities, ...roomData } = createRoomDto;

    return this.prisma.room.create({
      data: {
        ...roomData,
        amenities: amenities || [],
        images: images
          ? { create: images.map((img, index) => ({ ...img, sortOrder: index })) }
          : undefined,
      },
      include: { images: true },
    });
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    await this.findById(id);

    const { images, amenities, ...roomData } = updateRoomDto;

    if (images) {
      await this.prisma.roomImage.deleteMany({ where: { roomId: id } });
    }

    return this.prisma.room.update({
      where: { id },
      data: {
        ...roomData,
        amenities: amenities,
        images: images
          ? { create: images.map((img, index) => ({ ...img, sortOrder: index })) }
          : undefined,
      },
      include: { images: true },
    });
  }

  async toggleStatus(id: string, field: 'isPublished' | 'isFeatured') {
    const room = await this.findById(id);

    return this.prisma.room.update({
      where: { id },
      data: { [field]: !room[field] },
      include: { images: true },
    });
  }

  async remove(id: string) {
    await this.findById(id);

    return this.prisma.room.delete({
      where: { id },
    });
  }
}
