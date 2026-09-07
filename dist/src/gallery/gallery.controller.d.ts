import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    getPublishedGallery(): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        sortOrder: number;
        title: string;
        category: string;
    }[]>;
    getAdminGallery(): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        sortOrder: number;
        title: string;
        category: string;
    }[]>;
    createGalleryItem(createGalleryDto: CreateGalleryDto): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        sortOrder: number;
        title: string;
        category: string;
    }>;
    toggleGalleryItemStatus(id: string): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        isPublished: boolean;
        sortOrder: number;
        title: string;
        category: string;
    }>;
    removeGalleryItem(id: string): Promise<{
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
