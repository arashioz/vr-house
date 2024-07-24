import { Request, Response, NextFunction } from 'express';

interface IAuthBody {
    username: string,
    password: string
}

export const validateAuthBody = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body as IAuthBody;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    if (typeof username !== 'string' || typeof password !== 'string') {
        return res.status(400).json({ error: 'Username and password must be strings' });
    }

    next();
};