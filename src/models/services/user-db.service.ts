import { getDB } from '@src/config/db';
import { Collection, InsertOneResult, Document } from 'mongodb';

interface User {
    username: string;
    password: string;
}

const usersCollection = (): Collection<User> => getDB().collection('users');

export const createUser = async (username: string, password: string): Promise<InsertOneResult<Document>> => {
    return await usersCollection().insertOne({ username, password });
};

export const findUserByUsername = async (username: string): Promise<User | null> => {
    return await usersCollection().findOne({ username });
};