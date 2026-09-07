import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const [
      totalRooms,
      totalBookings,
      totalRevenue,
      pendingBookings,
      recentBookings,
      publishedRooms,
      draftRooms,
    ] = await Promise.all([
      this.prisma.room.count(),
      this.prisma.booking.count(),
      this.prisma.booking.aggregate({
        _sum: { total: true },
        where: {
          status: { in: ['CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT'] },
        },
      }),
      this.prisma.booking.count({
        where: { status: 'PENDING' },
      }),
      this.prisma.booking.findMany({
        take: 5,
        include: { room: true },
        orderBy: { requestedAt: 'desc' },
      }),
      this.prisma.room.count({ where: { isPublished: true } }),
      this.prisma.room.count({ where: { isPublished: false } }),
    ]);

    return {
      totalRooms,
      totalBookings,
      totalRevenue: totalRevenue._sum.total ?? 0,
      pendingBookings,
      recentBookings,
      roomsByStatus: {
        published: publishedRooms,
        draft: draftRooms,
      },
    };
  }
}
