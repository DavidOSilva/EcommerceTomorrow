import React from "react";
import './Logo.css';

function Logo({ showText=false, theme='light' }){

    const logoPath = theme === 'light' ? "logo.png" : "logo-dark.png";
    const textTheme = theme === 'dark' ? 'Dark' : 'Light';

    return (

        <div className="logoContainer">
            <img src={logoPath} alt="Logo" className="logo" />
            {showText && <div className={`textContainer${textTheme}`}>
                <h2>E-Commerce</h2>
                <h2>Tomorrow</h2>
            </div>}
            
        </div>
    )
}

export default Logo;