import React, { useState, useEffect } from "react"
import fetchProducts from '../../api/fetchProducts'
import ProductCard from "../ProductCard/ProductCard"
import Loading from "../Loading/Loading"
import './Products.css'

function Products() {

    const [products, setProducts] = useState([])

    useEffect( () => {
        fetchProducts('ps5').then(response => {
            setProducts(response)
        })
    }, []) //Executa apenas uma vez graças ao array vazio.

    return(
        <section className="products">
            <Loading />
            {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </section>
    )
}

export default Products