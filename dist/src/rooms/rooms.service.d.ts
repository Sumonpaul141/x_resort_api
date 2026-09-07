import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        images: {
            url: string;
            id: string;
            alt: string;
            sortOrder: number;
            roomId: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        price: number;
        discountPrice: number | null;
        capacity: number;
        size: number | null;
        bedType: string | null;
        isFeatured: boolean;
        isPublished: boolean;
        amenities: string[];
    })[]>;
    findPublished(): Promise<({
        images: {
            url: string;
            id: string;
            alt: string;
            sortOrder: number;
            roomId: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        price: number;
        discountPrice: number | null;
        capacity: number;
        size: number | null;
        bedType: string | null;
        isFeatured: boolean;
        isPublished: boolean;
        amenities: string[];
    })[]>;
    findBySlug(slug: string): Promise<{
        images: {
            url: string;
            id: string;
            alt: string;
            sortOrder: number;
            roomId: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        price: number;
        discountPrice: number | null;
        capacity: number;
        size: number | null;
        bedType: string | null;
        isFeatured: boolean;
        isPublished: boolean;
        amenities: string[];
    }>;
    findById(id: string): Promise<{
        images: {
            url: string;
            id: string;
            alt: string;
            sortOrder: number;
            roomId: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        price: number;
        discountPrice: number | null;
        capacity: number;
        size: number | null;
        bedType: string | null;
        isFeatured: boolean;
        isPublished: boolean;
        amenities: string[];
    }>;
    create(createRoomDto: CreateRoomDto): Promise<{
        images: {
            url: string;
            id: string;
            alt: string;
            sortOrder: number;
            roomId: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        price: number;
        discountPrice: number | null;
        capacity: number;
        size: number | null;
        bedType: string | null;
        isFeatured: boolean;
        isPublished: boolean;
        amenities: string[];
    }>;
    update(id: string, updateRoomDto: UpdateRoomDto): Promise<{
        images: {
            url: string;
            id: string;
            alt: string;
            sortOrder: number;
            roomId: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        price: number;
        discountPrice: number | null;
        capacity: number;
        size: number | null;
        bedType: string | null;
        isFeatured: boolean;
        isPublished: boolean;
        amenities: string[];
    }>;
    toggleStatus(id: string, field: 'isPublished' | 'isFeatured'): Promise<{
        images: {
            url: string;
            id: string;
            alt: string;
            sortOrder: number;
            roomId: string;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        price: number;
        discountPrice: number | null;
        capacity: number;
        size: number | null;
        bedType: string | null;
        isFeatured: boolean;
        isPublished: boolean;
        amenities: string[];
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        shortDescription: string;
        description: string;
        price: number;
        discountPrice: number | null;
        capacity: number;
        size: number | null;
        bedType: string | null;
        isFeatured: boolean;
        isPublished: boolean;
        amenities: string[];
    }>;
}
