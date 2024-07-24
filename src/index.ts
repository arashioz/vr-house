import '../src/utils/pre-start'; // Must be the first import
import Env from './constants/Env'
import logger from 'jet-logger'
import server from './server'
import { parse } from 'ts-command-line-args';
import { IArgs } from './types/interface/env.init';
import path from 'path';
import * as dotenv from 'dotenv'

(() => {
    server.listen(+Env.Port, Env.Host, () => {
        logger.info(`now server run at ${Env.Host}:${Env.Port} is ${process.env.NODE_ENV}`)
    })
})()


