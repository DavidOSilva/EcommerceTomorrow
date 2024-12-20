import React, { useContext } from 'react'
import calculateShippingFee from '../../utils/calculateShippingFee'
import Loading from '../Loading/Loading'
import formatCurrency from '../../utils/formatCurrency'
import HomeContext from '../../contexts/Home/HomeContext'
import CepBar from '../CepBar/CepBar'
import './CartSummary.css'

function CartSummary(){

    const {isLoadingCep, shippingData} = useContext(HomeContext)
    const address = Object.keys(shippingData).length > 0 ?
        [
            shippingData.logradouro,
            shippingData.bairro,
            shippingData.complemento,
            `${shippingData.localidade}-${shippingData.uf}`,
            shippingData.regiao,
        ].filter(Boolean).join('; ') + '.' : ''; //Remove problematicos, ponhe virgula e ponto final.
    const shippingFee = calculateShippingFee(shippingData.regiao);
    const formattedShippingFee = Number.isInteger(shippingFee) ? formatCurrency(shippingFee) : shippingFee;
    const isShippingCalculated = formattedShippingFee !== '—';
    
    return(
        <div className="cartSummary">
            <div className='summaryHeader'>
                <h2 className='summaryTitle'>Resumo da compra</h2>
            </div>
            <CepBar/>
            <div className='cartContent'>
                <p className='cartAddress'>{isLoadingCep ? <Loading /> : address}</p>
                <div className='cartValues'>
                    <div className='valueItem'>
                        <h2>Frete</h2>
                        <h2>{formattedShippingFee}</h2>
                    </div>
                    <div className='valueItem'>
                        <h2>Subtotal</h2>
                        <h2>R$ 13,99</h2>
                    </div>
                </div>
                <div className='cartTotal'>
                    <h2 className='totalTitle'>Total:</h2>
                    <h2 className='totalValue'>R$ 73,99</h2>
                </div>
                <button className={`buyButton ${!isShippingCalculated ? 'disabled' : ''}`} disabled={!isShippingCalculated}>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Finalizar</a>
                </button>
            </div>
        </div>
    )
}

export default CartSummary