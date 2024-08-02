import sirLandingPage from "../assets/3-sir-landing-page-picture.svg"
import WordRotate from "../components/WordRotateEffect"
import cubeForBg from "../assets/bg-components/cube-group.svg"
import trianglecubeForBg from "../assets/bg-components/Group.svg"
import roundedCubeForBg from "../assets/bg-components/extrude-group.svg"
import cylindercubeForBg from "../assets/bg-components/cylinder-group.svg"
import tutionGroupPicture from "../assets/Tution_group_pic_section2_mainPage.svg"
import subpic1 from "../assets/Small Batches.svg"
import subpic2 from "../assets/Regular Doubt Classes & Tests.svg"
import subpic3 from "../assets/Smart Classes.svg"
import subpic4 from "../assets/ExclusiveStudyMaterialPic.svg"
import AyushSir from "../assets/AyushSirIndivisualPic.svg"
import ArpitSir from "../assets/ArpitSirIndivisualPic.svg"
import RakeshSir from "../assets/RakeshSirIndivisualPicture.svg"
import { MarqueeDemo } from "../components/Marquee"
import Notes from "../assets/Notes.svg"
import ReferenceBooks from "../assets/ReferenceBooks.svg"
import QuestionPaper from "../assets/Questionpaper.svg"
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"
import TestimonialCard from "../components/TestimonialCard"

function LandingPage() {
  const images=[{image:RakeshSir,name:"Rakesh Yadav",description:"Faculty of Chemistry & Mathematics"},
    {image:ArpitSir,name:"Arpit Jain",description:"Faculty of Commerce"},
    ,{image:AyushSir,name:"Ayush Yadav",description:"Faculty of Physics & Mathematics"}]

  const StudyResourceImages=[
    {image:Notes,name:"Notes",link:"#"},
    {image:ReferenceBooks,name:"Reference Books",description:"#"},
    ,{image:QuestionPaper,name:"Question Papers",description:"#"},
  ]

  const words=["dream","create","inspire"]
  const navigate=useNavigate()
  return (
    <div className="space-y-28">
      {/* section 1 */}
      <div className=" grid sm:grid-cols-2 relative">

        <img src={cubeForBg} alt="" className="absolute hidden sm:block left-[47rem] h-24"/>
        <img src={trianglecubeForBg} alt="" className="absolute hidden sm:block -left-16 top-16 h-24"/>
        <img src={roundedCubeForBg} alt="" className="absolute hidden sm:block -bottom-0 left-[35rem] h-24"/>
        <img src={cylindercubeForBg} alt="" className="absolute hidden sm:block right-0 bottom-0 h-24"/>

        <div className="flex justify-center flex-col">
          <h1 className="sm:text-5xl font-[700] text-wrap text-4xl !leading-[4rem]">Empowering Students to <WordRotate words={words} /> and Succeed.</h1>
          <div className="mt-8 text-xl">At AR Tutors, we believe in nurturing individual potential through personalized education and unwavering support.</div>
          <div className="flex justify-left items-center sm:flex-row flex-col gap-4 mt-7">
          <button className="bg-primary text-white p-2 px-4 rounded-3xl shadow-md shadow-primary text-lg" onClick={()=>navigate("/demo")}>Demo Video</button>
          <button className="text-primary border-2 border-primary bor p-2 px-4 rounded-3xl text-lg">Register a Call</button>
          
          </div>
        </div>
        <div className="flex justify-end items-center">
          <img className="my-5 " src={sirLandingPage}></img>
        </div>
      </div>

      {/* section 2  */}
      <div className="flex gap-3 justify-around flex-col md:flex-row"> 
        {/* grid md:grid-cols-3 gap-24  */}
        <div className="flex justify-center items-center">
          <img src={tutionGroupPicture} alt="Tution_group_picture"/>
        </div>

        <div className=" md:w-[45rem]">
          <div className="flex flex-col  gap-4 text-ellipsis">
          <h3>EXCELLENCE</h3>
          <div className="text-5xl font-bold !leading-[4rem]">Unlock Your Potential with Our Specialized Programs</div>
          <div className="text-lg ">Our expert faculty at AR Tutors is dedicated to unlocking your potential through personalized guidance and innovative teaching methods.</div>
        </div>

        <div className="gap-y-5 md:mt-4 grid md:grid-cols-2 justify-around w-11/12 ">
          <div className="flex gap-8 items-center ">
            <img src={subpic1} alt="subpic1"/>
            <div className="text-lg">Small Batches</div>
          </div>
          <div className="flex gap-8 items-center">
            <img src={subpic2} alt="subpic2"/>
            <div className="text-lg">Regular Doubt Classes & Tests</div>
          </div>
          <div className="flex gap-8 items-center justify-start">
            <img src={subpic3} alt="subpic3"/>
            <div className="text-lg">Smart Classes</div>
          </div>
          <div className="flex gap-8 items-center">
          <img src={subpic4} alt="subpic4"/>
          <div className="text-lg">Exclusive Study Material</div>
          </div>
        </div>
        </div>
      </div>
      
      {/* section- Meet our team */}
      <div>
        <div className="flex justify-center items-center flex-col gap-3 m-2">
          <h1 className="text-3xl font-bold">Meet Our Team</h1>
          <h2 className="text-md">Get to know our qualified and experienced faculty members.</h2>

          <div className="md:grid-cols-3 grid gap-10">
            {images.map((sir,index)=>(
              <div key={index} className="flex justify-center items-center flex-col">
                <img src={sir.image} alt={sir.name}/>
                <p className="text-2xl text-primary font-bold mt-4">{sir.name}</p>
                <p className="text-md">{sir.description}</p>
              </div>
            ))}
          </div>
      </div>
    </div>

            {/*section- Previous Results */}
            <div>
              <h1 className="text-3xl font-bold text-center my-6">Previous Results</h1>
              <MarqueeDemo/>
            </div>

            {/* Testimonails - section */}
            <div className="flex overflow-x-auto space-x-4 py-4 px-2 snap-x snap-mandatory">
            <div className="snap-center flex-shrink-0">
              <TestimonialCard />
            </div>
            <div className="snap-center  flex-shrink-0">
              <TestimonialCard />
            </div>
            <div className="snap-center  flex-shrink-0">
              <TestimonialCard />
            </div>
            
            {/* <div className="snap-center">
              <TestimonialCard />
            </div>
            <div className="snap-center">
              <TestimonialCard />
            </div>
            <div className="snap-center">
              <TestimonialCard />
            </div>
            <div className="snap-center">
              <TestimonialCard />
            </div> */}
          </div>



            {/* section - study resourses */}
            <div>
              <h1 className="text-3xl font-bold text-center my-6">Study Resources</h1>
              <div>
              <div className="md:grid-cols-3 grid">
                {StudyResourceImages.map((StudyResource,index)=>(
                  <div key={index} className="relative flex justify-center items-center flex-col opacity-[0.5] hover:opacity-100 cursor-pointer group">
                    <div className="absolute top-2 left-24 text-2xl font-bold transition-transform ease-in-out transform group-hover:-translate-x-4 translate-x-0">{StudyResource.name}</div>
                    <div className="absolute top-2 right-24 text-2xl font-bold transition-transform ease-in-out transform group-hover:translate-x-4 translate-x-0"><FaArrowRight/></div>
                    <img src={StudyResource.image} alt={StudyResource.name}/>
                  </div>
                ))}
              </div>
              </div>
            </div>

            

    </div>
  )
}

export default LandingPage
