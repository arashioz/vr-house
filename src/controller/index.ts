import { Router } from "express";
import { userRouter } from "./users/routes";
import Path from "@src/constants/Path";

export const Controllers = Router()

// users Router
Controllers.use(Path.User.base,userRouter)