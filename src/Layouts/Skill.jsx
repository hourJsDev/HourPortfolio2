import { useEffect } from "react"
import SkillCard from "../Components/SkillCard"
import SkillList from "../Components/SkillList"
import { useGlobalContext } from "../Context"

const Skill = () => {
  const {selectedSkill} = useGlobalContext()
  useEffect(()=>{

  },[selectedSkill])
  return (
   <section id="about" className="w-[80%] pt-[4rem] mx-auto pb-[10rem]">
    <h1 className="text-[3rem] font-semibold ">My Skills</h1>
    <div className="flex max-md:flex-col max-md:gap-[2rem]  mt-[2rem] ">
        <div className="w-[50%] max-md:w-full flex max-md:pt-[3rem]  items-center justify-center">
          <SkillCard title={selectedSkill.title} image={selectedSkill.image}/>
        </div>
        <SkillList/>
    </div>
   </section>
  )
}

export default Skill
