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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStats() {
        const [totalRooms, totalBookings, totalRevenue, pendingBookings, recentBookings, publishedRooms, draftRooms,] = await Promise.all([
            this.prisma.room.count(),
            this.prisma.booking.count(),
            this.prisma.booking.aggregate({
                _sum: { total: true },
                where: {
                    status: { in: ['CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT'] },
                },
            }),
            this.prisma.booking.count({
                where: { status: 'PENDING' },
            }),
            this.prisma.booking.findMany({
                take: 5,
                include: { room: true },
                orderBy: { requestedAt: 'desc' },
            }),
            this.prisma.room.count({ where: { isPublished: true } }),
            this.prisma.room.count({ where: { isPublished: false } }),
        ]);
        return {
            totalRooms,
            totalBookings,
            totalRevenue: totalRevenue._sum.total ?? 0,
            pendingBookings,
            recentBookings,
            roomsByStatus: {
                published: publishedRooms,
                draft: draftRooms,
            },
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map