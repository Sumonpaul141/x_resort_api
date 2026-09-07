export declare class CreateOfferDto {
    title: string;
    slug: string;
    shortDescription: string;
    description: string;
    discountPercent: number;
    validFrom: string;
    validTo: string;
    terms?: string[];
    isActive?: boolean;
    image?: string;
}
