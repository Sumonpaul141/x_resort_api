"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcrypt = __importStar(require("bcrypt"));
const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.adminUser.upsert({
        where: { email: 'admin@dreamsquareresort.com' },
        update: {},
        create: {
            name: 'Admin User',
            email: 'admin@dreamsquareresort.com',
            password: hashedPassword,
            role: client_1.UserRole.SUPER_ADMIN,
            status: client_1.UserStatus.ACTIVE,
        },
    });
    const editor = await prisma.adminUser.upsert({
        where: { email: 'editor@dreamsquareresort.com' },
        update: {},
        create: {
            name: 'Editor User',
            email: 'editor@dreamsquareresort.com',
            password: hashedPassword,
            role: client_1.UserRole.EDITOR,
            status: client_1.UserStatus.ACTIVE,
        },
    });
    const manager = await prisma.adminUser.upsert({
        where: { email: 'manager@dreamsquareresort.com' },
        update: {},
        create: {
            name: 'Manager User',
            email: 'manager@dreamsquareresort.com',
            password: hashedPassword,
            role: client_1.UserRole.ADMIN,
            status: client_1.UserStatus.ACTIVE,
        },
    });
    const room1 = await prisma.room.upsert({
        where: { slug: 'deluxe-garden-view' },
        update: {},
        create: {
            name: 'Deluxe Garden View',
            slug: 'deluxe-garden-view',
            shortDescription: 'A spacious room with beautiful garden views and modern amenities.',
            description: 'Experience the tranquility of nature from our Deluxe Garden View room. This elegantly appointed room features floor-to-ceiling windows overlooking lush tropical gardens, a king-size bed with premium linens, and a private balcony. The en-suite bathroom includes a rainfall shower and dual vanities. Perfect for couples seeking a romantic getaway.',
            price: 8500,
            discountPrice: 7500,
            capacity: 2,
            size: 380,
            bedType: 'King',
            isFeatured: true,
            isPublished: true,
            amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini Bar', 'Balcony', 'Room Service', 'Smart TV', 'Coffee Maker'],
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800', alt: 'Deluxe Garden View Room', sortOrder: 0 },
                    { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800', alt: 'Room Interior', sortOrder: 1 },
                ],
            },
        },
    });
    const room2 = await prisma.room.upsert({
        where: { slug: 'premium-lake-view' },
        update: {},
        create: {
            name: 'Premium Lake View',
            slug: 'premium-lake-view',
            shortDescription: 'Wake up to stunning lake views in this premium accommodation.',
            description: 'Our Premium Lake View room offers an unparalleled retreat with panoramic views of the serene lake. Featuring a plush king-size bed, elegant furnishings, and a spacious seating area, this room is designed for ultimate comfort. The marble bathroom includes a soaking tub and separate rain shower. Enjoy complimentary breakfast and evening cocktails.',
            price: 14000,
            capacity: 2,
            size: 520,
            bedType: 'King',
            isFeatured: true,
            isPublished: true,
            amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini Bar', 'Lake View', 'Bathtub', 'Room Service', 'Smart TV', 'Nespresso Machine', 'Robes & Slippers'],
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800', alt: 'Premium Lake View Room', sortOrder: 0 },
                    { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800', alt: 'Lake View from Room', sortOrder: 1 },
                ],
            },
        },
    });
    const room3 = await prisma.room.upsert({
        where: { slug: 'family-suite' },
        update: {},
        create: {
            name: 'Family Suite',
            slug: 'family-suite',
            shortDescription: 'A generous suite with separate living area, ideal for families.',
            description: 'The Family Suite provides ample space for families to relax and create lasting memories. This suite features a master bedroom with a king bed, a separate living area with a sofa bed, and a children-friendly bathroom with a bathtub. The suite includes a kitchenette, dining table, and a private terrace overlooking the resort grounds.',
            price: 18000,
            discountPrice: 16000,
            capacity: 4,
            size: 750,
            bedType: 'King + Sofa Bed',
            isFeatured: false,
            isPublished: true,
            amenities: ['Free Wi-Fi', 'Air Conditioning', 'Kitchenette', 'Terrace', 'Washing Machine', 'Smart TV', 'Baby Cot Available', 'Dining Area'],
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800', alt: 'Family Suite', sortOrder: 0 },
                    { url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800', alt: 'Suite Living Area', sortOrder: 1 },
                ],
            },
        },
    });
    const room4 = await prisma.room.upsert({
        where: { slug: 'executive-single' },
        update: {},
        create: {
            name: 'Executive Single',
            slug: 'executive-single',
            shortDescription: 'A comfortable and efficient room for the solo business traveler.',
            description: 'Designed with the modern business traveler in mind, the Executive Single room offers a productive workspace, high-speed internet, and a comfortable queen bed. The room features soundproof windows, blackout curtains, and a well-lit desk area. Complimentary access to the business center and fitness facilities included.',
            price: 6500,
            capacity: 1,
            size: 280,
            bedType: 'Queen',
            isFeatured: false,
            isPublished: true,
            amenities: ['Free Wi-Fi', 'Air Conditioning', 'Work Desk', 'Smart TV', 'Coffee Maker', 'In-Room Safe', 'Iron & Ironing Board'],
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800', alt: 'Executive Single Room', sortOrder: 0 },
                ],
            },
        },
    });
    const room5 = await prisma.room.upsert({
        where: { slug: 'presidential-villa' },
        update: {},
        create: {
            name: 'Presidential Villa',
            slug: 'presidential-villa',
            shortDescription: 'The pinnacle of luxury with private pool, butler service, and exclusive amenities.',
            description: 'Our Presidential Villa represents the ultimate in resort luxury. This expansive villa features two bedrooms, a private infinity pool, a fully equipped kitchen, a spacious living and dining area, and a rooftop terrace with 360-degree views. Dedicated butler service, private chef on request, and exclusive access to the VIP lounge ensure an unforgettable experience.',
            price: 26000,
            discountPrice: 24000,
            capacity: 4,
            size: 1500,
            bedType: '2 King Beds',
            isFeatured: true,
            isPublished: true,
            amenities: ['Free Wi-Fi', 'Private Pool', 'Butler Service', 'Full Kitchen', 'Rooftop Terrace', 'Smart TV', 'Jacuzzi', 'Private Garden', 'Wine Cellar', 'Home Theater'],
            images: {
                create: [
                    { url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800', alt: 'Presidential Villa Exterior', sortOrder: 0 },
                    { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', alt: 'Villa Pool Area', sortOrder: 1 },
                ],
            },
        },
    });
    await prisma.facility.upsert({
        where: { slug: 'swimming-pool' },
        update: {},
        create: {
            name: 'Swimming Pool',
            slug: 'swimming-pool',
            shortDescription: 'A stunning infinity pool with panoramic resort views.',
            description: 'Dive into our breathtaking infinity pool that seems to merge with the horizon. Surrounded by lush tropical landscaping, the pool area features comfortable sun loungers, private cabanas, and a dedicated pool bar serving refreshing cocktails and light bites. The heated pool is perfect for year-round enjoyment, with a separate children\'s pool area for families.',
            icon: 'Waves',
            image: 'https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800',
            isFeatured: true,
            isPublished: true,
        },
    });
    await prisma.facility.upsert({
        where: { slug: 'fitness-center' },
        update: {},
        create: {
            name: 'Fitness Center',
            slug: 'fitness-center',
            shortDescription: 'State-of-the-art gym with personal training available.',
            description: 'Our fully equipped fitness center features the latest cardio and strength training equipment from Technogym. Open 24/7 for guest convenience, the gym includes a dedicated stretching area, free weights section, and functional training zone. Personal training sessions and group fitness classes are available upon request.',
            icon: 'Dumbbell',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
            isFeatured: true,
            isPublished: true,
        },
    });
    await prisma.facility.upsert({
        where: { slug: 'luxury-spa' },
        update: {},
        create: {
            name: 'Luxury Spa',
            slug: 'luxury-spa',
            shortDescription: 'A sanctuary of wellness offering traditional and modern treatments.',
            description: 'Escape to our award-winning spa, where ancient healing traditions meet modern wellness techniques. Our skilled therapists offer a comprehensive menu of treatments including Ayurvedic massages, aromatherapy, body wraps, facials, and reflexology. The spa complex includes a sauna, steam room, hot tub, and a serene relaxation lounge with herbal teas.',
            icon: 'Flower2',
            image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
            isFeatured: true,
            isPublished: true,
        },
    });
    await prisma.facility.upsert({
        where: { slug: 'fine-dining-restaurant' },
        update: {},
        create: {
            name: 'Fine Dining Restaurant',
            slug: 'fine-dining-restaurant',
            shortDescription: 'Exquisite cuisine crafted by our award-winning chef.',
            description: 'Savor a culinary journey at our fine dining restaurant, where our executive chef creates innovative dishes using the freshest local ingredients. The menu blends international flavors with traditional Bangladeshi cuisine, offering an unforgettable dining experience. Enjoy panoramic views from the terrace seating, accompanied by a carefully curated wine list.',
            icon: 'Utensils',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
            isFeatured: false,
            isPublished: true,
        },
    });
    await prisma.facility.upsert({
        where: { slug: 'conference-center' },
        update: {},
        create: {
            name: 'Conference Center',
            slug: 'conference-center',
            shortDescription: 'Professional meeting spaces equipped with modern technology.',
            description: 'Our versatile conference center offers state-of-the-art facilities for meetings, conferences, seminars, and special events. The main hall accommodates up to 300 guests, with additional breakout rooms for smaller sessions. Equipment includes high-definition projectors, sound systems, video conferencing capabilities, and high-speed internet. Our dedicated events team ensures flawless execution.',
            icon: 'Presentation',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
            isFeatured: false,
            isPublished: true,
        },
    });
    await prisma.facility.upsert({
        where: { slug: 'kids-play-area' },
        update: {},
        create: {
            name: 'Kids Play Area',
            slug: 'kids-play-area',
            shortDescription: 'A fun and safe environment for children of all ages.',
            description: 'Our dedicated kids\' play area provides a safe, supervised, and exciting environment for younger guests. Featuring indoor and outdoor play structures, arts and crafts stations, a mini theater, and organized activities led by our trained childcare professionals. The area is designed for children aged 3-12, giving parents time to relax and enjoy the resort amenities.',
            icon: 'Smile',
            image: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800',
            isFeatured: false,
            isPublished: true,
        },
    });
    await prisma.offer.upsert({
        where: { slug: 'early-bird-special' },
        update: {},
        create: {
            title: 'Early Bird Special',
            slug: 'early-bird-special',
            shortDescription: 'Book 30 days in advance and enjoy 20% off your stay.',
            description: 'Plan ahead and save big with our Early Bird Special. Book your dream vacation at least 30 days before your arrival date and enjoy an exclusive 20% discount on all room categories. This offer includes complimentary breakfast for two, late checkout until 2 PM (subject to availability), and a welcome drink upon arrival.',
            discountPercent: 20,
            validFrom: new Date('2026-01-01'),
            validTo: new Date('2026-12-31'),
            terms: [
                'Must be booked at least 30 days prior to arrival',
                'Valid for stays of 2 nights or more',
                'Cannot be combined with other promotions',
                'Subject to room availability',
                'Full payment required at time of booking',
            ],
            isActive: true,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
        },
    });
    await prisma.offer.upsert({
        where: { slug: 'romantic-getaway' },
        update: {},
        create: {
            title: 'Romantic Getaway',
            slug: 'romantic-getaway',
            shortDescription: 'A couples retreat with spa treatments and candlelit dinner.',
            description: 'Rekindle the romance with our specially curated Romantic Getaway package. Enjoy a luxurious stay in our Premium Lake View room, couples spa treatment, a private candlelit dinner by the lake, and a complimentary bottle of sparkling wine. Create unforgettable memories with your loved one in the most romantic setting.',
            discountPercent: 15,
            validFrom: new Date('2026-02-01'),
            validTo: new Date('2026-12-31'),
            terms: [
                'Minimum 2-night stay required',
                'Includes couples spa treatment (60 minutes)',
                'Candlelit dinner for two included',
                'Room upgrade subject to availability',
                'Valid for Premium Lake View and Presidential Villa only',
            ],
            isActive: true,
            image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800',
        },
    });
    await prisma.offer.upsert({
        where: { slug: 'summer-family-bliss' },
        update: {},
        create: {
            title: 'Summer Family Bliss',
            slug: 'summer-family-bliss',
            shortDescription: 'Special family packages with kids eat free and activities included.',
            description: 'Make this summer unforgettable for the whole family. Our Summer Family Bliss offer includes discounted Family Suite accommodation, complimentary meals for children under 12, daily kids activities program, and a family photo session at the resort. Parents can enjoy the spa and pool while kids have the time of their lives.',
            discountPercent: 25,
            validFrom: new Date('2026-05-01'),
            validTo: new Date('2026-08-31'),
            terms: [
                'Valid for Family Suite bookings only',
                'Children under 12 eat free from kids menu',
                'Must include at least 1 child (under 12)',
                'Activities program runs daily from 10 AM - 4 PM',
                'Family photo session scheduled upon check-in',
            ],
            isActive: true,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        },
    });
    await prisma.offer.upsert({
        where: { slug: 'weekend-bliss' },
        update: {},
        create: {
            title: 'Weekend Bliss',
            slug: 'weekend-bliss',
            shortDescription: 'Escape for the weekend with special Friday-Sunday rates.',
            description: 'Transform your weekend with our Weekend Bliss offer. Check in on Friday and enjoy special rates through Sunday. The package includes complimentary breakfast buffet, access to all resort facilities, a sunset boat ride, and a 10% discount at the spa. Perfect for a quick recharge from the city grind.',
            discountPercent: 10,
            validFrom: new Date('2026-01-01'),
            validTo: new Date('2026-12-31'),
            terms: [
                'Check-in must be on Friday',
                'Minimum 2-night stay (Friday-Sunday)',
                'Complimentary breakfast buffet included',
                'Sunset boat ride for 2 persons',
                'Spa discount applies to treatments above BDT 3000',
            ],
            isActive: true,
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
        },
    });
    await prisma.package.upsert({
        where: { slug: 'blissful-weekend' },
        update: {},
        create: {
            title: 'Blissful Weekend',
            slug: 'blissful-weekend',
            shortDescription: 'A 2-night weekend package with all-inclusive dining.',
            description: 'Experience the perfect weekend escape with our Blissful Weekend package. Enjoy 2 nights in a Deluxe Garden View room, all meals included at our buffet restaurant, one complimentary spa treatment per person, guided nature walk, and evening bonfire with BBQ. An ideal getaway for couples and small groups.',
            price: 22000,
            duration: '2 Nights / 3 Days',
            includes: [
                'Deluxe Garden View accommodation',
                'All meals (breakfast, lunch, dinner)',
                '60-minute spa treatment per person',
                'Guided nature walk',
                'Evening bonfire & BBQ',
                'Complimentary Wi-Fi',
                'Airport transfer',
            ],
            isActive: true,
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
        },
    });
    await prisma.package.upsert({
        where: { slug: 'family-fun-retreat' },
        update: {},
        create: {
            title: 'Family Fun Retreat',
            slug: 'family-fun-retreat',
            shortDescription: 'A 3-night family package with activities for all ages.',
            description: 'Create lasting family memories with our Family Fun Retreat. This 3-night package includes accommodation in our spacious Family Suite, daily kids activities, family cooking class, visit to the nearby national park, movie night under the stars, and a professional family photoshoot.',
            price: 48000,
            duration: '3 Nights / 4 Days',
            includes: [
                'Family Suite accommodation',
                'Daily breakfast & dinner',
                'Kids activity program (all days)',
                'Family cooking class',
                'National park excursion',
                'Outdoor movie night',
                'Family photoshoot session',
                'Welcome gift hamper for kids',
            ],
            isActive: true,
            image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800',
        },
    });
    await prisma.package.upsert({
        where: { slug: 'luxury-honeymoon' },
        update: {},
        create: {
            title: 'Luxury Honeymoon',
            slug: 'luxury-honeymoon',
            shortDescription: 'An indulgent 4-night honeymoon with premium experiences.',
            description: 'Begin your journey together in unparalleled luxury. Our Luxury Honeymoon package features 4 nights in the Presidential Villa with private pool, daily couples spa treatments, private dining experiences, sunset cruise, flower arrangement in room, and a personalized gift upon arrival.',
            price: 120000,
            duration: '4 Nights / 5 Days',
            includes: [
                'Presidential Villa with private pool',
                'Daily couples spa treatment',
                'Private chef dinner (2 evenings)',
                'Sunset yacht cruise',
                'Daily breakfast in bed',
                'Room flower arrangement',
                'Personalized welcome gift',
                'Complimentary laundry service',
                'Airport VIP transfer',
                'Late checkout guaranteed',
            ],
            isActive: true,
            image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
        },
    });
    await prisma.package.upsert({
        where: { slug: 'wellness-detox' },
        update: {},
        create: {
            title: 'Wellness & Detox',
            slug: 'wellness-detox',
            shortDescription: 'A 5-night wellness program with yoga, meditation, and spa.',
            description: 'Restore your mind, body, and soul with our comprehensive Wellness & Detox package. Over 5 immersive days, enjoy daily yoga and meditation sessions, personalized spa treatments, healthy gourmet meals, wellness consultations, sound healing therapy, and access to all resort wellness facilities.',
            price: 75000,
            duration: '5 Nights / 6 Days',
            includes: [
                'Premium Lake View accommodation',
                'Daily yoga & meditation sessions',
                'Personalized wellness consultation',
                '3 spa treatments per stay',
                'Healthy gourmet meal plan',
                'Sound healing therapy session',
                'Herbal tea ceremonies',
                'Fitness center access',
                'Nature trail guided walk',
                'Wellness journal & kit',
            ],
            isActive: true,
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
        },
    });
    const categories = ['Pool', 'Rooms', 'Spa', 'Dining', 'Wellness', 'Grounds', 'Villas'];
    const galleryImages = [
        { title: 'Infinity Pool at Sunset', url: 'https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800', category: 'Pool', sortOrder: 0 },
        { title: 'Pool Bar Area', url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800', category: 'Pool', sortOrder: 1 },
        { title: 'Deluxe Room Interior', url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800', category: 'Rooms', sortOrder: 0 },
        { title: 'Premium Suite Bedroom', url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800', category: 'Rooms', sortOrder: 1 },
        { title: 'Spa Treatment Room', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800', category: 'Spa', sortOrder: 0 },
        { title: 'Fine Dining Experience', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', category: 'Dining', sortOrder: 0 },
        { title: 'Morning Yoga Session', url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800', category: 'Wellness', sortOrder: 0 },
        { title: 'Resort Grounds Aerial', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', category: 'Grounds', sortOrder: 0 },
        { title: 'Presidential Villa', url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800', category: 'Villas', sortOrder: 0 },
    ];
    for (const item of galleryImages) {
        await prisma.galleryItem.upsert({
            where: { id: `seed-gallery-${item.category}-${item.sortOrder}` },
            update: {},
            create: {
                id: `seed-gallery-${item.category}-${item.sortOrder}`,
                title: item.title,
                url: item.url,
                category: item.category,
                isPublished: true,
                sortOrder: item.sortOrder,
            },
        });
    }
    const rooms = [room1, room2, room3, room4, room5];
    const bookings = [
        {
            guestName: 'Rahman Ahmed',
            guestEmail: 'rahman@example.com',
            guestPhone: '+8801712345678',
            roomId: rooms[0].id,
            checkIn: new Date('2026-06-01'),
            checkOut: new Date('2026-06-04'),
            guests: 2,
            total: 22500,
            status: client_1.BookingStatus.CHECKED_OUT,
            notes: 'Anniversary trip',
        },
        {
            guestName: 'Fatima Khan',
            guestEmail: 'fatima.khan@example.com',
            guestPhone: '+8801812345678',
            roomId: rooms[1].id,
            checkIn: new Date('2026-07-10'),
            checkOut: new Date('2026-07-14'),
            guests: 2,
            total: 56000,
            status: client_1.BookingStatus.CHECKED_IN,
            notes: 'Honeymoon stay',
        },
        {
            guestName: 'David Chen',
            guestEmail: 'david.chen@example.com',
            guestPhone: '+8801912345678',
            roomId: rooms[2].id,
            checkIn: new Date('2026-08-15'),
            checkOut: new Date('2026-08-18'),
            guests: 3,
            total: 54000,
            status: client_1.BookingStatus.CONFIRMED,
        },
        {
            guestName: 'Sarah Williams',
            guestEmail: 'sarah.w@example.com',
            guestPhone: '+8801612345678',
            roomId: rooms[3].id,
            checkIn: new Date('2026-09-01'),
            checkOut: new Date('2026-09-03'),
            guests: 1,
            total: 13000,
            status: client_1.BookingStatus.PENDING,
            notes: 'Business trip, needs early check-in',
        },
        {
            guestName: 'Tanvir Hasan',
            guestEmail: 'tanvir.h@example.com',
            guestPhone: '+8801512345678',
            roomId: rooms[4].id,
            checkIn: new Date('2026-10-20'),
            checkOut: new Date('2026-10-25'),
            guests: 4,
            total: 120000,
            status: client_1.BookingStatus.CONFIRMED,
            notes: 'VIP guest, arrange airport pickup',
        },
        {
            guestName: 'Nadia Rahman',
            guestEmail: 'nadia.r@example.com',
            guestPhone: '+8801312345678',
            roomId: rooms[0].id,
            checkIn: new Date('2026-05-05'),
            checkOut: new Date('2026-05-07'),
            guests: 2,
            total: 15000,
            status: client_1.BookingStatus.CANCELLED,
            notes: 'Cancelled due to schedule conflict',
        },
    ];
    for (const booking of bookings) {
        await prisma.booking.upsert({
            where: { id: `seed-booking-${booking.guestName.replace(/\s/g, '-').toLowerCase()}` },
            update: {},
            create: {
                id: `seed-booking-${booking.guestName.replace(/\s/g, '-').toLowerCase()}`,
                ...booking,
            },
        });
    }
    await prisma.siteSettings.upsert({
        where: { id: 'singleton' },
        update: {},
        create: {
            id: 'singleton',
            siteName: 'Dream Square Resort',
            tagline: 'Where Luxury Meets Nature',
            contactEmail: 'info@dreamsquareresort.com',
            contactPhone: '+880-2-9876543',
            address: 'Cox\'s Bazar, Chittagong, Bangladesh',
            currency: 'BDT',
            checkInTime: '2:00 PM',
            checkOutTime: '12:00 PM',
        },
    });
    console.log('Seed completed successfully!');
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=seed.js.map