// import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const routeVariants = {
    initial: {
      x: "100vh",
    },
    final: {
      x: "0vh",
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      x: "50px",
    },
    final: {
      opacity: 1,
      x: "0px",
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="component  bg-[#191919] text-white bg-hero-pattern bg-no-repeat bg-contain bg-right-bottom"
    >
      <div className={`lg:w-[190vh] w-full h-full mx-auto z-50  	`}>
        <motion.h1
          variants={childVariants}
          initial="initial"
          animate="final"
          className="flex md:items-center items-start md:top-auto top-20 w-full flex-row h-full px-3 relative justify-between"
        >
          <div className="flex flex-col">
            <div className="font-bold w-full md:gap-2 gap-1 flex flex-col text-3xl md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
              <span>Hallo</span>
              <span>{`I'm a Rezal`}</span>
              <span className="text-[#E9993C] w-full inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
                  <li>FrontEnd Developer</li>
                  <li>UI/UX Design</li>
                  <li>Copywriter</li>
                  <li>FrontEnd Developer</li>
                  <li>UI/UX Design</li>
                  <li aria-hidden="true">CopyWriter</li>
                </ul>
              </span>
              <span className="md:text-xl text-base font-normal w-full">
                Currently in Indonesia, I like learning new things.
              </span>
              <button
                onClick={() => navigate("/about")}
                className="mt-3 md:px-5 md:py-2 px-4 py-2 border rounded-md w-max md:text-xl text-base font-normal text-[#DFDFDF]"
              >
                About Me
              </button>
            </div>
          </div>

          <div className="flex flex-col border shadow-lg gap-0 py-3 px-6 rounded-md absolute lg:right-96 lg:left-auto left-3 lg:bottom-auto bottom-24 mt-44 bg-white text-[#191919] ">
            <span className="text-3xl font-bold">2 YEARS</span>
            <span className="text-xl">Experience</span>
          </div>
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Home;
