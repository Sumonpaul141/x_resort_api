import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';

@Injectable()
export class PackagesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.package.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findActive() {
    return this.prisma.package.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    const pkg = await this.prisma.package.findUnique({
      where: { id },
    });

    if (!pkg) {
      throw new NotFoundException(`Package with id "${id}" not found`);
    }

    return pkg;
  }

  async create(createPackageDto: CreatePackageDto) {
    return this.prisma.package.create({
      data: createPackageDto,
    });
  }

  async update(id: string, updatePackageDto: UpdatePackageDto) {
    await this.findById(id);

    return this.prisma.package.update({
      where: { id },
      data: updatePackageDto,
    });
  }

  async toggleStatus(id: string) {
    const pkg = await this.findById(id);

    return this.prisma.package.update({
      where: { id },
      data: { isActive: !pkg.isActive },
    });
  }

  async remove(id: string) {
    await this.findById(id);

    return this.prisma.package.delete({
      where: { id },
    });
  }
}
