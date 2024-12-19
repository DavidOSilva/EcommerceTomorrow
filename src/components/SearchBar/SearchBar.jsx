import React, { useState, useContext } from 'react'
import { TbSearch } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import fetchProducts from '../../api/fetchProducts';
import HomeContext from '../../contexts/Home/HomeContext';
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

function SearchBar(){

    const {setProducts, setLoading} = useContext(HomeContext) // A barra de pesquisa pode alterar os produtos.
    const [searchValue, setSearchValue] = useState('') //Responsável por coletar o que digitamos na barra de pesquisa.
    const navigate = useNavigate()

    const clearSearch = () => setSearchValue('') //É usado para limpar o input da barra de pesquisa.
    const handleSearch = async (event) => {
        event.preventDefault() //Impede o carregamento da página ao realizar uma busca.
        if (searchValue.trim() === '') {return}
        navigate('/') //Redirecionando para a home após atualizar os produtos.
        setLoading(true) // Altera isLoading no HomeProvider e faz exibir o productCardSkeleton.
        const products = await fetchProducts(searchValue)
        setLoading(false)
        setSearchValue('')
        setProducts(products) //Altera os produtos do HomeProvider, que serão renderizados em Products.jsx
    }

    return (
        <form className='searchBar' onSubmit={handleSearch}>
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
            <button type="submit" className="searchButton" onClick={handleSearch}>
                <TbSearch />
            </button>
        </form>
    )
}

export default SearchBar;