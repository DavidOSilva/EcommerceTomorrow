import React, { useContext } from "react";
import HomeContext from "../../contexts/Home/HomeContext";
import { PiShoppingCartFill } from "react-icons/pi";
import formatCurrency from '../../utils/formatCurrency'
import './ProductCard.css'

function ProductCard({data}){

    const {id, price, original_price, title, thumbnail, condition, attributes} = data
    const {cartItems, setcartItems} = useContext(HomeContext)

    const product = {
        id,
        thumbnail: thumbnail.replace(/\w\.jpg/gi, "W.jpg"),
        brand: (attributes.find(attr => attr.id === "BRAND")?.value_name ?? "").toUpperCase(),
        translatedCondition: condition === "new" ? "Novo" : condition === "used" ? "Usado" : "",
        title,
        originalPrice: formatCurrency(original_price ?? price*1.3),
        price: formatCurrency(price),
        amount: 1,
    }

    const addToCart = () => {
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id); // Procura o produto no carrinho.
        if (existingProductIndex !== -1) { // Produto encontrado.
            const updatedCart = [...cartItems];
            updatedCart[existingProductIndex].amount += 1;
            setcartItems(updatedCart);
        } else setcartItems([...cartItems, product])
    };

    return (
        <section className="productCard">
            <img src={product.thumbnail} alt="product-image" className="productImage" />
            <div className="productContent">
                <div className="productHeader">
                    <h2 className="productBrand">{product.brand}</h2>
                    <h2 className="productCondition">{product.translatedCondition}</h2>
                </div>
                <p className="productTitle">{product.title}</p>
                <div className="productFooter">
                    <button type="button" className="productButton" onClick={addToCart}><PiShoppingCartFill /></button>
                    <div className="productPrices">
                        <h2 className="productOriginalPrice"> <s>{product.originalPrice}</s></h2>
                        <h2 className="productPrice">{product.price}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCard
