import React, { useState } from "react";
import HomeContext from "./HomeContext";

function HomeProvider( {children}){

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isLoadingCep, setLoadingCep] = useState(false)
    const [cartItems, setcartItems] = useState([])
    const [shippingData, setShippingData] = useState({})

    // Todo mundo dentro do provider pode acessar essas informações.
    const value = {
        products, setProducts,
        isLoading, setLoading,
        isLoadingCep, setLoadingCep,
        cartItems, setcartItems,
        shippingData, setShippingData,
    }

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider