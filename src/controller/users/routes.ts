import Path from "@src/constants/Path";
import { NextFunction, Router } from "express";
import jetValidator from "jet-validator";
import Users from './index.ts'
export const userRouter = Router()
const validator = jetValidator();


userRouter.post(Path.User.create,Users.getAll)