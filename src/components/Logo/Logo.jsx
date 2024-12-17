import React from "react";
import './Logo.css';

function Logo(){
    return (
        <div className="logoContainer">
            <img src="logo.png" alt="Logo" className="logo" />
            <div className="textContainer">
                <h2>E-Commerce</h2>
                <h2>Tomorrow</h2>
            </div>
        </div>
    )
}

export default Logo;