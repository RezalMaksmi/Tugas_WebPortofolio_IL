// import React from 'react'
import { motion } from "framer-motion";

import bs from "../assets/icon/icons8-bootstrap.png";
import css from "../assets/icon/icons8-css.png";
import html from "../assets/icon/icons8-html.png";
import figma from "../assets/icon/icons8-figma.png";
import js from "../assets/icon/icons8-js.png";
import react from "../assets/icon/icons8-react.png";
import tailwindcss from "../assets/icon/icons8-tailwindcss.png";
import sass from "../assets/icon/sass.png";
import vue from "../assets/icon/vue.png";
import dino from "../assets/dino.gif";
const About = ({ title, description, canonicalUrl }) => {
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
        duration: 0.6,
        delay: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      exit="exit"
      className="bg-[#141214] component h-full "
    >
      <div
        className={`lg:w-[190vh] w-full h-full flex md:flex-row flex-col mx-auto z-50  items-center  md:top-auto top-20 md:justify-center justify-between pt-20`}
      >
        <div className="flex flex-col items-start justify-center  gap-10 h-auto px-3 relative ">
          <div className="flex flex-col w-auto flex-grow ">
            <div className="font-bold md:gap-2 gap-1 flex flex-col text-3xl md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
              <span className="text-[#E9993C]">My Skill</span>
              <span>{`and Tools`}</span>
              <span className="md:text-xl text-base font-normal ">
                {`I am a student majoring in Information Engineering who is
                interested in web development, especially front-end. In this
                field I am also interested in graphic design and UI/UX. I've
                taken a lot of online classes.`}
              </span>
            </div>
          </div>

          <motion.div
            variants={childVariants}
            initial="initial"
            animate="final"
            className="text-[#fff] flex-grow flex flex-row flex-wrap gap-3 h-auto"
          >
            <img src={html} alt="" className="object-contain" width={`50px`} />
            <img src={css} alt="" className="object-contain" width={`50px`} />
            <img src={js} alt="" className="object-contain" width={`50px`} />
            <img src={figma} alt="" className="object-contain" width={`50px`} />
            <img src={sass} alt="" className="object-contain" width={`50px`} />
            <img src={bs} alt="" className="object-contain" width={`50px`} />
            <img
              src={tailwindcss}
              alt=""
              className="object-contain"
              width={`50px`}
            />
            <img src={react} alt="" className="object-contain" width={`50px`} />
            <img src={vue} alt="" className="object-contain" width={`50px`} />
          </motion.div>
        </div>
        <img
          src={dino}
          className="w-[90%] md:w-[50%] mx-auto mt- "
          width={`40%`}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default About;
