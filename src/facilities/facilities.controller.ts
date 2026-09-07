import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class FacilitiesController {
  constructor(private readonly facilitiesService: FacilitiesService) {}

  @Get('facilities')
  getPublishedFacilities(@Query('featured') featured?: string) {
    return this.facilitiesService.findPublished(featured === 'true');
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/facilities')
  getAdminFacilities() {
    return this.facilitiesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/facilities/:id')
  getAdminFacility(@Param('id') id: string) {
    return this.facilitiesService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('admin/facilities')
  createFacility(@Body() createFacilityDto: CreateFacilityDto) {
    return this.facilitiesService.create(createFacilityDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/facilities/:id')
  updateFacility(
    @Param('id') id: string,
    @Body() updateFacilityDto: UpdateFacilityDto,
  ) {
    return this.facilitiesService.update(id, updateFacilityDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/facilities/:id/toggle')
  toggleFacilityStatus(
    @Param('id') id: string,
    @Query('field') field: 'isPublished' | 'isFeatured',
  ) {
    return this.facilitiesService.toggleStatus(id, field);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('admin/facilities/:id')
  removeFacility(@Param('id') id: string) {
    return this.facilitiesService.remove(id);
  }
}
