import React from "react";
import bcm_logo from "../../assets/BMCLOGO.png";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  const number = "9315657003";
  const email = "varshasihan4@gmail.com";
  const phn = "https://wa.me/9315657003";

  return (
    <header className="w-full h-30 px-4 flex items-center justify-between bg-white shadow sticky z-50 top-0 ">
      {/* <div class=" w-40 border-1 border-black  bg-sky-600 text-center rounded-xl  md:w-2xs h-20 "> */}
      <img
        className="mt-2 w-40 object-cover rounded-xl md:w-2xs h-27  "
        src={bcm_logo}
        alt=""
      />
      {/* <lable class="flex items-center justify-center font-bold h-2  rounded-xl  mt-7  text-white [text-shadow:0_0_15px] text-2xl  ">
          BMC{" "}
        </lable>
        <h1 className=" py-0 text-white">Brands Care Media</h1> */}
      {/* </div> */}

      <ul class="hidden md:flex font-medium lg:space-x-8 lg:mt-0">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-grey-700"
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
      <div className="  mt-2">
        <a
          href="mailto:varshasihan4@gmail.com"
          className=" underline text-sm text-black-600 font-bold md:text-2xl hover:text-orange-600"
        >
          {email}
        </a>
        <a
          href="tel:+9315657003"
          className="underline flex text-sm text-black-600 font-bold  md:text-2xl hover:text-orange-600"
        >
          <span className=" text-orange-500 animate-pulse">
            <FaPhoneAlt />
          </span>
          {number}
        </a>
      </div>
      <div className=" absolute left-0 mt-8 flex flex-col md:flex-col gap-4 justify-center items-center  top-[170px] ">
        <motion.a
          href="https://www.instagram.com/brandscaremedia?igsh=MXduMW5kcXZ4d3d5ZA=="
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center  gap-2 text-4xl animate-pulse text-pink-600    hover:bg-pink-600 hover:text-white px-3 py-3 rounded-full "
          // className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/brands-care-media-91208b397?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-4xl animate-pulse  text-blue-600 hover:text-white  hover:bg-blue-600 px-3 py-3 rounded-full  transition-colors"
          // className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/share/1C7jkjSapM/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-4xl animate-pulse hover:text-white hover:bg-blue-700 text-blue-500 px-3 py-3 rounded-full   transition-colors"
          // className="hover:text-blue-700 transition-colors"
        >
          <FaFacebook />
        </motion.a>

        <motion.a
          href={phn}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-4xl animate-pulse hover:text-white hover:bg-green-500 text-green-500 px-3 py-3 rounded-full   transition-colors"
        >
          <FaWhatsapp />
        </motion.a>
      </div>
    </header>
  );
}

export default Header;
