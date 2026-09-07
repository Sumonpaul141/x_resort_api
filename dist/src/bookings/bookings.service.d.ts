import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingStatus } from '@prisma/client';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        room: {
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
        };
    } & {
        id: string;
        status: import("@prisma/client").$Enums.BookingStatus;
        updatedAt: Date;
        notes: string | null;
        guestName: string;
        guestEmail: string;
        guestPhone: string | null;
        roomId: string;
        checkIn: Date;
        checkOut: Date;
        guests: number;
        total: number;
        requestedAt: Date;
    })[]>;
    findById(id: string): Promise<{
        room: {
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
        };
    } & {
        id: string;
        status: import("@prisma/client").$Enums.BookingStatus;
        updatedAt: Date;
        notes: string | null;
        guestName: string;
        guestEmail: string;
        guestPhone: string | null;
        roomId: string;
        checkIn: Date;
        checkOut: Date;
        guests: number;
        total: number;
        requestedAt: Date;
    }>;
    create(createBookingDto: CreateBookingDto): Promise<{
        room: {
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
        };
    } & {
        id: string;
        status: import("@prisma/client").$Enums.BookingStatus;
        updatedAt: Date;
        notes: string | null;
        guestName: string;
        guestEmail: string;
        guestPhone: string | null;
        roomId: string;
        checkIn: Date;
        checkOut: Date;
        guests: number;
        total: number;
        requestedAt: Date;
    }>;
    updateStatus(id: string, status: BookingStatus): Promise<{
        room: {
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
        };
    } & {
        id: string;
        status: import("@prisma/client").$Enums.BookingStatus;
        updatedAt: Date;
        notes: string | null;
        guestName: string;
        guestEmail: string;
        guestPhone: string | null;
        roomId: string;
        checkIn: Date;
        checkOut: Date;
        guests: number;
        total: number;
        requestedAt: Date;
    }>;
}
