import {NextResponse} from "next/server";
import {getApiData} from "@/services/data/dataApi";
import {IUser} from "@/models/user/IUser";
import {apiUrls} from "@/constants/constants";

type Props = {
    params: { userId: string }
}

export async function GET(req: Request, getId: Props) {
    const {userId} = getId.params

    try {
        const user = await getApiData<IUser>(`${apiUrls.users}/${userId}`)
        return NextResponse.json({user});
    } catch {
        return NextResponse.json({error: "Failed to fetch users"}, {status: 500});
    }
}
