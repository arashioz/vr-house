import Path from "@src/constants/Path";
import { NextFunction, Router } from "express";
import jetValidator from "jet-validator";
import auth from "./auth";
export const authRouter = Router()
const validator = jetValidator();


authRouter.post(Path.Auth.signUp, auth.register)
authRouter.post(Path.Auth.signIn, auth.register)