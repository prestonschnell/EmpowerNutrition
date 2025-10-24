import React from 'react'
import './styles.css'


const Menu = (props) => {
  return (
    <div className='menu-container'>
      <img src={props.menuSide} alt='Menu' />
    </div>
  )
}

export default Menu
