import {IRecipe} from "@/models/recipe/IRecipe";
import Link from "next/link";
import RecipeTag from "@/components/recipes/recipe-tag/RecipeTag";
import './RecipeItem.scss'
interface RecipeItemProps {
    recipe: IRecipe
}

const RecipeItem = ({recipe}: RecipeItemProps) => {
    return (
        <div className={'recipe__item'}>
            <Link href={`/recipes/${recipe.id}`}>
                <h2>{recipe.name} ({recipe.userId})</h2>
            </Link>
                <div className={'flex gap-2 flex-wrap mt-2'}>
                    {recipe.tags.map((tag,index)=> <RecipeTag key={index} tag={tag}/>)}
                </div>
        </div>
    );
};

export default RecipeItem;