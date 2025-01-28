import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Background from "../assets/Background.svg"
import ScrollToTop from '../ScrollToTop'

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
    <Navbar/>
    <div style={{
                backgroundImage: `url(${Background})`,
                backgroundBlendMode: "overlay",
                backgroundRepeat: "repeat",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                WebkitBackdropFilter: "blur(10px)", // Safari-specific
                backdropFilter: "blur(10px)", // Standard
                    }} className='min-h-screen sm:px-16 px-6'>
      <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
