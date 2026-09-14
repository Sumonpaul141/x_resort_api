import { PrismaService } from '../prisma/prisma.service';
import { UpdateSettingsDto } from './dto/update-settings.dto';
export declare class SettingsService {
    private prisma;
    constructor(prisma: PrismaService);
    find(): Promise<{
        id: string;
        updatedAt: Date;
        siteName: string;
        tagline: string;
        contactEmail: string;
        contactPhone: string;
        address: string;
        currency: string;
        checkInTime: string;
        checkOutTime: string;
        resortDescription: string;
    }>;
    update(dto: UpdateSettingsDto): Promise<{
        id: string;
        updatedAt: Date;
        siteName: string;
        tagline: string;
        contactEmail: string;
        contactPhone: string;
        address: string;
        currency: string;
        checkInTime: string;
        checkOutTime: string;
        resortDescription: string;
    }>;
}
