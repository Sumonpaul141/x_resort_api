import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';

@Injectable()
export class FacilitiesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.facility.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findPublished(featured = false) {
    return this.prisma.facility.findMany({
      where: {
        isPublished: true,
        ...(featured ? { isFeatured: true } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    const facility = await this.prisma.facility.findUnique({
      where: { id },
    });

    if (!facility) {
      throw new NotFoundException(`Facility with id "${id}" not found`);
    }

    return facility;
  }

  async create(createFacilityDto: CreateFacilityDto) {
    return this.prisma.facility.create({
      data: createFacilityDto,
    });
  }

  async update(id: string, updateFacilityDto: UpdateFacilityDto) {
    await this.findById(id);

    return this.prisma.facility.update({
      where: { id },
      data: updateFacilityDto,
    });
  }

  async toggleStatus(id: string, field: 'isPublished' | 'isFeatured') {
    const facility = await this.findById(id);

    return this.prisma.facility.update({
      where: { id },
      data: { [field]: !facility[field] },
    });
  }

  async remove(id: string) {
    await this.findById(id);

    return this.prisma.facility.delete({
      where: { id },
    });
  }
}
