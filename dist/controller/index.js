"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controllers = void 0;
const express_1 = require("express");
const routes_1 = require("./users/routes");
const Path_1 = __importDefault(require("@src/constants/Path"));
exports.Controllers = (0, express_1.Router)();
exports.Controllers.use(Path_1.default.User.base, routes_1.userRouter);
