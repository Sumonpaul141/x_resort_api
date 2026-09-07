"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const rooms_module_1 = require("./rooms/rooms.module");
const facilities_module_1 = require("./facilities/facilities.module");
const offers_module_1 = require("./offers/offers.module");
const packages_module_1 = require("./packages/packages.module");
const gallery_module_1 = require("./gallery/gallery.module");
const bookings_module_1 = require("./bookings/bookings.module");
const users_module_1 = require("./users/users.module");
const settings_module_1 = require("./settings/settings.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            rooms_module_1.RoomsModule,
            facilities_module_1.FacilitiesModule,
            offers_module_1.OffersModule,
            packages_module_1.PackagesModule,
            gallery_module_1.GalleryModule,
            bookings_module_1.BookingsModule,
            users_module_1.UsersModule,
            settings_module_1.SettingsModule,
            dashboard_module_1.DashboardModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map