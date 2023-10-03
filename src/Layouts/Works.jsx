
import WorkList from "../Components/WorkList";

const Works = () => {
  return (
    <section id="work" className="work bg-white">
      <div className="w-[73%] flex flex-col justify-center max-md:h-[15rem] mx-auto h-[30rem]">
        <div className="flex items-center gap-[2rem]">
          <h1 className="text-[3rem]  max-md:text-[2.3rem] font-semibold">
            Crafted with love.
          </h1>
          <div className="w-[4rem] bg-black h-[2px]"></div>
        </div>
        <p className="text-[1.2rem] max-md:text-[1rem] font-semibold">
          These are selection of my recent works.
        </p>
      </div>
      <WorkList />
    </section>
  );
};

export default Works;
