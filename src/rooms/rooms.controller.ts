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
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get('rooms')
  getPublishedRooms() {
    return this.roomsService.findPublished();
  }

  @Get('rooms/:slug')
  getRoomBySlug(@Param('slug') slug: string) {
    return this.roomsService.findBySlug(slug);
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/rooms')
  getAdminRooms() {
    return this.roomsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/rooms/:id')
  getAdminRoom(@Param('id') id: string) {
    return this.roomsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('admin/rooms')
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/rooms/:id')
  updateRoom(
    @Param('id') id: string,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    return this.roomsService.update(id, updateRoomDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/rooms/:id/toggle')
  toggleRoomStatus(
    @Param('id') id: string,
    @Query('field') field: 'isPublished' | 'isFeatured',
  ) {
    return this.roomsService.toggleStatus(id, field);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('admin/rooms/:id')
  removeRoom(@Param('id') id: string) {
    return this.roomsService.remove(id);
  }
}
