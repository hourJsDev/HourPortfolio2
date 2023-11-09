import {CgArrowLongRight} from 'react-icons/cg'
const ScrollToTop = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button
      onClick={toTop}
      className="absolute max-md:text-[1rem]  dark:text-white  max-md:bottom-[5rem] duration-200 transition-all flex items-center gap-[1rem] bottom-[10rem] right-[2rem] text-[1.5rem] flex -rotate-90"
    >
      scroll to top <span><CgArrowLongRight/></span>
    </button>
  );
};

export default ScrollToTop;
