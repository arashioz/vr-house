"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const Path_1 = __importDefault(require("@src/constants/Path"));
const express_1 = require("express");
const jet_validator_1 = __importDefault(require("jet-validator"));
const index_ts_1 = __importDefault(require("./index.ts"));
exports.userRouter = (0, express_1.Router)();
const validator = (0, jet_validator_1.default)();
exports.userRouter.post(Path_1.default.User.create, index_ts_1.default.getAll);
