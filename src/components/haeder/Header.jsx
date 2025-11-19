import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    //  <nav class="w-full h-20 bg-indigo-200 flex justify-between px-4 items-center "></nav>

    <header class="w-full h-20 flex  px-4 items-center justify-between   bg-white shadow sticky z-50 top-0 ">
      <div class="">
        <lable class="flex items-center justify-center font-bold w-2xs h-15  rounded-xl   text-black [text-shadow:0_0_15px] text-2xl  ">
          BRANDCAREMEDIA{" "}
        </lable>
      </div>

      <ul class="hidden  md:flex     font-medium lg:lg:space-x-8 lg:mt-0 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-pink-700" : "text-grey-700"
              } border-b border-grey-100 hover:bg-grey-50 lg;hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700 " : "text-grey-700"
              } border-b-4 border-grey-100 hover:bg-grey-500 lg;hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            AboutUs{" "}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Profile"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-grey-700"
              } border-b border-grey-100 hover:bg-grey-50 lg;hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Portfolo{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Ourservice"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-grey-700"
              } border-b border-grey-100 hover:bg-grey-50 lg;hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Our Services{" "}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Contact-Us"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-grey-700"
              } border-b border-grey-100 hover:bg-grey-50 lg;hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            contact Us{" "}
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
