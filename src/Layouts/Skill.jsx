import { useEffect } from "react"
import SkillCard from "../Components/SkillCard"
import SkillList from "../Components/SkillList"
import { useGlobalContext } from "../Context"
import AOS from "aos";
import "aos/dist/aos.css";
const Skill = () => {
  const {selectedSkill} = useGlobalContext()
  const {title,image} = selectedSkill
  useEffect(()=>{
    AOS.init();
    
  },[selectedSkill])
  return (
   <section id="about" className="w-[80%] pt-[4rem] mx-auto pb-[10rem]">
    <h1 data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" 
     data-aos-offset="400"
     data-aos-duration="700" className="text-[3rem] font-semibold ">My Skills</h1>
    <div className="flex max-md:flex-col max-md:gap-[2rem]  mt-[2rem] ">
        <div className="w-[50%] max-md:w-full flex max-md:pt-[3rem]  items-center justify-center">
          <SkillCard title={title} image={image}/>
        </div>
        <SkillList/>
    </div>
   </section>
  )
}

export default Skill
