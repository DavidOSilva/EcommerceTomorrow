import React, { useContext } from 'react'
import HomeContext from '../../contexts/Home/HomeContext'
import { PiEmptyBold } from "react-icons/pi";
import CartSummary from '../cartSummary/cartSummary'
import ItemCard from '../ItemCard/ItemCard'
import './Items.css'

function Items(){

    const {cartItems, setcartItems} = useContext(HomeContext)

    return (  
        <section className='cartContainer'>

            <div className='cartItems'>
                <div className='cartItemsHeader'>
                    <h2 className='cartItemsTitle'>Itens</h2>
                </div>
                {
                cartItems.length > 0 ?
                cartItems.map((item) => <ItemCard key={item.id} data={item} />) :
                <div className='cartEmptyContainer'>
                    <PiEmptyBold />
                    <h2 className='cartEmptyTitle'>Oops!!</h2>
                    <p className='cartEmptySubtitle'>Ainda não escolheu nada. Explore nossas ofertas e preencha seu carrinho.</p>
                </div>
                }
            </div>
            <CartSummary />

        </section>
    )
}

export default Items