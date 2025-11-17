/* import React from 'react' */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../components/styles.css';
import Logo from '../assets/logo.jpg';
import Img1 from '../assets/image1.png'
import Img2 from '../assets/image2.png'
import Img3 from '../assets/image3.png'
import Img4 from '../assets/image4.png'
import Img5 from '../assets/image5.png'
import Img6 from '../assets/image6.png'
import Img7 from '../assets/image7.png'
import Img8 from '../assets/image8.png'


const AboutPage = () => {
  return (
    <div>
        <Navbar />

            <div className="about-title">
              <h1>ABOUT</h1> {/* Simple card element with a graphic as a background. */}
            </div>

            <div className="about-container">
              <img src={Logo} alt="Logo" id="about-logo" />
              <h2>Here to Empower your nutrition!</h2>
              
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quas omnis delectus doloremque ipsa error praesentium nisi iusto ipsam, harum nulla. Non itaque reiciendis eligendi praesentium? Repellendus nisi nesciunt accusantium?</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/CfH2wEximFo?si=UtvhoJsPCDgZ9NQl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
            </div>


            <div className="about-grid">
              <img src={Img1} alt="img1" />
              <img src={Img2} alt="img2" />
              <img src={Img3} alt="img3" />
              <img src={Img4} alt="img4" />
              <img src={Img5} alt="img5" />
              <img src={Img6} alt="img6" />
              <img src={Img7} alt="img7" />
              <img src={Img8} alt="img8" />
            </div>

        <Footer/>
    </div>
  )
}

export default AboutPage
