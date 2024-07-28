// import React from 'react'
import { motion } from "framer-motion";
import cl1 from "../assets/selesai/Frame 6.png";
import cl2 from "../assets/selesai/Group 3175.png";
import cl3 from "../assets/selesai/Logo-Undangan-Onlineku.png";
import cl4 from "../assets/selesai/ruang lirik.jpg";

import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaStar } from "react-icons/fa";
const Project = () => {
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
        className={`lg:w-[190vh] w-full h-full grid md:grid-cols-2 grid-cols-1 mx-auto z-50  items-center  md:top-auto top-20 md:justify-center justify-between pt-20`}
      >
        <div className="flex flex-col items-start justify-center  gap-2 h-auto px-3 relative ">
          <div className="flex flex-col w-auto flex-grow ">
            <div className="font-bold md:gap-2 gap-1 py-2 flex flex-col text-3xl md:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
              <span className="text-[#E9993C]">My Customer</span>
              <span>{`& Ratings`}</span>
              <span className="md:text-xl text-base font-normal ">
                {`I invite you to explore my portfolio, view my project ratings and reviews, and learn more about how we bring my clients' visions and needs to life.`}
              </span>
            </div>
          </div>
          <motion.div
            variants={childVariants}
            initial="initial"
            animate="final"
            className="text-[#fff] flex-grow flex flex-row flex-wrap gap-4 md:w-max w-full h-auto bg-[#ffffff1b] px-4 py-4 rounded-xl"
          >
            <div className="flex w-12 h-12 overflow-hidden rounded-full">
              <img src={cl1} alt="" className="object-contain w-full h-full" />
            </div>
            <div className="flex w-12 h-12 overflow-hidden rounded-full">
              <img src={cl2} alt="" className="object-contain w-full h-full" />
            </div>
            <div className="flex w-12 h-12 overflow-hidden rounded-full">
              <img src={cl3} alt="" className="object-contain w-full h-full" />
            </div>
            <div className="flex w-12 h-12 overflow-hidden rounded-full">
              <img src={cl4} alt="" className="object-contain w-full h-full" />
            </div>
          </motion.div>
        </div>
        <div className="w-full md:px-20 px-3">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={5}
            //   breakpoints={{
            //     640: {
            //       slidesPerView: 1,
            //       spaceBetween: 10,
            //     },
            //     768: {
            //       slidesPerView: 1,
            //       spaceBetween: 10,
            //     },
            //     1024: {
            //       slidesPerView: 1,
            //       spaceBetween: 10,
            //     },
            //     1280: {
            //       slidesPerView: 1,
            //       spaceBetween: 10,
            //     },
            //   }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper "
          >
            <SwiperSlide>
              <div className="flex flex-col bg-[#ffffff4e] px-5 py-5 gap-3 rounded-lg text-white">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img
                      src="https://storage.googleapis.com/fastwork-static/1194f09c-cb5d-47e3-99e0-6f7bb85cdad2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold">anuqbqlz</span>
                    <span className="text-base ">23/12/2023</span>
                  </div>
                </div>
                <div className="flex  text-base items-center gap-2">
                  <FaStar className="text-[#E9993C] text-base" />
                  <span>5,0</span>
                </div>
                <span className="text-base">
                  fast response, client oriented. recommended.
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col bg-[#ffffff4e] px-5 py-5 gap-3 rounded-lg text-white">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img
                      src="https://storage.googleapis.com/fastwork-static/1194f09c-cb5d-47e3-99e0-6f7bb85cdad2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold">atcsikcn</span>
                    <span className="text-base ">12/12/2023</span>
                  </div>
                </div>
                <div className="flex  text-base items-center gap-2">
                  <FaStar className="text-[#E9993C] text-base" />
                  <span>5,0</span>
                </div>
                <span className="text-base">
                  Fast response dan hasilnya sangat memuaskan. Keep up the good
                  work.
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col bg-[#ffffff4e] px-5 py-5 gap-3 rounded-lg text-white">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                    <img
                      src="https://storage.googleapis.com/fastwork-static/014c30e9-117c-4e94-a0eb-9472270bd648.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold">atcsikcn</span>
                    <span className="text-base ">12/12/2023</span>
                  </div>
                </div>
                <div className="flex  text-base items-center gap-2">
                  <FaStar className="text-[#E9993C] text-base" />
                  <span>5,0</span>
                </div>
                <span className="text-base">
                  Pengerjaan sangat cepat, dan hasil yang memuaskan
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
