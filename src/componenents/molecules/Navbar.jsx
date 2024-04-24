import React from "react";
import { Link, useLocation } from "react-router-dom";
import contact from "../../assets/contact.svg";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [active, setActive] = React.useState(false);
  console.log(active);

  return (
    <div className="w-[190vh] mx-auto flex flex-row justify-between navbar z-50 fixed px-5 py-7">
      <div
        className={`md:bg-white mx-auto shadow-xl md:border rounded-md md:px-3 md:py-3 flex flex-col md:flex-col gap-2 w-max fixed top-4 left-4 xl:left-28`}
      >
        <div
          className={`md:hidden flex text-xl w-[40px] h-[40px] justify-center items-center bg-white rounded-md`}
          onClick={() => setActive(!active)}
        >
          X
        </div>
        <ul
          className={` md:flex font-semibold text-[#2a2a2a] ${
            active ? "flex bg-white rounded-md py-2 px-2 gap-2" : "hidden"
          } flex-col md:flex-row md:gap-4`}
        >
          <li>
            <Link
              to="/"
              key="home"
              className={
                pathname === "/"
                  ? "bg-[#E9993C] px-4 py-2  rounded-md font-semibold text-[#2a2a2a]"
                  : "px-4 "
              }
            >
              Me
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              key="about"
              className={
                pathname === "/about"
                  ? "bg-[#E9993C] px-4 py-2 rounded-md font-semibold text-[#2a2a2a]"
                  : "px-4 "
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portofolio"
              className={
                pathname === "/portofolio"
                  ? "bg-[#E9993C] px-4 py-2 rounded-md font-semibold text-[#2a2a2a]"
                  : "px-4 "
              }
            >
              Portofolio
            </Link>
          </li>
        </ul>
      </div>
      <button className="bg-[#E3E3E3] text-[#2C2C2C] px-4 py-2 rounded-lg flex flex-row justify-center items-center gap-2 top-4 right-4 xl:right-28 fixed">
        <img src={contact} alt="" />
        <span className="hidden md:contents">Contact Me</span>
      </button>
    </div>
  );
};

export default Navbar;
