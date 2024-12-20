import React, { useContext } from 'react'
import HomeContext from '../../contexts/Home/HomeContext'
import CartSummary from '../cartSummary/cartSummary'
import ItemCard from '../ItemCard/ItemCard'
import './Items.css'

function Items(){
    return (  
        <section className='cartContainer'>

            <div className='cartItems'>
                <div className='cartItemsHeader'>
                    <h2 className='cartItemsTitle'>Itens</h2>
                </div>
                <ItemCard data={
                    {
                        id:"123",
                        thumbnail:"http://http2.mlstatic.com/D_948815-MLU76516576246_052024-W.jpg",
                        title: "Console Edição Digital Sony Playstation 5 Ps5 Slim De 1 Tb Para Console Ratchet & Clank Rift Apart Returnal",
                        price:10099,
                        amount:1,
                    }
                }/>
                <ItemCard data={
                    {
                        id:"123",
                        thumbnail:"http://http2.mlstatic.com/D_948815-MLU76516576246_052024-W.jpg",
                        title: "Console Edição Digital Sony Playstation 5 Ps5 Slim De 1 Tb Para Console Ratchet & Clank Rift Apart Returnal",
                        price:10099,
                        amount:2,
                    }
                }/>
            </div>
            <CartSummary />

        </section>
    )
}

export default Items