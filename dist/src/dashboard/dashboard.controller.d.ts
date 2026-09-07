import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getStats(): Promise<{
        totalRooms: number;
        totalBookings: number;
        totalRevenue: number;
        pendingBookings: number;
        recentBookings: ({
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
        })[];
        roomsByStatus: {
            published: number;
            draft: number;
        };
    }>;
}
