import { React } from 'react'
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import './Footer.css'

function Footer(){

    return (
        <footer className="footer">
            <div className="contentContainer">
                <div className='socialMedia'>
                    <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" className='circleIcon'><TiSocialFacebook /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='circleIcon'><IoLogoInstagram /></a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className='circleIcon'><RiTwitterXFill /></a>
                </div>
                <p className='address'>Tv. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-115</p>
                <div className='contact'>
                    <div className='phone'>
                        <MdLocalPhone />
                        <span className='contactText'>(71) 9 8765-4321</span>
                    </div>
                    <div className='email'>
                        <HiOutlineMail />
                        <span className='contactText'>contato@etomorrow.com</span>
                    </div>
                </div>
            </div>
            <div className='copyrightContainer'>© 2024 E-Commerce Tomorrow</div>
        </footer>
    )
}

export default Footer;