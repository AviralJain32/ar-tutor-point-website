import sirLandingPage from "../assets/3-sir-landing-page-picture.svg"
import WordRotate from "../components/WordRotateEffect"
import cubeForBg from "../assets/bg-components/cube-group.svg"
import trianglecubeForBg from "../assets/bg-components/Group.svg"
import roundedCubeForBg from "../assets/bg-components/extrude-group.svg"
import cylindercubeForBg from "../assets/bg-components/cylinder-group.svg"

function LandingPage() {
  const words=["dream","create","inspire"]
  return (
    <div className="">
      {/* section 1 */}
      <div className=" grid sm:grid-cols-2 relative">

        <img src={cubeForBg} alt="" className="absolute left-[47rem] h-24"/>
        <img src={trianglecubeForBg} alt="" className="absolute -left-16 top-16 h-24"/>
        <img src={roundedCubeForBg} alt="" className="absolute -bottom-16 left-[35rem] h-24"/>
        <img src={cylindercubeForBg} alt="" className="absolute right-0 bottom-0 h-24"/>

        <div className="flex justify-center flex-col">
          <h1 className="sm:text-6xl font-[700] text-wrap text-4xl !leading-[4rem]">Empowering Students to <WordRotate words={words} /> and Succeed.</h1>
          <div className="mt-8 text-xl">At AR Tutors, we believe in nurturing individual potential through personalized education and unwavering support.</div>
          <div className="flex justify-center items-center sm:flex-row flex-col gap-4 mt-7">
          <button className="bg-blue-500 text-white p-2 px-4 rounded-3xl shadow-md shadow-blue-500 text-lg">Demo Video</button>
          <button className="text-blue-500 border-2 border-blue-500 bor p-2 px-4 rounded-3xl text-lg">Register a Call</button>
          
          </div>
        </div>
        <div className="flex justify-end items-center"><img className="my-5 " src={sirLandingPage}></img></div>
      </div>
    </div>
  )
}

export default LandingPage
