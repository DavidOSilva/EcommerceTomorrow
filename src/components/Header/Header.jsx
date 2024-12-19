import { React } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import CartButton  from '../CartButton/CartButton';
import Logo from '../Logo/Logo'
import './Header.css'

function Header(){

    return (
        <header className="header">
            <div className="container">
                <Logo />
                <SearchBar />
                <CartButton />
            </div>
        </header>
    )
}

export default Header;