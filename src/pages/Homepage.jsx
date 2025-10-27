/* import React from 'react' */

import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Order from '../components/Order.jsx';

import ImageGridTop from '../components/ImageGridTop.jsx'
import Menu from '../components/Menu.jsx'
import menuFront from '../assets/menu-front-bird.png'
import menuBack from '../assets/menu-back-bird.png'
import QNA from '../components/QNA.jsx'
import ImageGridBottom from '../components/ImageGridBottom.jsx'
import CaterForm from '../components/CaterForm.jsx'
import Careers from '../components/Careers.jsx'
import Socials from '../components/Socials.jsx'
import Footer from '../components/Footer.jsx'


function Homepage() {

  return (
    <>
      <div>
        <Navbar/>  {/* Simple Navbar with 6 buttons and the logo in a circular div, make sure to keep designs consistent. */}
        <Hero/>  {/* Baclground image with text overlay with hours of operation as reflected on business facebook account. */}
        <Order/>  {/* Simple div element with white background and text overlay with order online button that links to doordash page or pickup option. */}
        <ImageGridTop/>  {/* 8 image grid showcasing popular menu items from images posted on social media platforms. */}
        <Menu menuSide={menuFront} />  {/* Menu front section with categories and items listed with prices. */}
        <Menu menuSide={menuBack} />  {/* Menu back section with categories and items listed with prices. */}
        <QNA/>  {/* Questions and Answers section with frequently asked questions. */}
        <ImageGridBottom/>  {/* Simple 4 image grid showcasing interior and exterior images of the restaurant. */}
        <CaterForm/>  {/* Catering form with fields for name, email, phone number, event date, event type, number of guests, and special requests. It can either be online or a downloadable PDF. */}
        <Careers/>  {/* Career form with fields for name, email, phone number, position applied for, resume upload, and/or cover letter. */}
        <Socials/>  {/* Similar Image grid to the top image grid but with social media icons linking to business social media accounts. */}
        <Footer/> {/*  Simple Copyright footer with business name, location, and year. */}
         {/* Miro Link: https://miro.com/app/board/uXjVJIlB0G8=/?share_link_id=300522846468 */}
      </div>
    </>
  )
}

export default Homepage;







/* import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};
export default App; */