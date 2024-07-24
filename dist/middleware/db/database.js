"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(require("@src/constants/Env"));
const mongoose_1 = __importDefault(require("mongoose"));
const request_logger_1 = require("../request-logger");
const connectDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose_1.default.connections[0].readyState) {
        return next();
    }
    try {
        yield mongoose_1.default.connect(Env_1.default.DataBase, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        request_logger_1.logger.info('MongoDB connected successfully');
        next();
    }
    catch (error) {
        request_logger_1.logger.error('MongoDB connection error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
module.exports = connectDB;
