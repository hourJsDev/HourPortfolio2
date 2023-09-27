import { AiOutlineArrowRight } from "react-icons/ai";
const ProjectLink = ({ link }) => {
  return (
    <a
      className="absolute z-50 hover:gap-[2rem] duration-200 transition-all ease-out flex -translate-x-[50%] -translate-y-[50%] bg-white gap-[1rem] px-[1rem] py-[.5rem] text-[1.2rem] rounded-[2rem] items-center top-[50%] left-[50%]"
      href={link}
      target="_blank"
    >
      View Project{" "}
      <span>
        <AiOutlineArrowRight />
      </span>
    </a>
  );
};

export default ProjectLink;
