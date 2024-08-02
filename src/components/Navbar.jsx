import React, { useState } from 'react'
import logo_nav from '../assets/logo-for-navbar.svg'
import {MdOutlineMenu} from "react-icons/md"
import {MdClose} from "react-icons/md"

const Navbar = () => {
  
  const navLinks=[
    {Name:"HOME",RedirectLink:"/"},
    {Name:"ABOUT US",RedirectLink:"/aboutus"},
    {Name:"RESULTS",RedirectLink:"/Results"},
    {Name:"REVIEWS",RedirectLink:"/Reviews"},
    {Name:"NOTES",RedirectLink:"/Notes"}
  ];

  let[open,setopen]=useState(false)
  
  return (
    <div className='w-full sm:px-16 sm:my-2 '>
      <div className=' font-Main-font pb-2 justify-between bg-white items-center md:pb-0 md:flex sm:bg-transparent'>
        <div className=''>
          <img src={logo_nav} alt="Logo" className=" h-12 pt-2 ml-3 md:pt-0 md:ml-4" />
        </div>
        <div
        onClick={()=>{setopen(!open)}} 
        className='text-3xl absolute right-6 top-4 cursor-pointer md:hidden'>
          <MdOutlineMenu className={open?"hidden":""}/>
          <MdClose className={open?"":"hidden"}/>
        </div>
          <ul 
          
          className={`text-gray-700 md:flex md:gap-12 md:p-2 transition-all duration-500 ease-in
          ${open?"":"hidden"}`}> 
            {
              navLinks.map((navLinks)=>(
                <li key={navLinks.Name} className='my-7 font-medium text-center text-[14px] px-4 md:my-0 md:text-md md:px-1 '>
                  <a href={navLinks.RedirectLink}>{navLinks.Name}</a>
                </li>
              ))
            }
          </ul>
          <div className=' flex items-center justify-center hover:scale-105 duration-300 ease-in-out'>
            <button className={`hover:scale-1.70 animate-pulse text-white font-bold text-[14px] px-4 py-2 md:text-sm bg-primary rounded-md md:ml-0 ${open?"":"hidden"} md:block`}>
              Register A Call
            </button>
          </div>
      </div>
      
    </div>
  )
}

export default Navbar
