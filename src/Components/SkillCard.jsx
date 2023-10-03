
const SkillCard = ({title,image}) => {
  return (
    <article className="animationCard relative flex flex-col max-md:w-[20rem] items-center gap-[1rem] w-[30rem] ">
        <h1 className="animationText text-[3rem] text-gray-300 font-bold top-[1rem] rotate-12 z-0 -right-[5rem] max-md:text-[2rem] uppercase absolute">{title}</h1>
        <img className="animationImage w-full h-[30rem] z-10 max-md:h-[20rem] object-contain" src={image} alt={title} />
        <p className="text-[2rem] capitalize">{title}</p>
    </article>
  )
}

export default SkillCard
