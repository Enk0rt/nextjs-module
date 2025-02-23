import {NextResponse} from "next/server";
import {getApiData} from "@/services/data/dataApi";
import {IUserResponse} from "@/models/user/IUserResponse";
import {apiUrls} from "@/constants/constants";

export async function GET() {

    try {
        const {users} = await getApiData<IUserResponse>(`${apiUrls.users}?limit=0`);
        return NextResponse.json({users});
    } catch {
        return NextResponse.json({error: "Failed to fetch users"}, {status: 500});
    }
}
