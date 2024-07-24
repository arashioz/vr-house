"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../src/utils/pre-start");
const Env_1 = __importDefault(require("./constants/Env"));
const request_logger_1 = require("./middleware/request-logger");
const server_1 = __importDefault(require("./server"));
(() => {
    server_1.default.listen(+Env_1.default.Port, Env_1.default.Host, () => {
        request_logger_1.logger.info(`now server run at ${Env_1.default.Host}:${Env_1.default.Port} is ${process.env.NODE_ENV}`);
    });
})();
