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


function LandingPage() {
  const words=["dream","create","inspire"]
  return (
    <div className="">
      {/* section 1 */}
      <div className=" grid sm:grid-cols-2 relative">

        <img src={cubeForBg} alt="" className="absolute hidden sm:block left-[47rem] h-24"/>
        <img src={trianglecubeForBg} alt="" className="absolute hidden sm:block -left-16 top-16 h-24"/>
        <img src={roundedCubeForBg} alt="" className="absolute hidden sm:block -bottom-0 left-[35rem] h-24"/>
        <img src={cylindercubeForBg} alt="" className="absolute hidden sm:block right-0 bottom-0 h-24"/>

        <div className="flex justify-center flex-col md:ml-28">
          <h1 className="sm:text-5xl font-[700] text-wrap text-4xl !leading-[4rem]">Empowering Students to <WordRotate words={words} /> and Succeed.</h1>
          <div className="mt-8 text-xl">At AR Tutors, we believe in nurturing individual potential through personalized education and unwavering support.</div>
          <div className="flex justify-left items-center sm:flex-row flex-col gap-4 mt-7">
          <button className="bg-primary text-white p-2 px-4 rounded-3xl shadow-md shadow-primary text-lg">Demo Video</button>
          <button className="text-primary border-2 border-primary bor p-2 px-4 rounded-3xl text-lg">Register a Call</button>
          
          </div>
        </div>
        <div className="flex justify-end items-center"><img className="my-5 " src={sirLandingPage}></img></div>
      </div>

      {/* section 2  */}
      <div className="grid md:grid-cols-2 my-6">
        <div className="flex justify-center items-center">
          <img src={tutionGroupPicture} alt="Tution_group_picture"/>
        </div>

        <div className="">
          <div className="flex flex-col gap-6">
          <h3>EXCELLENCE</h3>
          <div className="text-5xl font-bold">Unlock Your Potential with Our Specialized Programs</div>
          <div className="text-lg">Our expert faculty at AR Tutors is dedicated to unlocking your potential through personalized guidance and innovative teaching methods.</div>
        </div>

        <div className="gap-y-5 md:mt-12 grid md:grid-cols-2 justify-around w-11/12">
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
    </div>
  )
}

export default LandingPage
