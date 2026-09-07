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
import { PackagesService } from './packages.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Get('packages')
  getActivePackages() {
    return this.packagesService.findActive();
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/packages')
  getAdminPackages() {
    return this.packagesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/packages/:id')
  getAdminPackage(@Param('id') id: string) {
    return this.packagesService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('admin/packages')
  createPackage(@Body() createPackageDto: CreatePackageDto) {
    return this.packagesService.create(createPackageDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/packages/:id')
  updatePackage(
    @Param('id') id: string,
    @Body() updatePackageDto: UpdatePackageDto,
  ) {
    return this.packagesService.update(id, updatePackageDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/packages/:id/toggle')
  togglePackageStatus(@Param('id') id: string) {
    return this.packagesService.toggleStatus(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('admin/packages/:id')
  removePackage(@Param('id') id: string) {
    return this.packagesService.remove(id);
  }
}
