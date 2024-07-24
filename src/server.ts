import express, { NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser'
import { helmetSecurityMiddleware } from './middleware/helmet.middleware'
import Path from './constants/Path'
import { Controllers } from './controller'
import morgan from 'morgan'
import { ResponseDto } from './utils/response'
import { IReq, IRes } from './types/routes'
import errorHandlerMiddleware from './middleware/errors.middleware'
import { errorLogger, requestLogger } from './middleware/request-logger.middleware'
import setCommonHeaders from './middleware/security'
import mongoose, { ConnectOptions } from 'mongoose'
import Env from './constants/Env'
import { connectDB } from './config/db'
 
// InitApp
const app = express()

// // Middleware init
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Http Middleware
app.use(requestLogger)
app.use(setCommonHeaders)
app.use(Path.base, Controllers)
app.get('*', errorHandlerMiddleware);
if (process.env.NODE_ENV == "production") {
    app.use(helmetSecurityMiddleware)
}

app.use(errorLogger)

app.all('*', (req: IReq, res: Response) => {
    res.sendStatus(404).json(new ResponseDto('api uri not found', 404));
});

export default app


