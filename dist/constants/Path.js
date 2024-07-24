"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    base: '/api',
    Login: {
        base: '/application',
        signUp: 'sign-up',
        signIn: 'sign-in'
    },
    User: {
        base: '/users',
        create: '/user',
        read: '/user/:id',
        update: '/user/:id',
        delete: '/user/:id'
    },
};
