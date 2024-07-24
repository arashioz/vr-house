import Env from "@src/constants/Env";
import { createUser, findUserByUsername } from "@src/models/services/user-db.service";
import { IReq, IRes } from "@src/types/routes";
import { ResponseDto } from "@src/utils/response";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface IAuthBody {
    username: string,
    password: string
}
const register = async (req: IReq<IAuthBody>, res: IRes) => {
    const { username, password } = req.body;
    console.log("🚀 ~ register ~ username:", username)
    const existingUser = await findUserByUsername(username);
    if (existingUser) {
        res.status(400).json(new ResponseDto('user duplicated', 400))

    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(username, hashedPassword);
    res.status(201).json(new ResponseDto('user duplicated', 201));
}
const login = async (req: IReq<IAuthBody>, res: IRes) => {
    const { username, password } = req.body;
    console.log("🚀 ~ login ~ password:", password)
    const user = await findUserByUsername(username);
    if (!user) {
        res.status(400).send({ error: 'invalid credentials' });
        return;
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        res.status(400).send({ error: 'invalids credentials' });
        return;
    }

    const token = jwt.sign({ username: user.username }, Env.JwtSecret, { expiresIn: '1h' });
    res.status(200).json(new ResponseDto(`token ; ${token}`, 200));
}

export default {
    register,
    login
} as const