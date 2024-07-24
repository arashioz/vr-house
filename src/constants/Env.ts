export default {
    NodeEnv: (process.env.NODE_ENV ?? ''),
    Port: (process.env.PORT ?? 0),
    Host: (process.env.HOST ?? 'localhost'),
    DataBase: (process.env.MONGODB_URI ?? ''),
    JwtSecret:(process.env.JWT_SECRET ?? '')
} as const;
