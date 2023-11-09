import React from "react";
import SeeWorkBtn from "../Components/SeeWorkBtn";
import SocialLink from "../Components/SocialLink";
import "../Styles/Home.css";
import Me from "../assets/me.png";
const Home = () => {
  return (
    <>
      <div className="ball rounded-full absolute dark:bg-gray-800 bg-white "></div>
      <section className="home sm:grid w-3/4 sm:gap-4 mx-auto sm:mx-auto sm:mt-40 flex-col-reverse p-6 flex sm:grid-cols-2 z-100">
        <div className="z-10 flex flex-col gap-10">
          <h1 className="animationLeft  dark:text-white sm:text-8xl text-5xl font-semibold mt-10">
            Photographer & Web developer
          </h1>
          <p className=" dark:text-white text-xl">
            Hi I'm Pich Lyhour. A photographer and fullstack developer based in
            Cambodia
          </p>
          <SeeWorkBtn />
          <SocialLink />
        </div>
        <div className="flex items-center justify-center">
          <img className="saturate-0 w-3/4 rounded-md" src={Me} alt="Pich" />
        </div>
      </section>
    </>
  );
};

export default Home;
