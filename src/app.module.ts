import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { RoomsModule } from './rooms/rooms.module';
import { FacilitiesModule } from './facilities/facilities.module';
import { OffersModule } from './offers/offers.module';
import { PackagesModule } from './packages/packages.module';
import { GalleryModule } from './gallery/gallery.module';
import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';
import { SettingsModule } from './settings/settings.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    RoomsModule,
    FacilitiesModule,
    OffersModule,
    PackagesModule,
    GalleryModule,
    BookingsModule,
    UsersModule,
    SettingsModule,
    DashboardModule,
  ],
})
export class AppModule {}
