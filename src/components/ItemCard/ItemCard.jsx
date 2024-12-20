 import React, { useContext } from "react"
 import HomeContext from "../../contexts/Home/HomeContext";
 import formatCurrency from "../../utils/formatCurrency"
 import { FaMinus, FaPlus } from "react-icons/fa6";
 import './ItemCard.css'
 
 function ItemCard({ data }){

    const {cartItems, setcartItems} = useContext(HomeContext)
    const {id, thumbnail, title, price, amount} = data

    const updateCartItemAmount = (id, amountChange) => {
        const existingProductIndex = cartItems.findIndex(item => item.id === id);

        if(existingProductIndex !== -1){
            const updatedCart = [...cartItems];
            const newAmount = updatedCart[existingProductIndex].amount + amountChange
            if (newAmount >= 1) { //Garante que a quantidade não seja zero, pra isso usamos o botão de excluir.
                updatedCart[existingProductIndex].amount = newAmount;
                setcartItems(updatedCart);
            }
        } else {return}
    }

    const removeItemFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setcartItems(updatedCart);
    }    

    return(
        <div className="itemCard">
            <div className="itemCardContent">
                <img src={thumbnail} alt="productImageCart" className="productImageCart"/>
                <div className="itemCardInfos">
                    <h2 className="itemTitle mainItemTitle">Produto:</h2>
                    <div className="itemCardTitleContainer">
                        <h2 className="itemCardTitle">{title}</h2>
                        <button className="deleteButton" onClick={() => removeItemFromCart(id)}>Remover</button>
                    </div>
                    <div className="amountSelectorContainer">
                        <button className="selectorButton minusButton" disabled={amount == 1} onClick={() => updateCartItemAmount(id, -1)}><FaMinus /></button>
                        <h2 className="amountTitle">{amount}</h2>
                        <button className="selectorButton plusButton" onClick={() => updateCartItemAmount(id, 1)}><FaPlus /></button>
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
