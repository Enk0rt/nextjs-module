import {IRecipe} from "@/models/recipe/IRecipe";

export interface IRecipeResponse {
    recipes: IRecipe[];
    total: number;
    skip: number;
    limit: number;
}