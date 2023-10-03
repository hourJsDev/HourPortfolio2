
const SkillCard = ({title,image}) => {
  return (
    <article className="animationTop flex flex-col max-md:w-[20rem] items-center gap-[1rem] w-[30rem] ">
        <img className="w-full h-[30rem] max-md:h-[20rem] object-contain" src={image} alt={title} />
        <p className="text-[2rem] capitalize">{title}</p>
    </article>
  )
}

export default SkillCard
