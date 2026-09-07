export declare class CreateRoomImageDto {
    url: string;
    alt: string;
}
export declare class CreateRoomDto {
    name: string;
    slug: string;
    shortDescription: string;
    description: string;
    price: number;
    discountPrice?: number;
    capacity: number;
    size?: number;
    bedType?: string;
    isFeatured?: boolean;
    isPublished?: boolean;
    amenities?: string[];
    images?: CreateRoomImageDto[];
}
