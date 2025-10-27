import React from 'react'
import './styles.css'

const Footer = () => {

function getDate() {
  const date = new Date();
  return date.getFullYear();
}

  return (
    <div className="footer-container">
      <h3>EMPOWER NUTRITION • MANDEVILLE • {getDate()}</h3>
    </div>
  )
}

export default Footer
