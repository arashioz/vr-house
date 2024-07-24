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
const fs_extra_1 = __importDefault(require("fs-extra"));
const child_process_1 = __importDefault(require("child_process"));
const request_logger_1 = require("@src/middleware/request-logger");
function remove(loc) {
    return new Promise((res, rej) => {
        return fs_extra_1.default.remove(loc, (err) => {
            return (!!err ? rej(err) : res());
        });
    });
}
function exec(cmd, loc) {
    return new Promise((res, rej) => {
        return child_process_1.default.exec(cmd, { cwd: loc }, (err, stdout, stderr) => {
            if (!!stdout) {
                request_logger_1.logger.info(stdout);
            }
            if (!!stderr) {
                request_logger_1.logger.warn(stderr);
            }
            return (!!err ? rej(err) : res());
        });
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield remove('./dist/');
        yield exec('tsc --build tsconfig.prod.json', './');
    }
    catch (err) {
        request_logger_1.logger.error(err);
        process.exit(1);
    }
}))();
