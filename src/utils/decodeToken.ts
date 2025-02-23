import {IUserWithTokens} from "@/models/auth/IUserWithTokens";
import {jwtDecode} from "jwt-decode";

export const decodeToken = (token: string): IUserWithTokens | undefined => {
    if (token) {
        return jwtDecode(token);
    }
    return
}