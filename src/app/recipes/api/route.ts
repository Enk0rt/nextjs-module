import {NextResponse} from "next/server";
import {getApiData} from "@/services/data/dataApi";
import {IRecipeResponse} from "@/models/recipe/IRecipeResponse";
import {apiUrls} from "@/constants/constants";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const limit = Number(searchParams.get('limit')) || 5
    const skip = Number(searchParams.get('skip')) || 0
    try {
        const {recipes, total} = await getApiData<IRecipeResponse>(`${apiUrls.recipes}?limit=${limit}&skip=${skip}`);
        return NextResponse.json({recipes, total});
    } catch {
        return NextResponse.json({error: "Failed to fetch users"}, {status: 500});
    }
}
