    import { NextResponse } from "next/server";
    import {setCookies} from "@/server-actions/setCookies";

    export async function POST (request:Request) {
        console.log("GETTING TOKENS FROM REQUEST...")
        const {accessToken,newRefreshToken} = await request.json()
        const response = NextResponse.json({ message: "Tokens set" ,accessToken,newRefreshToken});
        console.log("SETTING NEW COOKIES")
        await setCookies(accessToken,newRefreshToken)
        console.log("RETURNING RESPONSE....")
        return response;
    }
