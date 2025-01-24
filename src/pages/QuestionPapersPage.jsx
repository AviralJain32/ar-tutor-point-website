import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '../components/Accordion';


const QuestionPapersPage =()=>{
  const classes=["12 (Science)","12 (Commerce)"]
    return(
      <div>
        <div className='w-full flex justify-center items-center'>
          <h2 className='font-bold text-xl'>Question Papers</h2>
        </div>
        {/* <div className='bg-blue-50 p-4 gap-5 flex flex-col'>
          <div className='bg-white p-4'>
              <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Physics</AccordionTrigger>
                <AccordionContent>
                  <div>
                    <a  className='text-blue-500 text-base'>Rotation</a>
                    <br/>
                    <a className='text-blue-500 text-base'>Motion</a>
                    <br/>
                    <a className='text-blue-500 text-base'>Energy</a>
                    <br/>
                    <a className='text-blue-500 text-base'>Light</a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div> */}
        <div className= 'p-4 gap-5 flex flex-row'>
          <div className='flex flex-col w-[60%] gap-4'>
            <div className='bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.15)]'>
              <div>
                <h3>Class 12 Commerce</h3>
                <div className='p-4 flex flex-col gap-1'>
                  <p className='text-blue-800 text-lg'>Accounts</p>
                  <hr></hr>
                  <p className='text-blue-800 text-lg'>Economics</p>
                </div>
              </div>
            </div>
            <div className='bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.15)]'>
              <div>
                <h3>Class 12 Commerce</h3>
                <div className='p-4 flex flex-col gap-1'>
                  <p className='text-blue-800 text-lg'>Accounts</p>
                  <hr></hr>
                  <p className='text-blue-800 text-lg'>Economics</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white p-4 w-[40%] shadow-[0_2px_10px_rgba(0,0,0,0.15)]'>
            <h1 className='font-bold text-lg'>Select Class</h1>
            <div className='p-2 flex flex-col gap-2'>
              <p className='text-blue-800 text-base'>Class 12 (Science)</p>
              <p className='text-blue-800 text-base'>Class 12 (Commerce)</p>
            </div>
          </div>
        </div>
      </div>
    )

}

export default QuestionPapersPage;