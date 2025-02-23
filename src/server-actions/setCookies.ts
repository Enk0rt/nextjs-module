"use server";

import {cookies} from "next/headers";

export async function setCookies(accessToken: string, refreshToken: string) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken, {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60
    });

    cookieStore.set("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60,
    });

    return {success: true};
}
