import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post('bookings')
  createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingsService.create(createBookingDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/bookings')
  getAdminBookings() {
    return this.bookingsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/bookings/:id')
  getAdminBooking(@Param('id') id: string) {
    return this.bookingsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/bookings/:id')
  updateBookingStatus(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    return this.bookingsService.updateStatus(
      id,
      updateBookingDto.status,
    );
  }
}
