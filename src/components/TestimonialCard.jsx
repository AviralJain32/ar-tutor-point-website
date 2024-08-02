import { RiDoubleQuotesL } from "react-icons/ri";
const TestimonialCard = () => {
    return (
      <div className="relative max-w-2xl px-8 py-6 bg-white rounded-lg shadow-md">
        <div className="absolute -top-5 -left-2 text-4xl"> <RiDoubleQuotesL /></div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-light text-gray-500">Mar 10, 2019</span>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-2">★★★★☆</span>
            <span className="text-sm text-gray-500">(4.0)</span>
          </div>
        </div>
  
        <div className="mt-2">
          <p className="text-gray-700 text-lg italic">
            "Loved this place so much as a student.. Great and the most frank teachers you will ever see in your whole life.. Even after passing out this place holds a special place in my heart :)"
          </p>
        </div>
  
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 object-cover rounded-full" src="https://via.placeholder.com/40" alt="avatar" />
            <div className="flex flex-col">
              <div className="font-bold text-gray-900 cursor-pointer" tabIndex="0" role="link">Aviral Jain</div>
              <div className="text-gray-600 cursor-pointer" tabIndex="0" role="link">Science 2022 Batch</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;
  