import React from "react";
import propTypes from 'prop-types'
import { PiShoppingCartFill } from "react-icons/pi";
import formatCurrency from '../../utils/formatCurrency'
import './ProductCard.css'

function ProductCard({data}){

    const {price, original_price, title, thumbnail, condition, attributes} = data
    const originalPrice = original_price ?? price*1.3;
    const translatedCondition = condition === "new" ? "Novo" : condition === "used" ? "Usado" : "";
    const brand = attributes.find(attr => attr.id === "BRAND")?.value_name ?? "";

    return (
        <section className="productCard">
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product-image" className="productImage" />
            <div className="productContent">
                <div className="productHeader">
                    <h2 className="productBrand">{brand.toUpperCase()}</h2>
                    <h2 className="productCondition">{translatedCondition}</h2>
                </div>
                <p className="productTitle">{title}</p>
                <div className="productFooter">
                    <button type="button" className="productButton"><PiShoppingCartFill /></button>
                    <div className="productPrices">
                        <h2 className="productOriginalPrice"> <s>{formatCurrency(originalPrice)}</s></h2>
                        <h2 className="productPrice">{formatCurrency(price)}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCard

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;