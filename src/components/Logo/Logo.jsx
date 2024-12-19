import React from "react";
import { Link } from 'react-router-dom'
import './Logo.css';

function Logo({ showText=true, theme='light' }){

    const logoPath = theme === 'light' ? "./src/assets/logo.png" : "./src/assets/logo-dark.png";
    const textTheme = theme === 'dark' ? 'Dark' : 'Light';

    return (

        <Link to="/">
            <div className="logoContainer">
                <img src={logoPath} alt="Logo" className="logo" />
                {showText && <div className={`textContainer${textTheme}`}>
                    <h2>E-Commerce</h2>
                    <h2>Tomorrow</h2>
                </div>}
                
            </div>
        </Link>
    )
}

export default Logo;