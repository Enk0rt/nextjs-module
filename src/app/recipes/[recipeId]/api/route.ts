import {NextResponse} from "next/server";
import {getApiData} from "@/services/data/dataApi";
import {IRecipe} from "@/models/recipe/IRecipe";
import {apiUrls} from "@/constants/constants";

type Props = {
    params: { recipeId: string }
}

export async function GET(req: Request, getId: Props) {
    const {recipeId} = await getId.params

    try {
        const recipe = await getApiData<IRecipe>(`${apiUrls.recipes}/${recipeId}`)
        return NextResponse.json({recipe});
    } catch {
        return NextResponse.json({error: "Failed to fetch users"}, {status: 500});
    }
}
