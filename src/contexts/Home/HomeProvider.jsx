import React, { useState } from "react";
import HomeContext from "./HomeContext";
import propTypes from 'prop-types'

function HomeProvider( {children}){

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [cartItems, setcartItems] = useState([])

    // Todo mundo dentro do provider pode acessar essas informações.
    const value = {
        products, setProducts,
        isLoading, setLoading,
        cartItems, setcartItems,
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