import {IRecipe} from "@/models/recipe/IRecipe";

interface RecipeItemProps {
    recipe: IRecipe
}

const RecipeItem = ({recipe}: RecipeItemProps) => {
    return (
        <div>
            <h2>{recipe.name} --- {recipe.userId}</h2>
        </div>
    );
};

export default RecipeItem;