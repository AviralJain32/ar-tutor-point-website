import React,{useState} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Accordion = () => {

    const[accordionOpen,setaccordionOpen ]= useState(false)
   
  return (
    <div className='p-4 bg-gray-200 rounded-lg'>
        <button className='flex justify-between w-full'>
            <span className='font-bold'>Class 12 Science (2021 onwards)</span>
            <span className='text-xl'><IoMdArrowDropdown/></span>
        </button>
        <div>
            <div>
                <button>Physics</button>
                <button>Physics</button>
                <button></button>
            </div>
        </div>
    </div>
  )
}

export default Accordion;
