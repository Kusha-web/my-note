import { MdSearch } from "react-icons/md"


const Search = ({ handleSearchText }) => {
    return(
        <div className="search">
            <MdSearch className="search-icon" size="1.3rem" />
            <input type="text" placeholder="Type to search.." onChange={(event) => handleSearchText(event.target.value)}/>
        </div>
    )
}

export default Search;