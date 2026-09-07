import { PrismaService } from '../prisma/prisma.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
export declare class FacilitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
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
    findPublished(featured?: boolean): Promise<{
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
    findById(id: string): Promise<{
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
    create(createFacilityDto: CreateFacilityDto): Promise<{
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
    update(id: string, updateFacilityDto: UpdateFacilityDto): Promise<{
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
    toggleStatus(id: string, field: 'isPublished' | 'isFeatured'): Promise<{
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
    remove(id: string): Promise<{
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
