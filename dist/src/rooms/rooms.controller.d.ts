import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    getPublishedRooms(): Promise<({
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
    getRoomBySlug(slug: string): Promise<{
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
    getAdminRooms(): Promise<({
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
    getAdminRoom(id: string): Promise<{
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
    createRoom(createRoomDto: CreateRoomDto): Promise<{
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
    updateRoom(id: string, updateRoomDto: UpdateRoomDto): Promise<{
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
    toggleRoomStatus(id: string, field: 'isPublished' | 'isFeatured'): Promise<{
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
    removeRoom(id: string): Promise<{
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
