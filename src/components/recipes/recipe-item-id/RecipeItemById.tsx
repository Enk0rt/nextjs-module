'use client'
import {IRecipe} from "@/models/recipe/IRecipe";
import {useState} from "react";
import {useGetSingleItem} from "@/hooks/useGetSingleItem";
import './RecipeItemById.scss'
import RecipeTag from "@/components/recipes/recipe-tag/RecipeTag";
import Link from "next/link";

interface RecipeItemByIdProps {
    recipeId: string
}

const RecipeItemById = ({recipeId}: RecipeItemByIdProps) => {
    const [recipe, setRecipe] = useState<IRecipe | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    useGetSingleItem(
        `recipes/${recipeId}`,
        setLoading,
        setRecipe,
        'recipe'
    )


    return (
        <div className={'wrapper'}>
            <div className={'recipe__details'}>
                {
                    loading ? (
                        <div className={'loader'}><h2>Loading...</h2></div>
                    ) : (
                        recipe &&
                        <div className={'recipe__details-container'}>
                            <h2 className={'recipe__details-title'}>{recipe.name}</h2>
                            <div className={'recipe__details-info'}>
                                <div className={'recipe__details-info-container'}>
                                    <img className={'recipe__details-info-img'} src={recipe.image} alt={recipe.name} width={'500'}
                                         height={'500'}/>
                                    <div className={'recipe__details-info-tag-container'}>
                                        {
                                            recipe.tags.map((tag, index) => <RecipeTag key={index} tag={tag}/>)
                                        }
                                    </div>
                                </div>
                                <div className={'recipe__details-info-ingredients'}>
                                    <h2 className={'text-center text-lg'}>Ingredients</h2>
                                    <ul className={'recipe__details-info-ingredients-list'}>
                                        {
                                            recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)
                                        }
                                    </ul>
                                    <div className={'flex justify-center gap-8 mt-1 text-lg'}>
                                        <p>Meal-type: {recipe.mealType} </p>
                                        <p>Difficulty: {recipe.difficulty}</p>
                                    </div>
                                </div>
                            </div>
                                   <Link className={'recipe__details-link'} href={`/users/${recipe.userId}`}>Tap to go to author profile</Link>
                        </div>
                    )

                }
            </div>
        </div>
    );
};

export default RecipeItemById;