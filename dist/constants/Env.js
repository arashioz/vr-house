"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    NodeEnv: ((_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : ''),
    Port: ((_b = process.env.PORT) !== null && _b !== void 0 ? _b : 0),
    Host: ((_c = process.env.HOST) !== null && _c !== void 0 ? _c : 'localhost'),
    DataBase: ((_d = process.env.MONGODB_URI) !== null && _d !== void 0 ? _d : '')
};
