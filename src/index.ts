import '../src/utils/pre-start'; // Must be the first import
import Env from './constants/Env'
import { logger } from './middleware/request-logger';
import server from './server'

(() => {
    server.listen(+Env.Port, Env.Host, () => {
        logger.info(`now server run at ${Env.Host}:${Env.Port} is ${process.env.NODE_ENV}`)
    })
})()


