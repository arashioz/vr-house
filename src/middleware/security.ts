import { IReq, IRes } from "@src/types/routes";
import { NextFunction } from "express";

const setCommonHeaders = (req: IReq, res: IRes, next: NextFunction) => {
    // Security headers
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('X-API-Version', '1.0'); 
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');


    next();
}
export default setCommonHeaders