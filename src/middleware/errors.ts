import Env from "@src/constants/Env";
import { IReq, IRes } from "@src/types/routes";
import { ResponseDto } from "@src/utils/response";
import { NextFunction } from "express";
import logger from "jet-logger";

const errorHandlerMiddleware = (err: any, req: IReq, res: IRes, next: NextFunction) => {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    logger.err( err.message );
    res.status(500).json(new ResponseDto(errMsg, errStatus))
}

export default errorHandlerMiddleware