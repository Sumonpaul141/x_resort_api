import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
export declare class BookingsController {
    private readonly bookingsService;
    constructor(bookingsService: BookingsService);
    createBooking(createBookingDto: CreateBookingDto): Promise<{
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
    getAdminBookings(): Promise<({
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
    getAdminBooking(id: string): Promise<{
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
    updateBookingStatus(id: string, updateBookingDto: UpdateBookingDto): Promise<{
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
