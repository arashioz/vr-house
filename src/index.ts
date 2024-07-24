import mongoose from 'mongoose';
import '../src/utils/pre-start'; // Must be the first import
import Env from './constants/Env'
import { logger } from './middleware/request-logger.middleware';
import server from './server'
import { connectDB } from './config/db';

(() => {
    connectDB().then(() => {
        server.listen(+Env.Port, Env.Host, () => {
            logger.info(`now server run at ${Env.Host}:${Env.Port} is ${process.env.NODE_ENV}`)
        })
    }).catch(err => [
        logger.error(err)
    ])
})()


