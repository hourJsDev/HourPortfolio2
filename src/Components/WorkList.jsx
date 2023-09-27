import React from "react";
import project from "../data/project";
import ProjectCard from "./ProjectCard";
const WorkList = () => {
  return (
    <div className="flex flex-col gap-[3rem]">
      {project.map((pro) => (
        <ProjectCard key={pro.id} {...pro} />
      ))}
    </div>
  );
};

export default WorkList;
