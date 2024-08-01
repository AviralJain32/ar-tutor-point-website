import Marquee from './MarqeeConfig';
import IMG1 from '../assets/RESULT1.jpeg';
import IMG2 from '../assets/RESULT2.jpeg';
import IMG3 from '../assets/RESULT3.jpeg';
import IMG4 from '../assets/RESULT4.jpeg';

const reviews = [IMG1, IMG2, IMG3, IMG4];

const ReviewCard = ({ img }) => {
  return (
    // <div className="relative w-96">
      <img src={img} alt="" className='object-fill h-[25rem]' />
    // </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover={true} className="[--duration:20s]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} img={review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    
  );
}
