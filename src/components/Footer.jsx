import React from 'react'
import {MdLocationOn,MdCall,MdMail} from 'react-icons/md'
import {IoLogoFacebook,IoLogoInstagram,IoLogoYoutube} from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='bg-red-500'>
      <footer className='bg-[#2A3168] text-white font-Main-font px-12 py-5 sm:py-10 md:px-16'>
        <div className='flex justify-between'>
          <a href='/'>
            <span className='font-semibold text-[16px]'>AR TUTOR'S POINT</span>
          </a>
        </div>
        <div className='mt-5 flex flex-col justify-between items-top gap-5 md:flex-row md:gap-0'>
          <div>
            <h3 className='text-[14px]'>GET IN TOUCH</h3>
            <ul className='mt-2 font-extralight text-gray-300 text-sm cursor-pointer'>
              <li className='flex gap-2 items-center py-1 hover:underline '>
                <MdLocationOn/>
                <p>B-9 Gururamdas nagar, Laxmi Nagar, <br></br>Balaji Rasoi, Delhi-110092</p>
              </li>
              <li className='flex gap-2 items-center py-1 '>
                <MdCall/>
                <p className='hover:underline'><a href='callto:+91971-648-2969'>9716482969</a></p>
                <p className='hover:underline'><a href='callto:+91958-252-4208'>9582524208</a></p>
                <p className='hover:underline'><a href='callto:+91920-551-5818'>9205515818</a></p>
              </li>
              <li className='flex gap-2 items-center py-1 hover:underline'>
                <MdMail/>
                <p><a href='mailto:artutorspoint.info@gmail.com'>artutorspoint.info@gmail.com</a></p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-[14px]'>OTHER LINKS</h3>
            <ul className='mt-2 font-extralight text-gray-300 text-sm cursor-pointer'>
              <li className='flex gap-2 items-center py-1 hover:underline '>
                <p>CBSE</p>
              </li>
              <li className='flex gap-2 items-center py-1 hover:underline'>
                <p href='/' >REVIEWS</p>
              </li>
              <li className='flex gap-2 items-center py-1 hover:underline'>
                <p href='/'>RESULTS</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-[14px]'>IMPORTANT LINKS</h3>
            <ul className='mt-2 font-extralight text-gray-300 text-sm cursor-pointer'>
              <li className='flex gap-2 items-center py-1 hover:underline '>
                <p>Demo Videos</p>
              </li>
              <li className='flex gap-2 items-center py-1 hover:underline'>
                <p href='/' >Class Notes</p>
              </li>
              <li className='flex gap-2 items-center py-1 hover:underline'>
                <p href='/'>Faculy</p>
              </li>
              <li className='flex gap-2 items-center py-1 hover:underline'>
                <p href='/'>Test Papers</p>
              </li>
              <li className='flex gap-2 items-center py-1 hover:underline'>
                <p href='/'>Contact Us</p>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className='text-[14px]'>FOLLOW US ON</h3>
              <ul className='mt-2 font-extralight text-sm cursor-pointer'>
                <li className='flex gap-2 items-center py-1 hover:underline text-xl'>
                  <a href='https://www.instagram.com/artutorspoint?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank'>
                    <IoLogoInstagram/>
                  </a>
                  <a href='https://www.facebook.com/people/A-R-Tutors-Point/pfbid0Uazu1pMpvHyMmdGAphUM8qykgoWwDjk9npkKzKiJU5G1X3WuEKFWLEGkEnYdrTiyl/?mibextid=ZbWKwL' target='_blank'>
                  <IoLogoFacebook/>
                  </a>
                </li>
              </ul>
            </div>
            <hr className='mt-4'></hr>
            <div className='mt-2'>
              <h3 className='text-[14px]'>FOR MORE UPDATES</h3>
              <a href="https://www.youtube.com/@artutorspoint" target="_blank">
                <button
                className='bg-[#BB1D1D] mt-2 px-4 py-2 rounded-md text-[12px] flex items-center justify-center gap-2'>
                  <IoLogoYoutube className='text-xl'></IoLogoYoutube>
                  Subscribe
                </button>
              </a>
            </div>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer
