import React from 'react'
import './styles.css'
import Logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='nav-bar-container'>
        <div className="nav-buttons-left">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/order">Order</a></li>
            </ul>
        </div>
        <div id="nav-logo-div">
          <img src={Logo} alt="empower-logo" />  
        </div>
        
        <div className="nav-buttons-right">
            <ul>
                <li><a href="/cater">Catering</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/Contact">Contact Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
