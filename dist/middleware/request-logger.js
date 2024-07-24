"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLogger = exports.requestLogger = exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const express_winston_1 = __importDefault(require("express-winston"));
const { timestamp, printf } = winston_1.default.format;
const customFormat = printf(({ level, message, timestamp }) => {
    const formattedTimestamp = `${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()}`;
    return `[${formattedTimestamp}] ${level.toUpperCase()}: ${message}`;
});
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.combine(customFormat),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
        new winston_1.default.transports.File({ filename: 'combined.log', level: 'info' })
    ]
});
exports.logger = logger;
const requestLogger = express_winston_1.default.logger({
    winstonInstance: logger,
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: true,
});
exports.requestLogger = requestLogger;
const errorLogger = express_winston_1.default.errorLogger({
    level: 'error',
    winstonInstance: logger
});
exports.errorLogger = errorLogger;
