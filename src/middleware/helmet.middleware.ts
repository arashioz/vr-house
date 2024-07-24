import { Request, Response } from "express";
import helmet from "helmet";

export const helmetSecurityMiddleware = (req: Request, res: Response, next: any) => {
    return helmet({
        xContentTypeOptions: true,
        crossOriginOpenerPolicy: true,
        xPoweredBy: false
    }),
        next()
}