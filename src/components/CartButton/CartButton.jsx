import { PiShoppingCart } from "react-icons/pi";
import React from 'react'
import './CartButton.css'

function CartButton(){
    return (
        <div className="cartContainer">
            <p className="username">Olá, David.</p>
            <button type="button" className="cartButton">
                <PiShoppingCart />
                <span className="cartCounter">1</span>
            </button>
        </div>

    )
}

export default CartButton