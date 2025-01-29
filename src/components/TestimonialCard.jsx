import { RiDoubleQuotesL } from 'react-icons/ri';
const TestimonialCard = (props) => {

  return (
    <div className="relative md:max-w-[25rem]  max-w-[20rem] px-8 xl:py-4 py-0 bg-white rounded-lg shadow-md mx-4 flex-shrink-0 flex-grow justify-end">
      <div className="absolute -top-5 -left-2 text-4xl text-gray-400">
        <RiDoubleQuotesL />
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-light text-gray-500">{props.date}</span>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-2">★</span>
          <span className="text-sm text-gray-500">({props.stars})</span>
        </div>
      </div>
      <div className="mt-2 md:h-40">
        <p className="text-gray-700 text-md italic text-wrap">
          "{props.para}"
        </p>
      </div>
      <div className="flex items-center justify-between mt-8 ">
        <div className="flex items-center space-x-3">
          {/* <img
            className="w-10 h-10 object-cover rounded-full"
            src="https://via.placeholder.com/40"
            alt="avatar"
          /> */}
          <div className="flex flex-col mb-2">
            <div
              className="font-bold text-sm text-gray-900 cursor-pointer"
              tabIndex="0"
              role="link"
            >
              {props.name}
            </div>
            <div
              className="text-gray-600 cursor-pointer"
              tabIndex="0"
              role="link"
            >
              {props.batch}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
