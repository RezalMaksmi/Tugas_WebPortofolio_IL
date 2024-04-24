// import React from 'react'
import { motion } from "framer-motion";
import React, { useState } from "react";
import react from "../assets/icon/icons8-react.png";
import tailwindcss from "../assets/icon/icons8-tailwindcss.png";
import ci from "../assets/icon/ci.png";
import html from "../assets/icon/icons8-html.png";
import css from "../assets/icon/icons8-css.png";
import bootstrap from "../assets/icon/icons8-bootstrap.png";
import laravel from "../assets/icon/laravel.png";

import starflix from "../assets/portofolio/starflix.jpg";
import news from "../assets/portofolio/news.jpg";
import bukapedia from "../assets/portofolio/bukapedia.jpg";
import belanjamudah from "../assets/portofolio/belanjamudah.png";
import mbkm from "../assets/portofolio/mbkm.png";
import CardPortofolio from "../componenents/atoms/CardPortofolio";
import CardSertifikat from "../componenents/atoms/CardSertifikat";

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

  let content;

  switch (selectedMenu) {
    case "sertifikat":
      content = <CardSertifikat />;
      break;

    default:
      content = <CardPortofolio />;
  }
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="bg-[#191919] component flex justify-center"
    >
      <div className="lg:w-[190vh] w-full flex flex-col md:gap-7 gap-4">
        <div className="flex flex-row h-max gap-14 mx-auto md:mt-[90px] mt-[80px] items-center w-auto ">
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
        {content}
      </div>
    </motion.div>
  );
};

export default Portofolio;
