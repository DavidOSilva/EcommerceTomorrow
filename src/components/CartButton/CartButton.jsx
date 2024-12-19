import { PiShoppingCart } from "react-icons/pi";
import HomeContext from "../../contexts/Home/HomeContext";
import React, { useContext } from 'react'
import './CartButton.css'

function CartButton(){

    const {cartItems} = useContext(HomeContext)
    const totalItems = cartItems.reduce((total, item) => total + item.amount, 0) //Soma a quantidade de todos os itens no carrinho.

    return (
        <div className="cartContainer">
            <p className="username">Olá, David.</p>
            <button type="button" className="cartButton" onClick={() => console.log(cartItems)}>
                <PiShoppingCart />
                {cartItems.length > 0 && <span className="cartCounter">{totalItems}</span>}
            </button>
        </div>

    )
}

export default CartButton