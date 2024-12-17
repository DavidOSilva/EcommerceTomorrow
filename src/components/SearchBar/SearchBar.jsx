import React, { useState } from 'react'
import { TbSearch } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import './SearchBar.css'

function SearchBar(){

    const [searchValue, setSearchValue] = useState('')
    const clearSearch = () => setSearchValue('')

    return (
        <form className='searchBar'>
        <input
            type="search"
            value={searchValue}
            placeholder="O que você procura?"
            className="searchInput"
            onChange={ ({target}) => setSearchValue(target.value) }
            required
        />
        {searchValue !== '' && (
            <button type="button" className="clearButton" onClick={clearSearch}>
                <FaTrash />
            </button>
        )}
        <button type="submit" className="searchButton">
            <TbSearch />
        </button>
    </form>
    )
}

export default SearchBar;