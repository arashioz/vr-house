"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = require("./middleware/helmet");
const Path_1 = __importDefault(require("./constants/Path"));
const controller_1 = require("./controller");
const response_1 = require("./utils/response");
const errors_1 = __importDefault(require("./middleware/errors"));
const request_logger_1 = require("./middleware/request-logger");
const security_1 = __importDefault(require("./middleware/security"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use(request_logger_1.requestLogger);
app.use(security_1.default);
app.use(Path_1.default.base, controller_1.Controllers);
app.get('*', errors_1.default);
if (process.env.NODE_ENV == "production") {
    app.use(helmet_1.helmetSecurityMiddleware);
}
app.use(request_logger_1.errorLogger);
app.all('*', (req, res) => {
    res.sendStatus(404).json(new response_1.ResponseDto('api uri not found', 404));
});
exports.default = app;
