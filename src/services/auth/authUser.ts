import axios from "axios";

import {baseApiUrl} from "@/constants/constants";
import {retrieveCookie} from "@/services/data/helpers/retrieveCookies";
import {ITokens} from "@/models/auth/ITokens";

export type LoginType = {
    username: string,
    password: string,
    expiresInMin:number,
}

export const auth = axios.create({
    baseURL:baseApiUrl +'/auth',
    headers:{ "Content-Type": "application/json" }
})

export const loginUser = async<T>(data:LoginType)=> {
    return await auth.post<T>('/login',data)

}

export const refresh = async () => {
    const {refreshToken} = await retrieveCookie()
    console.log("USER REFRESH TOKEN  -" + refreshToken)
    const refreshResponse = await fetch("https://dummyjson.com/auth/refresh", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({refreshToken}),
    });
    return refreshResponse
}