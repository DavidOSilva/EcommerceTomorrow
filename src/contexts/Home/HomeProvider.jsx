import React, { useState } from "react";
import HomeContext from "./HomeContext";

function HomeProvider( {children}){

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isLoadingCep, setLoadingCep] = useState(false)
    const [shippingData, setShippingData] = useState({})

    //Inicializa cartItems com dados do localStorage, se existirem. Isso garante persistência.
    const [cartItems, setcartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const updateCartItems = (newCartItems) => {
        setcartItems(newCartItems); //Muda o estado como esperado.
        localStorage.setItem("cartItems", JSON.stringify(newCartItems)); //Mas também salva os dados no localStorage.
    };

    // Todo mundo dentro do provider pode acessar essas informações.
    const value = {
        products, setProducts,
        isLoading, setLoading,
        isLoadingCep, setLoadingCep,
        cartItems, setcartItems: updateCartItems,
        shippingData, setShippingData,
    }

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider