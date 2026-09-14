import { SettingsService } from './settings.service';
import { UpdateSettingsDto } from './dto/update-settings.dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
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
    findAdmin(): Promise<{
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
