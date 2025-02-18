import {LoginType, loginUser} from "@/services/auth/authUser";
import {NextResponse} from "next/server";
import {IUserWithTokens} from "@/models/auth/IUserWithTokens";
import {setCookies} from "@/server-actions/setCookies";

export async function POST (request:Request) {
    const {username,password,expiresInMin}:LoginType = await request.json()
    const res = await loginUser<IUserWithTokens>({expiresInMin, username,password})

    const {accessToken,refreshToken,...user} = res.data

    const response = NextResponse.json({user})

    await setCookies(accessToken,refreshToken)

    return response
}