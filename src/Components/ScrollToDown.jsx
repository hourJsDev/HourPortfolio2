import { CgArrowLongLeft } from "react-icons/cg";
const ScrollToDown = () => {
  const toTop = () => {
    window.scrollTo(90000000, 90000000);
  };
  return (
    <button
      onClick={toTop}
      className="absolute  dark:text-white max-md:text-[1rem]  duration-200 transition-all flex items-center gap-[1rem] top-[50rem] right-[2rem] text-[1.5rem] flex -rotate-90"
    >
      <span>
        <CgArrowLongLeft />
      </span>
      scroll to down{" "}
    </button>
  );
};

export default ScrollToDown;
