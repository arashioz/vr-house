import HttpStatusCodes from "@src/constants/StatusCode";

export class ResponseDto{
    message: string;
    status: HttpStatusCodes;
    constructor(message:string , status:HttpStatusCodes){
        this.message = message
        this.status = status
    }
}