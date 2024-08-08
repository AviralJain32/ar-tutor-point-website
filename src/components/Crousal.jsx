import React, { useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import TestimonialCard from './TestimonialCard';

const Crousal = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 550;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 550;
  };

  useEffect(() => {
    const slider = document.getElementById("slider");
    const autoScroll = setInterval(() => {
      slider.scrollLeft += 1550;
    }, 1500);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="relative flex items-center">
      <div
        className="opacity-50 cursor-pointer hover:opacity-100 h-full flex items-center"
        onClick={slideLeft}
      >
        <FaChevronLeft fontSize="2rem" />
      </div>
      <div
        id="slider"
        className="w-full flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide p-4 fle"
      >
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>

      </div>
      <div
        className="opacity-50 cursor-pointer hover:opacity-100 h-full flex items-center"
        onClick={slideRight}
      >
        <FaChevronRight fontSize="2rem" />
      </div>
    </div>
  );
};

export default Crousal;
