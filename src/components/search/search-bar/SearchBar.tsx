import './SearchBar.scss'
import Image from "next/image";

export const SearchBar = ({ handleChangeSearchValue, searchValue}: {
    type: "users" | "recipes",
    handleChangeSearchValue: (value: string) => void,
    searchValue: string
}) => {

    return (
        <div>
            <label className="search-bar__wrapper">
                <div className="search-bar__container">
                    <input
                        className="search-bar__input"
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => handleChangeSearchValue(e.target.value)}
                    />
                    <Image
                        className="search-bar__image"
                        src="/svg/search.svg"
                        alt="Search icon"
                        width={'20'}
                        height={'20'}/>
                </div>
            </label>
        </div>
    );
};

export default SearchBar;