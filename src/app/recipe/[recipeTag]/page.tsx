import {Suspense} from "react";
import RecipeTagList from "@/components/recipes/recipe-tag-list/RecipeTagList";



const RecipeTagPage= async () => {

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <RecipeTagList/>
            </Suspense>
        </div>
    );
};

export default RecipeTagPage;