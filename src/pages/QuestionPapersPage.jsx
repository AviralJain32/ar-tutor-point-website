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
      <div className="flex flex-col">
      {/* Header */}
      <div className="w-full flex justify-center items-center py-4">
        <h2 className="font-bold text-xl">Question Papers</h2>
      </div>

      {/* Content Section */}
      <div className="p-4 gap-5 flex flex-row relative">
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-[60%] gap-4">
          <div className="bg-white p-4 shadow-md">
            <div>
              <h3>Class 12 Science</h3>
              <div className="p-4 flex flex-col gap-1">
                <p className="text-blue-800 text-lg">Physics</p>
                <hr />
                <p className="text-blue-800 text-lg">Mathematics</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md">
            <div>
              <h3>Class 12 Commerce</h3>
              <div className="p-4 flex flex-col gap-1">
                <p className="text-blue-800 text-lg">Accounts</p>
                <hr />
                <p className="text-blue-800 text-lg">Economics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Select Class Section */}
        <div className="hidden md:block bg-white p-4 w-[40%] shadow-md fixed top-20 right-0">
          <h1 className="font-bold text-lg">Select Class</h1>
          <div className="p-2 flex flex-col gap-2">
            {classes.map((className, index) => (
              <p key={index} className="text-blue-800 text-base">
                {className}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View (Positioned at the bottom) */}
      <div className="md:hidden bg-white p-4 w-full shadow-md fixed bottom-0 left-0">
        <h1 className="font-bold text-lg">Select Class</h1>
        <div className="p-2 flex flex-col gap-2">
          {classes.map((className, index) => (
            <p key={index} className="text-blue-800 text-base">
              {className}
            </p>
          ))}
        </div>
      </div>
    </div>
    )

}

export default QuestionPapersPage;