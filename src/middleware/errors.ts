import expressWinston from 'express-winston';
import winston, { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const errorHandlerLogMiddleware = expressWinston.errorLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log' })
    ],
    format: combine(
        label({ label: 'errors' }),
        timestamp(),
        myFormat
    )
});

export default errorHandlerLogMiddleware;