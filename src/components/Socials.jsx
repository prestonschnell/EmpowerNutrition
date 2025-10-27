import React from 'react'
import './styles.css'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import Image5 from '../assets/image5.png'
import Image6 from '../assets/image6.png'
import Image7 from '../assets/image7.png'
import Image8 from '../assets/image8.png'
import Facebook from '../assets/facebook-icon.png'

const Socials = () => {
  return (
    <div className="socials-container">
        <div className="socials-grid">
      <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
        <img src={Image5} alt="" />
        <img src={Image6} alt="" />
        <img src={Image7} alt="" />
        <img src={Image8} alt="" />
        </div>
        <div>
            <a id="instagram-button" href="https://www.facebook.com/EmpowerNutritionLLC/" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Socials
