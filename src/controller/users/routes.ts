import Path from "@src/constants/Path";
import { NextFunction, Router } from "express";
import jetValidator from "jet-validator";
import users from "./users";
export const userRouter = Router()
const validator = jetValidator();


userRouter.post(Path.User.create,users.getAll)