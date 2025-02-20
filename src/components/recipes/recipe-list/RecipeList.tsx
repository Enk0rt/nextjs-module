'use client'
import './Recipes.scss'
import {useState} from "react";
import RecipeItem from "@/components/recipes/recipe-item/RecipeItem";
import {IRecipe} from "@/models/recipe/IRecipe";
import Pagination from "@/components/pagination/Pagination";
import {useGetPaginatedItems} from "@/hooks/useGetItems";
import {Search} from "@/components/search/Search";

const RECIPES_PER_PAGE = 5

const RecipeList = () => {
    const [page, setPage] = useState<number>(1)
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [totalRecipes, setTotalRecipes] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)

    const fetched = useGetPaginatedItems(
        page,
        'recipes',
        setLoading,
        RECIPES_PER_PAGE,
        setRecipes,
        "recipes",
        setTotalRecipes)

    return (
        <div className={'wrapper'}>
            <section className={'recipes'}>
                <div className={'recipes__container'}>
                    <Search type={'recipes'}/>
                    {loading ? (
                            <div className={'loader'}><h2>Loading...</h2></div>
                        ) : (
                            <div className={'recipes__list'}>
                                {recipes.map((recipe, index) => <RecipeItem key={index} recipe={recipe}/>)}
                            </div>
                        )}
                    <Pagination
                        setPage={setPage}
                        page={page}
                        total={totalRecipes}
                        limit={RECIPES_PER_PAGE}
                        fetched={fetched}
                    />
                </div>
            </section>
        </div>

    );
};

export default RecipeList;