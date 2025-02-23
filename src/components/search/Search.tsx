import './Search.scss'
import SearchBar from "@/components/search/search-bar/SearchBar";
import SearchResults from "@/components/search/search-results/SearchResults";
import {useGetSearchResult} from "@/hooks/useGetSearchResult";


type SearchProps = {
    type: "users" | "recipes"
}

export const Search = ({type}: SearchProps) => {
    const {handleChangeSearchValue, searchValue, searchResults} = useGetSearchResult(type);

    return (
        <div className="search">
            <SearchBar handleChangeSearchValue={handleChangeSearchValue} searchValue={searchValue} type={type}/>
            <SearchResults searchResults={searchResults} type={type}/>
        </div>
    );
};