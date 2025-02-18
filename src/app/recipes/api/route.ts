import { NextResponse } from "next/server";
import {getApiData} from "@/services/data/dataApi";
import {IRecipeResponse} from "@/models/recipe/IRecipeResponse";

export async function GET() {
       try {
              const {recipes} = await getApiData<IRecipeResponse>("/auth/recipes");
              return NextResponse.json({ recipes });
       } catch {
              return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
       }
}
