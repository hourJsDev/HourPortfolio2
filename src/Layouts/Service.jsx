import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useGlobalContext } from "../Context";
const Service = () => {
  const { services } = useGlobalContext();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="1100"
      data-aos-duration="1500"
      className="bg-black justify-center flex flex-col  h-[30rem]"
    >
      <ul className="flex w-[105%]  -ml-[4rem] gap-[12rem] justify-between">
        {services.map((s) => (
          <li className="text text-white text-[5rem]" key={s.id}>
            {s.title}
          </li>
        ))}
      </ul>
      <ul className="flex w-[105%]  ml-[4rem] gap-[12rem] justify-between">
        {services.map((s) => (
          <li className="text text-white text-[5rem]" key={s.id}>
            {s.title}
          </li>
        ))}
      </ul>
      <ul className="flex w-[105%]  -ml-[9rem] gap-[12rem] justify-between">
        {services.map((s) => (
          <li className="text text-white text-[5rem]" key={s.id}>
            {s.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Service;
