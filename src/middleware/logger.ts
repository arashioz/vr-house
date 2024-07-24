import { Request, Response } from 'express';
import logger from 'jet-logger';
import morgan from 'morgan';

export const requestLoggerMiddleware = (req: Request, res: Response, next: any) => {
    logger.info(`${req.method} - ${req.url}  `)
    next()
}