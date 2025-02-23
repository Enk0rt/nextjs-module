import {IRecipe} from "@/models/recipe/IRecipe";
import axios from "axios";
import {IRecipeResponse} from "@/models/recipe/IRecipeResponse";
import {baseApiUrl, routes} from "@/constants/constants";
import {Dispatch, SetStateAction} from "react";

export const getUserRecipes = async (id: number, action: Dispatch<SetStateAction<IRecipe[]>>) => {
    const response = await axios.get<IRecipeResponse>(`${baseApiUrl}${routes.recipes}`)
    const userRecipes = response.data.recipes.filter(recipe => recipe.userId === Number(id));
    action(userRecipes)

}