/* import React from 'react' */
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Order from './components/Order.jsx'
import ImageGridTop from './components/ImageGridTop.jsx'

function App() {

  return (
    <>
      <div>
        <Navbar/>  {/* Simple Navbar with 6 buttons and the logo in a circular div, make sure to keep designs consistent. */}
        <Hero/>  {/* Baclground image with text overlay with hours of operation as reflected on business facebook account. */}
        <Order/>  {/* Simple div element with white background and text overlay with order online button that links to doordash page or pickup option. */}
        <ImageGridTop/>  {/* 8 image grid showcasing popular menu items from images posted on social media platforms. */}
        {/* <Menu-Front/> */}  {/* Menu front section with categories and items listed with prices. */}
        {/* <Menu-Back/> */}  {/* Menu back section with categories and items listed with prices. */}
        {/* <QNA/> */}  {/* Questions and Answers section with frequently asked questions. */}
        {/* <Image-Grid-Bottom/> */}  {/* Simple 4 image grid showcasing interior and exterior images of the restaurant. */}
        {/* <Cater-Form/> */}  {/* Catering form with fields for name, email, phone number, event date, event type, number of guests, and special requests. It can either be online or a downloadable PDF. */}
        {/* <Career-Form/> */}  {/* Career form with fields for name, email, phone number, position applied for, resume upload, and/or cover letter. */}
        {/* <Socials/> */}  {/* Similar Image grid to the top image grid but with social media icons linking to business social media accounts. */}
        {/* <Footer/> */} {/*  Simple Copyright footer with business name, location, and year. */}
        <h1>Welcome to Empower Nutrition!</h1> {/* Miro Link: https://miro.com/app/board/uXjVJIlB0G8=/?share_link_id=300522846468 */}
      </div>
    </>
  )
}

export default App
