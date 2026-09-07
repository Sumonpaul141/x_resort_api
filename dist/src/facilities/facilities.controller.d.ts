import { FacilitiesService } from './facilities.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
export declare class FacilitiesController {
    private readonly facilitiesService;
    constructor(facilitiesService: FacilitiesService);
    getPublishedFacilities(featured?: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        isFeatured: boolean;
        isPublished: boolean;
        icon: string;
        image: string | null;
    }[]>;
    getAdminFacilities(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        isFeatured: boolean;
        isPublished: boolean;
        icon: string;
        image: string | null;
    }[]>;
    getAdminFacility(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        isFeatured: boolean;
        isPublished: boolean;
        icon: string;
        image: string | null;
    }>;
    createFacility(createFacilityDto: CreateFacilityDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        isFeatured: boolean;
        isPublished: boolean;
        icon: string;
        image: string | null;
    }>;
    updateFacility(id: string, updateFacilityDto: UpdateFacilityDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        isFeatured: boolean;
        isPublished: boolean;
        icon: string;
        image: string | null;
    }>;
    toggleFacilityStatus(id: string, field: 'isPublished' | 'isFeatured'): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        isFeatured: boolean;
        isPublished: boolean;
        icon: string;
        image: string | null;
    }>;
    removeFacility(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        isFeatured: boolean;
        isPublished: boolean;
        icon: string;
        image: string | null;
    }>;
}
