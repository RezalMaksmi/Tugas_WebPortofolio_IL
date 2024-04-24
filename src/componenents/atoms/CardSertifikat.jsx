import React from "react";
import sertifikatMC from "../../assets/sertifikat/sertifikatMC.jpg";
import hactiv8 from "../../assets/sertifikat/hactiv8.png";
import dicoding from "../../assets/sertifikat/dicoding.png";
import uiux from "../../assets/sertifikat/uiux.png";
import asisten from "../../assets/sertifikat/asisten.png";

const CardSertifikat = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 overflow-y-scroll py-3 px-3 md:gap-8 gap-4 justify-start  w-full">
      <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 ">
        <img
          src={sertifikatMC}
          alt=""
          className="h-auto  rounded-lg object-cover object-top"
        />
      </div>

      <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 ">
        <img
          src={hactiv8}
          alt=""
          className="h-auto  rounded-lg object-cover object-top"
        />
      </div>

      <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 ">
        <img
          src={dicoding}
          alt=""
          className="h-auto  rounded-lg object-cover object-top"
        />
      </div>

      <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 ">
        <img
          src={uiux}
          alt=""
          className="h-auto  rounded-lg object-cover object-top"
        />
      </div>

      <div className="flex flex-row bg-[#3E3E3E] rounded-lg p-4 gap-3 ">
        <img
          src={asisten}
          alt=""
          className="h-auto  rounded-lg object-cover object-top"
        />
      </div>
    </div>
  );
};

export default CardSertifikat;
