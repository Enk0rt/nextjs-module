import {IUser} from "@/models/user/IUser";

export interface IUserResponse {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
    accessToken:string
    refreshToken:string
}