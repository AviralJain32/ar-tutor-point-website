// import React, { useState, useEffect } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import IMG1 from "../assets/RESULT1.jpeg";
// import IMG2 from "../assets/RESULT2.jpeg";
// import IMG3 from "../assets/RESULT3.jpeg";
// import IMG4 from "../assets/RESULT4.jpeg";

// const Carousel = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const images = [IMG1, IMG2, IMG3, IMG4];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const goToNextImage = () => {
//     setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//   };

//   const goToPrevImage = () => {
//     setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="flex justify-center items-center my-10 lg:h-[30rem] relative">
//       <div className="relative flex justify-center items-center w-11/12 md:w-11/12 lg:9/12 rounded-lg overflow-hidden shadow-lg">
//         <img
//           src={images[currentImage]}
//           alt={`Image ${currentImage}`}
//           className="w-full max-h-48 sm:max-h-72 lg:max-h-[30rem] rounded-lg object-fill transition duration-500 ease-in-out"
//         />
//         <div
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 text-xl sm:text-2xl text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full cursor-pointer"
//           onClick={goToPrevImage}
//         >
//           <IoIosArrowBack />
//         </div>
//         <div
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 text-xl sm:text-2xl text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full cursor-pointer"
//           onClick={goToNextImage}
//         >
//           <IoIosArrowForward />
//         </div>
//         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {images.map((_, index) => (
//             <div
//               key={index}
//               className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
//                 index === currentImage ? 'bg-white' : 'bg-gray-300'
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;



import React from 'react';

export default function Marquee({
  className,
  reverse,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:50s] [--gap:1rem] [gap:var(--gap)] ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] ${
              !vertical ? 'animate-marquee flex-row' : ''
            } ${
              pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
            } ${
              reverse ? '[animation-direction:reverse]' : ''
            }`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}