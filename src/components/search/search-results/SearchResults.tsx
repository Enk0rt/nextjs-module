import './SearchResults.scss'

import Link from "next/link";
import {IUser} from "@/models/user/IUser";
import {IRecipe} from "@/models/recipe/IRecipe";

type SearchResultsProps = {
    type: "users" | "recipes",
    searchResults: IUser[] | IRecipe[]
}

export const SearchResults = ({type, searchResults}: SearchResultsProps) => {


    return (
        <div className={'search__wrapper'}>
            <div className="search-results">
                {searchResults.length > 0 && (
                    searchResults.map((res, index) => {
                        if (type === 'users') {
                            const user = res as IUser
                            return (
                                <div key={index} className="search-results__item">
                                    <Link href={`/users/${res.id}`}>
                                        <h2>ID: {user.id} | {user.firstName} {user.lastName}</h2>
                                    </Link>
                                </div>
                            )
                        }
                        if (type === "recipes" && "name" in res) {
                            const recipe = res as IRecipe;
                            return (
                                <div key={index} className="search-results__item">
                                    <Link href={`/recipes/${recipe.id}`}>
                                        <h2>ID: {recipe.id} | {recipe.name}</h2>
                                    </Link>
                                </div>
                            )
                        }
                        return null
                    }))}
            </div>
        </div>
    );
};

export default SearchResults;