import {FC, Suspense} from "react";
import RecipeItemById from "@/components/recipes/recipe-item-id/RecipeItemById";

type Props = {
    params: { recipeId: string }
}

const SingleRecipePage: FC<Props> = async ({params}) => {
    const {recipeId} = await params

    return (
        <div>
            <Suspense fallback={<div><h2>Loading...</h2></div>}>
                <RecipeItemById recipeId={recipeId}/>
            </Suspense>
        </div>
    );
};

export default SingleRecipePage;