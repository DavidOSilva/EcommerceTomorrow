import React, { useState } from "react";
import HomeContext from "./HomeContext";
import propTypes from 'prop-types'

function HomeProvider( {children}){

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)

    // Todo mundo dentro do provider pode acessar essas informações.
    const value = {
        products,
        setProducts,
        isLoading,
        setLoading,
    }

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider

HomeProvider.propTypes = {
    children: propTypes.any
}.isRequired