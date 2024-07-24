import HttpStatusCodes from "@src/constants/StatusCode";
import { IReq, IRes } from "@src/types/routes";

async function getAll(_: IReq, res: IRes) {
  return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({ message:'err' });
}





export default {
  getAll,
} as const;
