import {NextResponse} from "next/server";
import {getApiData} from "@/services/data/dataApi";
import {IUserResponse} from "@/models/user/IUserResponse";
import {apiUrls} from "@/constants/constants";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const limit = Number(searchParams.get("limit")) || 5;
    const skip = Number(searchParams.get("skip")) || 0;

    try {
        const {users, total} = await getApiData<IUserResponse>(`${apiUrls.users}?limit=${limit}&skip=${skip}`);
        return NextResponse.json({users, total});
    } catch {
        return NextResponse.json({error: "Failed to fetch users"}, {status: 500});
    }
}
