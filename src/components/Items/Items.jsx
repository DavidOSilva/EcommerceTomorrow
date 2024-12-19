import React from 'react'
import CartSummary from '../cartSummary/cartSummary'
import './Items.css'

function Items(){
    return (  
        <section className='cartContainer'>
            <div className='cartItems'>
            </div>
            <CartSummary />
        </section>
    )
}

export default Items