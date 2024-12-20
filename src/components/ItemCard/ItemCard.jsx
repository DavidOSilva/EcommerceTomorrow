 import React from "react"
 import formatCurrency from "../../utils/formatCurrency"
 import { FaMinus, FaPlus } from "react-icons/fa6";
 import './ItemCard.css'
 
 function ItemCard({ data }){

    const {id, thumbnail, title, price, amount} = data

    return(
        <div className="itemCard">
            <div className="itemCardContent">
                <img src={thumbnail} alt="productImageCart" className="productImageCart"/>
                <div className="itemCardInfos">
                    <h2 className="itemTitle mainItemTitle">Produto:</h2>
                    <div className="itemCardTitleContainer">
                        <h2 className="itemCardTitle">{title}</h2>
                        <button className="deleteButton">Remover</button>
                    </div>
                    <div className="amountSelectorContainer">
                        <button className="selectorButton minusButton" disabled={amount == 1}><FaMinus /></button>
                        <h2 className="amountTitle">{amount}</h2>
                        <button className="selectorButton plusButton"><FaPlus /></button>
                    </div>
                </div>
            </div>
            <div className="itemCardPrices">
                <div className="itemPriceContainer">
                    <h2 className="itemTitle">Preço unitário:</h2>
                    <h2 className="itemPrice">{formatCurrency(price)}</h2>
                </div>
                <div className="itemPriceContainer">
                    <h2 className="itemTitle">Preço total:</h2>
                    <h2 className="itemPrice">{formatCurrency(price * amount)}</h2>
                </div>
            </div>
        </div>
    )
 }

 export default ItemCard
