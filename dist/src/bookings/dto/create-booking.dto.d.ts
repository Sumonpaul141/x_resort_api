export declare class CreateBookingDto {
    guestName: string;
    guestEmail: string;
    guestPhone?: string;
    roomId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    total?: number;
    notes?: string;
}
