'use server'
import {cookies} from "next/headers";

export const retrieveCookie =  async ():Promise<{ accessToken: string;refreshToken: string }> => {
    const cookieStore = await cookies();
    return {
       accessToken: cookieStore.get("accessToken")?.value || "",
        refreshToken: cookieStore.get("refreshToken")?.value || "",
    };
}