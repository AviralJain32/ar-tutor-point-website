// About us
import About_photo from "../assets/about-photo.svg"
import about_pic_1 from "../assets/about-pic-1.svg"
import about_pic_2 from "../assets/about-pic-2.svg"
import about_pic_3 from "../assets/about-pic-3.svg"
import about_pic_4 from "../assets/about-pic-4.svg"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import BlurFade from "../components/cardfade"
import Vectorimg from "../assets/Vector8.svg"

const AboutusPage = () => {
  const about="At AR Tutor's Point, we provide a friendly, supportive environment for Class 9th to 12th CBSE students. With small batch sizes and a balance of fun and studies, our expert faculty ensure personalized attention and academic excellence."

  const mission="At AR Tutor's Point, we emphasize personalized learning, conceptual clarity, interactive teaching methods, and regular assessments. Our goal is to empower students with a solid understanding of fundamental concepts, foster engagement through innovative techniques, and prepare them for academic success and beyond."

  

  return (
    <div className="font-Main-font">
      <div className="flex justify-center">
      <Vectorimg className="h-12 w-2"/>
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
      <div className="flex-col items-center justify-center sm:mx-10 sm:my-[100px]">
        <div className="flex justify-center"><h1 className="text-[32px] font-extrabold">Highlights</h1></div>
        <div className=" py-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <BlurFade delay={0.25} inView>
            <img src={img1} className="w-full object-cover rounded-xl"></img>
          </BlurFade>
          <BlurFade delay={0.25 } inView>
            <img src={img3} className="w-full object-cover rounded-xl"></img>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView> 
              <img src={img4} className="w-full object-cover rounded-xl"></img>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
          <img src={img5} className="w-full h-full object-cover rounded-xl"></img>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <img src={img2} className="w-full h-full  object-cover rounded-xl"></img>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <img src={About_photo} className="w-full object-cover rounded-xl"></img>
          </BlurFade>
        </div>
        {/* <div className="columns-1 sm:columns-2 lg:columns-3 py-10 gap-x-3 gap-y-3">

          <div className="mb-4 break-inside-avoid">  
              <img src={img1} className="w-full object-cover rounded-xl"></img>
          </div>
          <div className="mb-4 break-inside-avoid">  
              <img src={img2} className="w-full object-cover rounded-xl"></img>
          </div>
          <div className="mb-4 break-inside-avoid">  
              <img src={img3} className="w-full object-cover rounded-xl"></img>
          </div>
          <div className="mb-4 break-inside-avoid">  
              <img src={img4} className="w-full object-cover rounded-xl"></img>
          </div>
          <div className="mb-4 break-inside-avoid">  
              <img src={img5} className="w-full object-cover rounded-xl"></img>
          </div>
          <div className="mb-4 break-inside-avoid">  
              <img src={about_pic_1} className="w-full object-cover rounded-xl"></img>
          </div>
          <div className="mb-4 break-inside-avoid">  
              <img src={about_pic_2} className="w-full object-cover rounded-xl"></img>
          </div>

        </div> */}
      </div>
      
    </div>
  )
}

export default AboutusPage
