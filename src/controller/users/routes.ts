import Path from "@src/constants/Path";
import { Router } from "express";
import jetValidator from "jet-validator";
import { createUser } from ".";

export const userRouter = Router()
const validator = jetValidator();


userRouter.post(Path.User.create, createUser)