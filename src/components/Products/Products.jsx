import React, { useState, useEffect, useContext } from "react"
import fetchProducts from '../../api/fetchProducts'
import ProductCard from "../ProductCard/ProductCard"
import ProductCardSkeleton from "../productCardSkeleton/productCardSkeleton"
import HomeContext from '../../contexts/Home/HomeContext';
import './Products.css'

function Products() {

    const {products, setProducts, isLoading, setLoading} = useContext(HomeContext)

    useEffect( () => {
        fetchProducts('ps5').then(response => {
            setProducts(response)
            setLoading(false) //Depois que os dados da API chegam não exibimos mais o skeleton.
        })
    }, []) //Executa apenas uma vez graças ao array vazio.

    return(
        <section className="products">
            {isLoading ? 
                Array(30)
                .fill()
                .map((_, index) => <ProductCardSkeleton key={index} />)
                : products.map((product) => <ProductCard key={product.id} data={product} />)
            }
        </section>
    )
}

export default Products