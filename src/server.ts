import express, { NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser'
import { requestLoggerMiddleware } from './middleware/logger'
import { helmetSecurityMiddleware } from './middleware/helmet'
import Path from './constants/Path'
import { Controllers } from './controller'
import Env from './constants/Env'
import * as dotenv from 'dotenv'
import path from 'path'
import { IArgs } from "./types/interface/env.init";
import { parse } from 'ts-command-line-args'
import morgan from 'morgan'
import errorHandlerMiddleware from './middleware/errors'
import { ResponseDto } from './utils/response'

// InitApp
const app = express()

// // Middleware init
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Http Middleware
// app.use(morgan('tiny'));
app.use(requestLoggerMiddleware)
app.use(Path.base, Controllers)
app.get('*', errorHandlerMiddleware);
if (process.env.NODE_ENV == "production") {
    app.use(helmetSecurityMiddleware)
}
if (process.env.NODE_ENV == "development") {
    app.use(morgan('dev'))
}
app.use(errorHandlerMiddleware)

app.all('*', (req, res) => {
    res.status(404).json(new ResponseDto('api uri not found', 404));
});
export default app