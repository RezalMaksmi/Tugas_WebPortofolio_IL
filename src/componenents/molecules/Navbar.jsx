import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [active, setActive] = React.useState(true);
  console.log(active);

  return (
    <div className="w-[190vh] mx-auto flex flex-row justify-between navbar z-50 fixed px-5 py-7">
      <div
        className={`md:bg-white mx-auto shadow-xl md:border rounded-md md:px-5 md:py-3 flex flex-col md:flex-col gap-4 w-max fixed top-4 left-4 xl:left-28`}
      >
        <div
          className={`md:hidden flex text-xl w-[40px] h-[40px] justify-center items-center bg-white rounded-md`}
          onClick={() => setActive(!active)}
        >
          X
        </div>
        <ul
          className={` md:flex  ${
            active ? "flex bg-white rounded-md py-2 px-2 gap-2" : "hidden"
          } flex-col md:flex-row md:gap-8`}
        >
          <li>
            <Link
              to="/"
              key="home"
              className={
                pathname === "/"
                  ? "text-orange-500 px-3"
                  : "w-full max-[1000px]:px-3 "
              }
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              key="about"
              className={
                pathname === "/about"
                  ? "text-orange-500 px-3 "
                  : "w-full max-[1000px]:px-3 "
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
                  ? "text-orange-500 px-3 "
                  : "w-full max-[1000px]:px-3 "
              }
            >
              Portofolio
            </Link>
          </li>
        </ul>
      </div>
      <button className="bg-[#E3E3E3] text-[#2C2C2C] px-4 py-2 rounded-lg flex flex-row justify-center items-center gap-2 top-4 right-4 xl:right-28 fixed">
        <img src="../src/assets/contact.svg" alt="" />
        <span className="hidden md:contents">Contact Me</span>
      </button>
    </div>
  );
};

export default Navbar;
