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
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller()
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get('offers')
  getActiveOffers() {
    return this.offersService.findActive();
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/offers')
  getAdminOffers() {
    return this.offersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('admin/offers/:id')
  getAdminOffer(@Param('id') id: string) {
    return this.offersService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('admin/offers')
  createOffer(@Body() createOfferDto: CreateOfferDto) {
    return this.offersService.create(createOfferDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/offers/:id')
  updateOffer(
    @Param('id') id: string,
    @Body() updateOfferDto: UpdateOfferDto,
  ) {
    return this.offersService.update(id, updateOfferDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('admin/offers/:id/toggle')
  toggleOfferStatus(@Param('id') id: string) {
    return this.offersService.toggleStatus(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('admin/offers/:id')
  removeOffer(@Param('id') id: string) {
    return this.offersService.remove(id);
  }
}
