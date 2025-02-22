import {Suspense} from "react";
import RecipeTagList from "@/components/recipes/recipe-tag-list/RecipeTagList";

type Props = {
    params : {tagSlug:string}
}

const RecipeTagPage= async ({params}:Props) => {
    const {tagSlug} = await params

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <RecipeTagList tagSlug={tagSlug}/>
            </Suspense>
        </div>
    );
};

export default RecipeTagPage;