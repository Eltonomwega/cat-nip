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
exports.catType = exports.catInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let catInput = class catInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], catInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], catInput.prototype, "age", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], catInput.prototype, "breed", void 0);
catInput = __decorate([
    graphql_1.InputType()
], catInput);
exports.catInput = catInput;
let catType = class catType {
};
__decorate([
    graphql_1.Field(() => graphql_1.ID),
    __metadata("design:type", String)
], catType.prototype, "_id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], catType.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], catType.prototype, "age", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], catType.prototype, "breed", void 0);
catType = __decorate([
    graphql_1.ObjectType()
], catType);
exports.catType = catType;
//# sourceMappingURL=cat.dto.js.map