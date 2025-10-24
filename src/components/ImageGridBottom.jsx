import React from 'react'
import './styles.css'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'

const ImageGridBottom = () => {
  return (
    <div className="image-grid-bottom-container">
      <img src={Image1} alt="" />
       <img src={Image2} alt="" />
        <img src={Image3} alt="" />
         <img src={Image4} alt="" />
    </div>
  )
}

export default ImageGridBottom
