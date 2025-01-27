import React, { useState } from 'react'
import logo_nav from '../assets/logo-for-navbar.svg'
import {MdOutlineMenu} from "react-icons/md"
import {MdClose} from "react-icons/md"
import Headroom from 'react-headroom'
import DemoVideoPage from '../pages/DemoVideoPage'
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const navLinks=[
    {Name:"HOME",RedirectLink:"/"},
    {Name:"ABOUT US",RedirectLink:"/aboutus"},
    {Name:"DEMO VIDEOS",RedirectLink:"/demo"},
    {Name:"STUDY MATERIAL",RedirectLink:"/Notes",
      Dropdown: [
        { Name: "Notes", RedirectLink: "/notes" },
        { Name: "Reference Books", RedirectLink: "/referencebooks" },
        { Name: "Question Papers", RedirectLink: "/questionpapers" },
      ],}
  ];

  let[open,setopen]=useState(false)

  const phone = "8595698236"; // Replace with the tutor's phone number
  const message = encodeURIComponent("I'm interested in your coaching services. Can you provide more details?");
  const whatsappLink = `https://wa.me/91${phone}?text=${message}`;
  
  return (
    <div className="w-full sticky top-0 z-10 bg-white sm:px-16 sm:py-2 ">
      <div className=" font-Main-font pb-2 justify-between bg-white items-center md:pb-0 md:flex ">
        <div className="">
          <img
            src={logo_nav}
            alt="Logo"
            className=" h-12 pt-2 ml-3 md:pt-0 md:ml-4"
          />
        </div>
        <div
          onClick={() => {
            setopen(!open);
          }}
          className="text-3xl absolute right-6 top-4 cursor-pointer md:hidden"
        >
          <MdOutlineMenu className={open ? 'hidden' : ''} />
          <MdClose className={open ? '' : 'hidden'} />
        </div>
          {/* <ul className={`text-gray-700 md:flex md:gap-12 md:p-2 transition-all duration-500 ease-in
          ${open?"":"hidden"}`}> 
            {
              navLinks.map((navLinks)=>(
                <li key={navLinks.Name} className='my-7 font-medium text-center text-[14px] px-4 md:my-0 md:text-md md:px-1 hover:text-gray-400 duration-200 ease-in-out'>
                  <a href={navLinks.RedirectLink}>{navLinks.Name}</a>
                </li>
              ))
            } 
          </ul> */}
          <ul className={`text-gray-700 md:flex md:gap-12 md:p-2 transition-all duration-500 ease-in
          ${open?"":"hidden"}`}>
        {navLinks.map((navLink) => (
          <li
            key={navLink.Name}
            className="relative group my-7 font-medium text-center text-[14px] px-4 md:my-0 md:text-md md:px-1 hover:text-gray-400 duration-200 ease-in-out"
          >
            <a href={navLink.RedirectLink}>{navLink.Name}</a>

            {/* Dropdown Menu */}
            {navLink.Dropdown && (
              <ul className="absolute left-0 hidden w-40 bg-white shadow-lg group-hover:block">
                {navLink.Dropdown.map((dropdownItem) => (
                  <li
                    key={dropdownItem.Name}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <a href={dropdownItem.RedirectLink}>{dropdownItem.Name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
          <div className=' flex items-center justify-center hover:scale-105 duration-300 ease-in-out'>
          <Link to={whatsappLink}>
            <button className={`hover:scale-1.70 animate-pulse text-white font-bold text-[14px] px-4 py-2 md:text-sm bg-primary rounded-md md:ml-0 ${open?"":"hidden"} md:block`}>
              Register A Call
            </button>
          </Link>
          </div>
      </div> 
    </div>
  );
};

export default Navbar;
