import winston from 'winston';
import expressWinston from 'express-winston';

const { timestamp ,printf } = winston.format;

const customFormat = printf(({ level, message, timestamp }) => {


    const formattedTimestamp = `${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()}`;
 

    return `[${formattedTimestamp}] ${level.toUpperCase()}: ${message}`;
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        customFormat),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: './logs/combined.log', level:'info' })
    ]
});

const requestLogger = expressWinston.logger({
    winstonInstance: logger,
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: true,
    
});

const errorLogger = expressWinston.errorLogger({
    level:'error',
    winstonInstance: logger
});

export { logger, requestLogger, errorLogger };

