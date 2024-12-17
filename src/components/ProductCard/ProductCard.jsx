import React from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import './ProductCard.css'

function ProductCard(){
    return (
        // <section className="productCard">
        //     <img src="http://http2.mlstatic.com/D_948815-MLU76516576246_052024-W.jpg" alt="product-image" className="productImage" />
        //     <div className="cardInfos">
        //         <h2 className="cardPrice">R$ 200,99</h2>
        //         <h2 className="cardTitle">Titulo</h2>
        //     </div>
        //     <button>+</button>
        // </section>
        <section className="productCard">
            <img src="http://http2.mlstatic.com/D_948815-MLU76516576246_052024-W.jpg" alt="product-image" className="productImage" />
            <div className="productContent">
                <div className="productHeader">
                    <h2 className="productBrand">SONY</h2>
                    <h2 className="productCondition">Novo</h2>
                </div>
                <p className="productTitle">Console Playstation 5 Midia Fisica Slim Branco 1tb Returnal E Ratchet E Clank Controle Sem Fio Dualsense Branco</p>
                <div className="productFooter">
                    <button type="button" className="productButton"><PiShoppingCartFill /></button>
                    <div className="productPrices">
                        <h2 className="productOriginalPrice"><s>R$ 4599,99</s></h2>
                        <h2 className="productPrice">R$ 3699,99</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCard