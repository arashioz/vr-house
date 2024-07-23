import { Request, Response } from 'express';
import logger from 'jet-logger';

export const reqLog = (req: Request, res: Response, next: any) => {
    logger.info(`${req.method} - ${req.url}`)
    next()
}