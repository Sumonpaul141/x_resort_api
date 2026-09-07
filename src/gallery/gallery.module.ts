import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';

@Module({
  imports: [PrismaModule],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}
