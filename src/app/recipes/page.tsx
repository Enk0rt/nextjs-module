import RecipeList from "@/components/recipes/recipe-list/RecipeList";
import {Suspense} from "react";


const Recipes = () => {

    return (
        <Suspense fallback={<div><h2>Loading...</h2></div>}>
            <RecipeList/>
        </Suspense>
    );
};

export default Recipes;