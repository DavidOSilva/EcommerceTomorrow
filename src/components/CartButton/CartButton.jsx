import { PiShoppingCart } from "react-icons/pi";
import HomeContext from "../../contexts/Home/HomeContext";
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './CartButton.css'

function CartButton(){

    const {cartItems} = useContext(HomeContext)
    const totalItems = cartItems.reduce((total, item) => total + item.amount, 0) //Soma a quantidade de todos os itens no carrinho.

    return (
        <div className="cartButtonContainer">
            <p className="username">Olá, David.</p>
            <Link to='/cart'>
                <button type="button" className="cartButton" onClick={() => console.log(cartItems)}>
                    <PiShoppingCart />
                    {cartItems.length > 0 && <span className="cartCounter">{totalItems}</span>}
                </button>
            </Link>
        </div>
    )
}

export default CartButton