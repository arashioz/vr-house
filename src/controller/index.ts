import { Router } from "express";
import { userRouter } from "./users/routes";
import Path from "@src/constants/Path";

export const Controllers = Router()
// auth Router
// Controllers.use(Path.Login.base,)
// users Router
Controllers.use(Path.User.base,userRouter)