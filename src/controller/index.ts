import { Router } from "express";
import { userRouter } from "./users/routes";
import Path from "@src/constants/Path";
import { authRouter } from "./auth/routes";

export const Controllers = Router()

// Auth Router
Controllers.use(Path.Auth.base , authRouter)

// users Router
Controllers.use(Path.User.base,userRouter)