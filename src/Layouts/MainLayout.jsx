import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Background from "../assets/Background.svg"

const MainLayout = () => {
  return (
    <div >
    <Navbar/>
    <div style={{backgroundImage:`url(${Background})`,
                backgroundBlendMode: "overlay",
                backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    }} className='min-h-screen'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
