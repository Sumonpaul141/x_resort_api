import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { UpdateSettingsDto } from './dto/update-settings.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('settings')
  find() {
    return this.settingsService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/settings')
  findAdmin() {
    return this.settingsService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/settings')
  update(@Body() dto: UpdateSettingsDto) {
    return this.settingsService.update(dto);
  }
}
