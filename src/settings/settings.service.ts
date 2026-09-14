import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateSettingsDto } from './dto/update-settings.dto';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}

  async find() {
    let settings = await this.prisma.siteSettings.findUnique({
      where: { id: 'singleton' },
    });

    if (!settings) {
      settings = await this.prisma.siteSettings.create({
        data: {
          id: 'singleton',
          contactEmail: '',
          contactPhone: '',
          address: '',
        },
      });
    }

    return settings;
  }

  async update(dto: UpdateSettingsDto) {
    return this.prisma.siteSettings.upsert({
      where: { id: 'singleton' },
      create: {
        id: 'singleton',
        contactEmail: dto.contactEmail || '',
        contactPhone: dto.contactPhone || '',
        address: dto.address || '',
        siteName: dto.siteName,
        tagline: dto.tagline,
        currency: dto.currency,
        checkInTime: dto.checkInTime,
        checkOutTime: dto.checkOutTime,
        resortDescription: dto.resortDescription,
      },
      update: dto,
    });
  }
}
