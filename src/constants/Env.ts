export default {
    NodeEnv: (process.env.NODE_ENV ?? ''),
    Port: (process.env.PORT ?? 0),
    Host:(process.env.HOST ?? 'localhost')
} as const;
