import React, { useState, useEffect } from "react"
import fetchProducts from '../../api/fetchProducts'
import ProductCard from "../ProductCard/ProductCard"
import ProductCardSkeleton from "../productCardSkeleton/productCardSkeleton"
// import Loading from "../Loading/Loading"

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './Products.css'

function Products() {

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect( () => {
        fetchProducts('ps5').then(response => {
            setProducts(response)
            setLoading(false)
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