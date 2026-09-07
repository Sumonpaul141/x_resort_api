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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilitiesController = void 0;
const common_1 = require("@nestjs/common");
const facilities_service_1 = require("./facilities.service");
const create_facility_dto_1 = require("./dto/create-facility.dto");
const update_facility_dto_1 = require("./dto/update-facility.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let FacilitiesController = class FacilitiesController {
    facilitiesService;
    constructor(facilitiesService) {
        this.facilitiesService = facilitiesService;
    }
    getPublishedFacilities(featured) {
        return this.facilitiesService.findPublished(featured === 'true');
    }
    getAdminFacilities() {
        return this.facilitiesService.findAll();
    }
    getAdminFacility(id) {
        return this.facilitiesService.findById(id);
    }
    createFacility(createFacilityDto) {
        return this.facilitiesService.create(createFacilityDto);
    }
    updateFacility(id, updateFacilityDto) {
        return this.facilitiesService.update(id, updateFacilityDto);
    }
    toggleFacilityStatus(id, field) {
        return this.facilitiesService.toggleStatus(id, field);
    }
    removeFacility(id) {
        return this.facilitiesService.remove(id);
    }
};
exports.FacilitiesController = FacilitiesController;
__decorate([
    (0, common_1.Get)('facilities'),
    __param(0, (0, common_1.Query)('featured')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "getPublishedFacilities", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('admin/facilities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "getAdminFacilities", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('admin/facilities/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "getAdminFacility", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('admin/facilities'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_facility_dto_1.CreateFacilityDto]),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "createFacility", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('admin/facilities/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_facility_dto_1.UpdateFacilityDto]),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "updateFacility", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('admin/facilities/:id/toggle'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('field')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "toggleFacilityStatus", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('admin/facilities/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "removeFacility", null);
exports.FacilitiesController = FacilitiesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [facilities_service_1.FacilitiesService])
], FacilitiesController);
//# sourceMappingURL=facilities.controller.js.map