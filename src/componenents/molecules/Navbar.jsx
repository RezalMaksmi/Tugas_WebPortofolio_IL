import React from "react";
import { Link, useLocation } from "react-router-dom";
import contact from "../../assets/contact.svg";
import { BiHome, BiMenu, BiRocket, BiUser, BiX } from "react-icons/bi";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [active, setActive] = React.useState(true);
  console.log(active);

  return (
    <div className="flex justify-center">
      <div className="w-[190vh] mx-auto flex flex-row justify-between  z-50 fixed px-5 py-7 h-auto   ">
        <div
          className={`md:bg-white mx-auto shadow-xl md:border rounded-md md:px-3 md:py-3 flex flex-col md:flex-col gap-2 w-max fixed md:top-4 left-4 md:right-auto right-[-80%] top-[50%] xl:left-28`}
        >
          <div
            className={`md:hidden flex text-xl w-[50px] h-[50px] justify-center items-center bg-[#ffffff5c] backdrop-blur-md rounded-md`}
            onClick={() => setActive(!active)}
          >
            {active ? (
              <BiMenu className="text-2xl" />
            ) : (
              <BiX className="text-2xl" />
            )}
          </div>
          <ul
            className={` md:flex font-semibold text-[#2a2a2a] ${
              active
                ? "flex bg-[#b6b6b672] rounded-md gap-2 backdrop-blur-md	"
                : "hidden"
            } flex-col md:flex-row md:gap-4 md:p-0 p-[3px]`}
          >
            <li>
              <Link
                to="/"
                key="home"
                className={`flex flex-row md:px-3 md:py-1 p-3
                  ${
                    pathname === "/"
                      ? "md:bg-none bg-[#E9993C]   rounded-md font-semibold text-[#2a2a2a]"
                      : ""
                  }
                `}
              >
                <BiHome className="md:hidden flex text-xl" />
                <div className="md:flex hidden">Me</div>
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                key="about"
                className={`flex flex-row md:px-3 md:py-1 p-3
                  ${
                    pathname === "/about"
                      ? "md:bg-none bg-[#E9993C]   rounded-md font-semibold text-[#2a2a2a]"
                      : " "
                  }
                `}
              >
                <BiUser className="md:hidden flex text-xl" />
                <div className="md:flex hidden">About</div>
              </Link>
            </li>
            <li>
              <Link
                to="/portofolio"
                className={`flex flex-row md:px-3 md:py-1 p-3
                  ${
                    pathname === "/portofolio"
                      ? "md:bg-none bg-[#E9993C]   rounded-md font-semibold text-[#2a2a2a]"
                      : " "
                  }
                `}
              >
                <BiRocket className="md:hidden flex text-xl" />
                <div className="md:flex hidden">Portofolio</div>
              </Link>
            </li>
          </ul>
        </div>
        <button className="bg-[#E3E3E3] text-[#2C2C2C] px-4 py-2 rounded-lg flex flex-row justify-center items-center gap-2 top-4 right-4 xl:right-28 fixed">
          <img src={contact} alt="" />
          <span className="hidden md:contents">Contact Me</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
