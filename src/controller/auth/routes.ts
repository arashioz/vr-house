import Path from "@src/constants/Path";
import { NextFunction, Router } from "express";
import jetValidator from "jet-validator";
import auth from "./auth";
import { validateAuthBody } from "@src/middleware/body-validator.middleware";
export const authRouter = Router()


authRouter.post(Path.Auth.signUp, validateAuthBody, auth.register)
authRouter.post(Path.Auth.signIn, validateAuthBody, auth.register)