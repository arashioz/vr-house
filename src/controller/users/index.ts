import { IReq, IRes } from "@src/types/routes";
import { NextFunction } from "express";

// export async function createUser() {

// }

export const createUser = (req: IReq, res: IRes, next: NextFunction) => {
    try {
        // Some code that might throw an error
        throw new Error('Example error');
    } catch (error) {
        // Pass the error to Express error handler middleware
        next(error);
    }
}