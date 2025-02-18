'use client'

import {useEffect, useState} from "react";
import {redirect} from "next/navigation";
import RecipeItem from "@/components/recipes/recipe-item/RecipeItem";
import {IRecipe} from "@/models/recipe/IRecipe";

const RecipeList = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/recipes/api");

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();
                setRecipes(data.recipes);
            } catch {
                redirect('/')
            }
        };

        fetchUsers();
    }, []);
    console.log(recipes)
    return (
        <div>
            {
                recipes.map((recipe,index) => <RecipeItem recipe={recipe} key={index}/>)
            }
        </div>
    );
};

export default RecipeList;