import react from "../../assets/icon/icons8-react.png";
import tailwindcss from "../../assets/icon/icons8-tailwindcss.png";
import ci from "../../assets/icon/ci.png";
import html from "../../assets/icon/icons8-html.png";
import css from "../../assets/icon/icons8-css.png";
import bootstrap from "../../assets/icon/icons8-bootstrap.png";
import laravel from "../../assets/icon/laravel.png";

import starflix from "../../assets/portofolio/starflix.jpg";
import news from "../../assets/portofolio/news.jpg";
import bukapedia from "../../assets/portofolio/bukapedia.jpg";
import belanjamudah from "../../assets/portofolio/belanjamudah.png";
import mbkm from "../../assets/portofolio/mbkm.png";
import mindes from "../../assets/portofolio/mindes.png";
import { BiLinkExternal } from "react-icons/bi";

const CardPortofolio = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 overflow-y-scroll py-3 px-3 md:gap-8 gap-4 justify-start  w-full">
      <div className="flex flex-col  p-2 gap-3 rounded-lg relative">
        <img
          src={starflix}
          alt=""
          className="h-[250px] min-w-[190px] rounded-lg object-cover object-top"
        />
        <div className="flex flex-col text-white absolute bottom-0 backdrop-blur-sm p-3 bg-[#1e1e1e86]">
          <h5 className="text-2xl">StartFlix</h5>
          <span className="text-sm ">FrontEnd website nonton film gratis</span>
          <div className="flex flex-row gap-1  mt-2 w-full">
            <img src={react} alt="" className="object-contain w-6" />
            <img src={tailwindcss} alt="" className="object-contain w-6" />
          </div>
          <button className="text-white text-base px-3 py-1 bg-[#707070] absolute  top-0 right-0 rounded-sm">
            <BiLinkExternal />
          </button>
        </div>
      </div>

      <div className="flex flex-col  p-2 gap-3 rounded-lg relative">
        <img
          src={bukapedia}
          alt=""
          className="h-[250px] min-w-[190px] rounded-lg object-cover object-top"
        />
        <div className="flex flex-col text-white absolute bottom-0 backdrop-blur-sm p-3 bg-[#1e1e1e86]">
          <h5 className="text-2xl">BukaPedia</h5>
          <span className="text-sm	">FrontEnd Website jual beli online</span>
          <div className="flex flex-row gap-1  mt-2 w-full">
            <img src={react} alt="" className="object-contain w-6" />
            <img src={tailwindcss} alt="" className="object-contain w-6" />
          </div>
          <button className="text-white text-base px-3 py-1 bg-[#707070] absolute  top-0 right-0 rounded-sm">
            <BiLinkExternal />
          </button>
        </div>
      </div>

      <div className="flex flex-col  p-2 gap-3 rounded-lg relative">
        <img
          src={news}
          alt=""
          className="h-[250px] min-w-[190px] rounded-lg object-cover object-top"
        />
        <div className="flex flex-col text-white absolute bottom-0 backdrop-blur-sm p-3 bg-[#1e1e1e86]">
          <h5 className="text-2xl">NewsInfo</h5>
          <span className="text-sm	">FrontEnd Website Berita Indonesia</span>
          <div className="flex flex-row gap-1  mt-2 w-full">
            <img src={react} alt="" className="object-contain w-6" />
            <img src={tailwindcss} alt="" className="object-contain w-6" />
          </div>
          <button className="text-white text-base px-3 py-1 bg-[#707070] absolute  top-0 right-0 rounded-sm">
            <BiLinkExternal />
          </button>
        </div>
      </div>

      <div className="flex flex-col  p-2 gap-3 rounded-lg relative">
        <img
          src={mindes}
          alt=""
          className="h-[250px] min-w-[190px] rounded-lg object-cover object-top"
        />
        <div className="flex flex-col text-white absolute bottom-0 backdrop-blur-sm p-3 bg-[#1e1e1e86]">
          {" "}
          <h5 className="text-2xl">Mindes</h5>
          <span className="text-sm	">FrontEnd pengelola administrasi desa</span>
          <div className="flex flex-row gap-1  mt-2 w-full">
            <img src={react} alt="" className="object-contain w-6" />
            <img src={tailwindcss} alt="" className="object-contain w-6" />
          </div>
          <button className="text-white text-base px-3 py-1 bg-[#707070] absolute  top-0 right-0 rounded-sm">
            <BiLinkExternal />
          </button>
        </div>
      </div>

      <div className="flex flex-col  p-2 gap-3 rounded-lg relative">
        <img
          src={belanjamudah}
          alt=""
          className="h-[250px] min-w-[190px] rounded-lg object-cover object-top"
        />
        <div className="flex flex-col text-white absolute bottom-0 backdrop-blur-sm p-3 bg-[#1e1e1e86]">
          {" "}
          <h5 className="text-2xl">Belanja Mudah</h5>
          <span className="text-sm	">Website Belanja Sayur-sayuran</span>
          <div className="flex flex-row gap-1  mt-2 w-full">
            <img src={ci} alt="" className="object-contain w-6" />
            <img src={html} alt="" className="object-contain w-6" />
            <img src={css} alt="" className="object-contain w-6" />
            <img src={bootstrap} alt="" className="object-contain w-6" />
          </div>
          <button className="text-white text-base px-3 py-1 bg-[#707070] absolute  top-0 right-0 rounded-sm">
            <BiLinkExternal />
          </button>
        </div>
      </div>

      <div className="flex flex-col  p-2 gap-3 rounded-lg relative">
        <img
          src={mbkm}
          alt=""
          className="h-[250px] min-w-[190px] rounded-lg object-cover object-top"
        />
        <div className="flex flex-col text-white absolute bottom-0 backdrop-blur-sm p-3 bg-[#1e1e1e86]">
          <h5 className="text-2xl">MBKM Unikama</h5>
          <span className="text-sm	">Website Monitoring kampus UNIKAMA</span>
          <div className="flex flex-row gap-1  mt-2 w-full">
            <img src={html} alt="" className="object-contain w-6" />
            <img src={css} alt="" className="object-contain w-6" />
            <img src={laravel} alt="" className="object-contain w-6" />
          </div>
          <button className="text-white text-base px-3 py-1 bg-[#707070] absolute  top-0 right-0 rounded-sm">
            <BiLinkExternal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPortofolio;
