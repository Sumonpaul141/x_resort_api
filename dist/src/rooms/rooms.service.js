"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RoomsService = class RoomsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.room.findMany({
            include: { images: { orderBy: { sortOrder: 'asc' } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findPublished() {
        return this.prisma.room.findMany({
            where: { isPublished: true },
            include: { images: { orderBy: { sortOrder: 'asc' } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findBySlug(slug) {
        const room = await this.prisma.room.findUnique({
            where: { slug },
            include: { images: { orderBy: { sortOrder: 'asc' } } },
        });
        if (!room) {
            throw new common_1.NotFoundException(`Room with slug "${slug}" not found`);
        }
        return room;
    }
    async findById(id) {
        const room = await this.prisma.room.findUnique({
            where: { id },
            include: { images: { orderBy: { sortOrder: 'asc' } } },
        });
        if (!room) {
            throw new common_1.NotFoundException(`Room with id "${id}" not found`);
        }
        return room;
    }
    async create(createRoomDto) {
        const { images, amenities, ...roomData } = createRoomDto;
        return this.prisma.room.create({
            data: {
                ...roomData,
                amenities: amenities || [],
                images: images
                    ? { create: images.map((img, index) => ({ ...img, sortOrder: index })) }
                    : undefined,
            },
            include: { images: true },
        });
    }
    async update(id, updateRoomDto) {
        await this.findById(id);
        const { images, amenities, ...roomData } = updateRoomDto;
        if (images) {
            await this.prisma.roomImage.deleteMany({ where: { roomId: id } });
        }
        return this.prisma.room.update({
            where: { id },
            data: {
                ...roomData,
                amenities: amenities,
                images: images
                    ? { create: images.map((img, index) => ({ ...img, sortOrder: index })) }
                    : undefined,
            },
            include: { images: true },
        });
    }
    async toggleStatus(id, field) {
        const room = await this.findById(id);
        return this.prisma.room.update({
            where: { id },
            data: { [field]: !room[field] },
            include: { images: true },
        });
    }
    async remove(id) {
        await this.findById(id);
        return this.prisma.room.delete({
            where: { id },
        });
    }
};
exports.RoomsService = RoomsService;
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoomsService);
//# sourceMappingURL=rooms.service.js.map