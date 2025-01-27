// About us
import About_photo from '../assets/about-photo.svg';
import about_pic_1 from '../assets/about-pic-1.svg';
import about_pic_2 from '../assets/about-pic-2.svg';
import about_pic_3 from '../assets/about-pic-3.svg';
import about_pic_4 from '../assets/about-pic-4.svg';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import BlurFade from '../components/cardfade';
import vectorimg from '../assets/Vector8.svg';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { FaRegMessage } from 'react-icons/fa6';
import Form from '../components/Form';

const AboutusPage = () => {
  const about =
    "At AR Tutor's Point, we provide a friendly, supportive environment for Class 9th to 12th CBSE students. With small batch sizes and a balance of fun and studies, our expert faculty ensure personalized attention and academic excellence.";

  const mission =
    "At AR Tutor's Point, we emphasize personalized learning, conceptual clarity, interactive teaching methods, and regular assessments. Our goal is to empower students with a solid understanding of fundamental concepts, foster engagement through innovative techniques, and prepare them for academic success and beyond.";

  return (
    <div className="font-Main-font">

      <div>
      <div className="flex justify-center">

        <h1 className="text-[32px] font-extrabold">About Us</h1>
      </div>
      <div className="mt-12 px-12 sm:mx-14 w-auto flex-row justify-center items-center sm:justify-between sm:items-center sm:flex">
        <div className="flex flex-col w-auto sm:w-[550px]">
          <h1 className="text-[48px] font-Main-font font-extrabold">
            <span>About </span>
            <span className="text-primary">AR Tutor's Point</span>
          </h1>
          <p className="pt-3 text-[16px]">{about}</p>
        </div>  
        <div><img className="py-4" src={About_photo}></img></div>
      </div>
      <div className="flex-col items-center justify-center sm:my-[100px]">
        <div className="flex justify-center"><h1 className="text-[32px] font-extrabold">Our Mission</h1></div>
        <div className="flex  justify-center sm:px-32">
          <p className="pt-3 text-[16px]  text-pretty text-center">{mission}</p>
        </div>


      </div>
      <div className="flex-col items-center justify-center sm:my-[150px]">
        <div className="flex justify-center">
          <h1 className="text-[32px] font-extrabold">Why Chose Us?</h1>
        </div>
        <div className="sm:flex py-5 gap-10 justify-center font-semibold text-md text-center">
          <div className="flex flex-col justify-center items-center">
            <img className="" src={about_pic_1}></img>
            <p className="py-3">Experienced Tutors</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={about_pic_2}></img>
            <p className="py-3">Flexible Scheduling</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={about_pic_3}></img>
            <p className="py-3">Comprehensive Subject<br></br> Coverage</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={about_pic_4}></img>
            <p className="py-3">Supportive Environment</p>
          </div>
        </div>  
      </div>
      </div>
      <div className="flex-col items-center justify-center sm:mx-10 sm:my-[100px]">
        <div className="flex justify-center">
          <h1 className="text-[32px] font-extrabold">Highlights</h1>
        </div>
        <div className=" py-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <BlurFade delay={0.25} inView>
            <img src={img1} className="w-full object-cover rounded-xl"></img>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <img src={img3} className="w-full object-cover rounded-xl"></img>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <img src={img4} className="w-full object-cover rounded-xl"></img>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <img
              src={img5}
              className="w-full h-full object-cover rounded-xl"
            ></img>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <img
              src={img2}
              className="w-full h-full  object-cover rounded-xl"
            ></img>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <img
              src={About_photo}
              className="w-full object-cover rounded-xl"
            ></img>
          </BlurFade>
        </div>

        <div className="grid md:grid-cols-6 my-20 gap-4">
          <div className="md:col-span-2 text-center font-bold text-4xl">
            Get Started Today
          </div>
          <div className="md:col-span-4 h-6">
            Join the AR Tutor's Point family and experience the difference
            personalized tutoring can make. Contact us today to schedule a
            consultation and take the first step towards academic success!
          </div>
        </div>

        <div className="grid md:grid-cols-2 my-24 gap-x-8 gap-y-10">
        <div className="flex justify-center">
          <Form className="w-full max-w-md sm:max-w-lg" />
        </div>
        <div>
          <div className="flex flex-col text-lg gap-10 mt-20 md:mt-0">
            <div className="font-bold text-3xl">Contact</div>
            <div className="flex gap-4">
              <div>
                <IoLocationOutline />
              </div>
              <div>B-9 Gururamdas nagar, Laxmi Nagar, Balaji Rasoi, Delhi 110092</div>
            </div>
            <div className="flex gap-4">
              <div>
                <IoCallOutline />
              </div>
              <div>9716482969 / 9582524208 / 9205515818</div>
            </div>
            <div className="flex gap-4">
              <div>
                <FaRegMessage />
              </div>
              <div>artutorspoint.info@gmail.com</div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7097523909965!2d77.27369537528922!3d28.63845987566147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd496b842d89%3A0x38e8859a52f36bd5!2sAR%20Tutor&#39;s%20Point!5e0!3m2!1sen!2sin!4v1723117144298!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      </div>
      
    </div>
  );
};

export default AboutusPage;
