import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectLink from '../Components/ProjectLink'
const ProjectCard = (props) => {
  const { image, id, title, link, type } = props;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" 
     data-aos-offset="400"
     data-aos-duration="500" className="animationLeft flex max-md:flex-col transition-all duration-200 ease-out max-md:gap-[1.5rem] dark:hover:bg-gray-800 hover:bg-gray-50 items-center justify-between">
      <div>
        <div className="flex items-center gap-[1rem]">
          <div className="w-[6rem] h-[2px] bg-gray-500"></div>
          <div>
            <div className="flex items-center gap-[1rem]">
              <span className="text-gray-500">0{id}</span> <h2 className="text-[2rem]">{title}</h2>
            </div>
            <p className="capitalize text-[1.5rem]">{type}</p>
          </div>
        </div>
      </div>
      <div className="w-[50rem] before:w-[50%] before:h-[50%] -translate-y-[1rem] before:top-[55%] before:-left-4 before:bg-sky-200 before:absolute relative">
        <ProjectLink link={link} />
        <img className="w-full skew-y-3 " src={image} alt={title} />
      </div>
    </article>
  );
};

export default ProjectCard;
