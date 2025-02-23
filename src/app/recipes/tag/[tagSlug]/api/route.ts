import {NextResponse} from "next/server";
import {getApiData} from "@/services/data/dataApi";
import {IRecipeResponse} from "@/models/recipe/IRecipeResponse";
import {apiUrls} from "@/constants/constants";

type Props = {
    params: { tagSlug: string }
}

export async function GET(req: Request, getTag: Props) {
    const {tagSlug} = await getTag.params
    const {searchParams} = new URL (req.url)
    const limit = Number(searchParams.get('limit')) || 5
    const skip = Number(searchParams.get('skip')) || 0
    try {
        const {recipes,total} = await getApiData<IRecipeResponse>(`${apiUrls.recipes}/tag/${tagSlug}?limit=${limit}&skip=${skip}`)
        return NextResponse.json({recipes,total});
    } catch {
        return NextResponse.json({error: "Failed to fetch users"}, {status: 500});
    }
}