import React, { useState, useEffect } from "react"
import fetchProducts from '../../api/fetchProducts'
import ProductCard from "../productCard/ProductCard"
import './Products.css'

function Products() {

    const [products, setProducts] = useState([])

    useEffect( () => {
        fetchProducts('console').then(response => {
            setProducts(response)
            console.log(products)
        })
    }, [])

    return(
        <section className="products">
            {/* {
                products.map((product) => <p>{product.title}</p>)
            } */}

            <ProductCard/>
        </section>
    )
}

export default Products