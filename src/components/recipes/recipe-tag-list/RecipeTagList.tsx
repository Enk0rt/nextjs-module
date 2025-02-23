'use client'

import RecipeItem from "@/components/recipes/recipe-item/RecipeItem";
import Pagination from "@/components/pagination/Pagination";
import {useState} from "react";
import {IRecipe} from "@/models/recipe/IRecipe";
import {useGetPaginatedItems} from "@/hooks/useGetItems";
import '../recipe-list/Recipes.scss'
import {RECIPES_PER_PAGE, routes} from "@/constants/constants";


interface RecipeTagListProps {
    tagSlug: string
}

const RecipeTagList = ({tagSlug}: RecipeTagListProps) => {

    const [page, setPage] = useState<number>(1)
    const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>([]);
    const [totalRecipes, setTotalRecipes] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)

    const fetched = useGetPaginatedItems(
        page,
        `${routes.recipes}/tag/${tagSlug}`,
        setLoading,
        RECIPES_PER_PAGE,
        setFilteredRecipes,
        "recipes",
        setTotalRecipes)

    return (
        <div className={'wrapper'}>
            <div className={'recipes'}>
                <div className={'recipes__container'}>
                    {
                        loading ? (
                            <div className={'loader'}><h2>Loading...</h2></div>
                        ) : (
                            <div className={'recipes__list'}>
                                {filteredRecipes.map((recipe, index) => <RecipeItem key={index} recipe={recipe}/>)}
                            </div>
                        )
                    }
                    {
                        totalRecipes > 5 && <Pagination
                            setPage={setPage}
                            page={page}
                            total={totalRecipes}
                            limit={RECIPES_PER_PAGE}
                            fetched={fetched}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default RecipeTagList;