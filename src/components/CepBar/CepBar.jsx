import React, { useState, useContext } from 'react'
import HomeContext from '../../contexts/Home/HomeContext';
import fetchAddress from '../../api/fetchAddress'
import formatCep from '../../utils/formatCep'
import { FaLocationDot } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import './CepBar.css'

function CepBar(){

    const {setShippingData, setLoading} = useContext(HomeContext)
    const [cepValue, setCepValue] = useState('')
    const clearCepValue = () => setCepValue('') //Limpa cepValue, apagando a informação na barra do CEP

    const handleChangeCep = ({target}) => { //Formata o CEP enquanto digita.
        const formatteCep = formatCep(target.value);
        setCepValue(formatteCep);
    };

    const handleCheckCep = async (event) => { //Consulta o CEP na API viacep.
        event.preventDefault() //Impede o carregamento da página.
        if (cepValue.trim() === '') {return}
        setLoading(true)
        const shippingDataChecked = await fetchAddress(cepValue)
        setShippingData(shippingDataChecked)
        setLoading(false)
        setCepValue('')
    }

    return(
        <form className='cepBar' onSubmit={handleCheckCep}>
            <input
                className="cepInput"
                type="search"
                maxLength="9"
                placeholder="Informar um CEP"
                value={cepValue}
                onChange={handleChangeCep}
                required
            />
            {cepValue !== '' && (
                <button type="button" className="clearCepButton" onClick={clearCepValue}>
                    <FaTrash />
                </button>
            )}
            <button type="submit" className="cepButton" onClick={handleCheckCep}>
                <FaLocationDot />
            </button>
        </form>
    )
}

export default CepBar