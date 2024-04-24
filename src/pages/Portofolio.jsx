// import React from 'react'
import { motion } from "framer-motion";
import React, { useState } from "react";
import react from "../assets/icon/icons8-react.png";
import tailwindcss from "../assets/icon/icons8-tailwindcss.png";
import mindes from "../assets/portofolio/mindes.jpg";
import porto2 from "../assets/portofolio/porto2.jpg";
import porto3 from "../assets/portofolio/porto3.jpg";
import belanjamudah from "../assets/portofolio/belanjamudah.png";
import mbkm from "../assets/portofolio/mbkm.png";

const Portofolio = () => {
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
  const [selectedMenu, setSelectedMenu] = useState("portofolio");
  const [status, setStatus] = useState("portofolio");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    if (menu === "sertifikat") {
      setStatus("sertifikat");
    } else {
      setStatus("portofolio");
    }
  };
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="bg-[#191919] component flex justify-center"
    >
      <div className="lg:w-[190vh] w-full flex flex-col gap-7 w-full">
        <div className="flex flex-row h-max gap-14 mx-auto mt-[90px] items-center w-auto ">
          <button
            className={` py-2 ${
              selectedMenu === "portofolio"
                ? " text-white border-b-2"
                : " text-white"
            } gap-1 h-full flex flex-row items-center `}
            onClick={() => handleMenuClick("portofolio")}
          >
            <span className=" text-base w-max">Portofolio</span>
          </button>

          <button
            className={` py-2 ${
              selectedMenu === "sertifikat"
                ? " text-white border-b-2"
                : " text-white"
            } gap-1 h-full flex flex-row items-center `}
            onClick={() => handleMenuClick("sertifikat")}
          >
            <span className=" text-base w-max">Sertifikat</span>
          </button>
        </div>

        <motion.div
          variants={childVariants}
          initial="initial"
          animate="final"
          className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 overflow-y-scroll py-3 px-3 gap-8 justify-start  w-full"
        >
          <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 rounded-lg">
            <img
              src={mindes}
              alt=""
              className="h-[150px] w-[200px] rounded-lg object-cover"
            />
            <div className="flex flex-col text-white relative">
              <h5 className="text-2xl">StartFlix</h5>
              <span className="text-sm ">
                FrontEnd website nonton film gratis
              </span>
              <div className="flex flex-row gap-3  mt-2 w-full">
                <img src={react} alt="" className="object-contain w-6" />
                <img src={tailwindcss} alt="" className="object-contain w-6" />
              </div>
              <button className="text-white text-base px-3 py-1 bg-[#707070] absolute bottom-0 right-0 rounded-sm">
                Demo
              </button>
            </div>
          </div>

          <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 rounded-lg">
            <img
              src={porto2}
              alt=""
              className="h-[150px] w-[200px] rounded-lg object-cover"
            />
            <div className="flex flex-col text-white relative">
              <h5 className="text-2xl">BukaPedia</h5>
              <span className="text-sm	">FrontEnd Website jual beli online</span>
              <div className="flex flex-row gap-3  mt-2 w-full">
                <img src={react} alt="" className="object-contain w-6" />
                <img src={tailwindcss} alt="" className="object-contain w-6" />
              </div>
              <button className="text-white text-base px-3 py-1 bg-[#707070] absolute bottom-0 right-0 rounded-sm">
                Demo
              </button>
            </div>
          </div>

          <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 rounded-lg">
            <img
              src={porto3}
              alt=""
              className="h-[150px] w-[200px] rounded-lg object-cover"
            />
            <div className="flex flex-col text-white relative">
              <h5 className="text-2xl">NewsInfo</h5>
              <span className="text-sm	">FrontEnd Website Berita Indonesia</span>
              <div className="flex flex-row gap-3  mt-2 w-full">
                <img src={react} alt="" className="object-contain w-6" />
                <img src={tailwindcss} alt="" className="object-contain w-6" />
              </div>
              <button className="text-white text-base px-3 py-1 bg-[#707070] absolute bottom-0 right-0 rounded-sm">
                Demo
              </button>
            </div>
          </div>

          <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 rounded-lg">
            <img
              src={porto2}
              alt=""
              className="h-[150px] w-[200px] rounded-lg object-cover"
            />
            <div className="flex flex-col text-white relative">
              <h5 className="text-2xl">Mindes</h5>
              <span className="text-sm	">
                FrontEnd pengelola administrasi desa
              </span>
              <div className="flex flex-row gap-3  mt-2 w-full">
                <img src={react} alt="" className="object-contain w-6" />
                <img src={tailwindcss} alt="" className="object-contain w-6" />
              </div>
              <button className="text-white text-base px-3 py-1 bg-[#707070] absolute bottom-0 right-0 rounded-sm">
                Demo
              </button>
            </div>
          </div>

          <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 rounded-lg">
            <img
              src={belanjamudah}
              alt=""
              className="h-[150px] w-[200px] rounded-lg object-cover"
            />
            <div className="flex flex-col text-white relative">
              <h5 className="text-2xl">NewsInfo</h5>
              <span className="text-sm	">FrontEnd Website Berita Indonesia</span>
              <div className="flex flex-row gap-3  mt-2 w-full">
                <img src={react} alt="" className="object-contain w-6" />
                <img src={tailwindcss} alt="" className="object-contain w-6" />
              </div>
              <button className="text-white text-base px-3 py-1 bg-[#707070] absolute bottom-0 right-0 rounded-sm">
                Demo
              </button>
            </div>
          </div>

          <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 rounded-lg">
            <img
              src={mbkm}
              alt=""
              className="h-[150px] w-[200px] rounded-lg object-cover"
            />
            <div className="flex flex-col text-white relative">
              <h5 className="text-2xl">MBKM Unikama</h5>
              <span className="text-sm	">Website Monitoring kampus UNIKAMA</span>
              <div className="flex flex-row gap-3  mt-2 w-full">
                <img src={react} alt="" className="object-contain w-6" />
                <img src={tailwindcss} alt="" className="object-contain w-6" />
              </div>
              <button className="text-white text-base px-3 py-1 bg-[#707070] absolute bottom-0 right-0 rounded-sm ">
                Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Portofolio;
