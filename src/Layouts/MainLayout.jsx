import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Background from "../assets/Background.svg"

const MainLayout = () => {
  return (
    <div>
    <Navbar/>
    <div style={{backgroundImage:`url(${Background})`,
                backgroundBlendMode: "overlay",
                backgroundRepeat:'repeat',
                backgroundColor: 'rgba(255, 255, 255, 0.97)', 
                    }} className='min-h-screen sm:px-16 px-6'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
