import { useEffect, useState } from "react";
import {IUser} from "@/models/user/IUser";
import {IRecipe} from "@/models/recipe/IRecipe";
import {IUserResponse} from "@/models/user/IUserResponse";
import {IRecipeResponse} from "@/models/recipe/IRecipeResponse";
import axios from "axios";
import {baseApiUrl} from "@/constants/constants";

export const useGetSearchResult = (type: "users" | "recipes") => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState<IUser[] | IRecipe[]>([]);
    const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

    const handleChangeSearchValue = (value: string): void => {
        setSearchValue(value);

        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        if (!value.trim()) {
            setSearchResults([])
            return;
        }

        const newTimer: NodeJS.Timeout = setTimeout(async () => {
            try {
                let results: IUser[] | IRecipe[] = [];

                if (type === "users") {
                    const { data } = await axios.get<IUserResponse>(`${baseApiUrl}/${type}?limit=0`);
                    results = data.users.filter((user: IUser) =>
                        `${user.firstName} ${user.lastName}`.toLowerCase().includes(value.toLowerCase()) ||
                        user.id.toString().includes(value)
                    );
                } else if (type === "recipes") {
                    const { data } = await axios.get<IRecipeResponse>(`${baseApiUrl}/${type}?limit=0`);
                    results = data.recipes.filter((recipe: IRecipe) =>
                        recipe.name.toLowerCase().includes(value.toLowerCase()) ||
                        recipe.id.toString().includes(value)
                    );
                }

                setSearchResults(results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }, 300);

        setDebounceTimer(newTimer);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (!(event.target as HTMLElement).closest(".search-bar")) {
                setSearchValue("");
                setSearchResults([]);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return {
        handleChangeSearchValue,
        searchValue,
        searchResults
    };
};
