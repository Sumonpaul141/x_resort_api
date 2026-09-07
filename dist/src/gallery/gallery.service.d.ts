import { PrismaService } from '../prisma/prisma.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
export declare class GalleryService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        sortOrder: number;
        title: string;
        category: string;
    }[]>;
    findPublished(): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        sortOrder: number;
        title: string;
        category: string;
    }[]>;
    findById(id: string): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        sortOrder: number;
        title: string;
        category: string;
    }>;
    create(createGalleryDto: CreateGalleryDto): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        sortOrder: number;
        title: string;
        category: string;
    }>;
    toggleStatus(id: string): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        sortOrder: number;
        title: string;
        category: string;
    }>;
    remove(id: string): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        sortOrder: number;
        title: string;
        category: string;
    }>;
}
