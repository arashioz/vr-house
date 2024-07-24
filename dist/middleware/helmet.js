"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helmetSecurityMiddleware = void 0;
const helmet_1 = __importDefault(require("helmet"));
const helmetSecurityMiddleware = (req, res, next) => {
    return (0, helmet_1.default)({
        xContentTypeOptions: true,
        crossOriginOpenerPolicy: true,
        xPoweredBy: false
    }),
        next();
};
exports.helmetSecurityMiddleware = helmetSecurityMiddleware;
