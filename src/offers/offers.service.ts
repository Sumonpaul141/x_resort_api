import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.offer.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findActive() {
    const now = new Date();
    return this.prisma.offer.findMany({
      where: {
        isActive: true,
        validFrom: { lte: now },
        validTo: { gte: now },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    const offer = await this.prisma.offer.findUnique({
      where: { id },
    });

    if (!offer) {
      throw new NotFoundException(`Offer with id "${id}" not found`);
    }

    return offer;
  }

  async create(createOfferDto: CreateOfferDto) {
    return this.prisma.offer.create({
      data: createOfferDto,
    });
  }

  async update(id: string, updateOfferDto: UpdateOfferDto) {
    await this.findById(id);

    return this.prisma.offer.update({
      where: { id },
      data: updateOfferDto,
    });
  }

  async toggleStatus(id: string) {
    const offer = await this.findById(id);

    return this.prisma.offer.update({
      where: { id },
      data: { isActive: !offer.isActive },
    });
  }

  async remove(id: string) {
    await this.findById(id);

    return this.prisma.offer.delete({
      where: { id },
    });
  }
}
