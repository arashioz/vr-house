import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';
import Env from '@src/constants/Env';
import { logger } from '@src/middleware/request-logger.middleware';

dotenv.config();

const uri = Env.DataBase!;
const client = new MongoClient(uri);

let db: Db;

export const connectDB = async (): Promise<void> => {
    try {
        await client.connect();
        db = client.db();
        logger.info('dataBase connected');
    } catch (err) {
        logger.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

export const getDB = (): Db => {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
};