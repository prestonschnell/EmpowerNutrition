import React from 'react'
import './styles.css'
import Logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='nav-bar-container'>
        <div className="nav-buttons-left">
            <ul>
                <li><a href="/About">About</a></li>
                <li><a href="/Order">Order Online</a></li>
                <li><a href="/Cater">Catering</a></li>
            </ul>
        </div>
        <div id="nav-logo-div">
          <img src={Logo} alt="empower-logo" />  
        </div>
        
        <div className="nav-buttons-right">
            <ul>
                <li><a href="/Careers">Work With Us</a></li>
                <li><a href="/Gifts">Gift Cards</a></li>
                <li><a href="/Contact">Contact Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
