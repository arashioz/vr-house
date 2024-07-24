import { createUser, findUserByUsername } from "@src/models/services/user-db.service";
import { IReq, IRes } from "@src/types/routes";
import { ResponseDto } from "@src/utils/response";
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
const login = () => {

}

export default {
    register,
    login
} as const