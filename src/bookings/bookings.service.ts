import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingStatus } from '@prisma/client';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.booking.findMany({
      include: { room: true },
      orderBy: { requestedAt: 'desc' },
    });
  }

  async findById(id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: { room: true },
    });

    if (!booking) {
      throw new NotFoundException(`Booking with id "${id}" not found`);
    }

    return booking;
  }

  async create(createBookingDto: CreateBookingDto) {
    const { roomId, total, ...bookingData } = createBookingDto;

    let finalTotal = total;

    if (!finalTotal) {
      const room = await this.prisma.room.findUnique({ where: { id: roomId } });
      if (!room) {
        throw new NotFoundException(`Room with id "${roomId}" not found`);
      }
      finalTotal = room.price;
    }

    return this.prisma.booking.create({
      data: {
        ...bookingData,
        roomId,
        total: finalTotal,
      },
      include: { room: true },
    });
  }

  async updateStatus(id: string, status: BookingStatus) {
    await this.findById(id);

    return this.prisma.booking.update({
      where: { id },
      data: { status },
      include: { room: true },
    });
  }
}
