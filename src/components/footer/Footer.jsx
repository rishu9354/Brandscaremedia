import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaServicestack,
  FaBriefcase,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className=" md:block bg-gray-900 text-gray-200 py-12">
        <div className="hidden  md:flex container mx-auto px-6 md:px-12  flex-col md:flex-row justify-between gap-10">
          {/* Brand & Tagline */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">
              Brands Care Media
            </h2>
            <p className="text-gray-400 max-w-xs">
              Strategy. Care. Growth. Guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="  md:flex-1">
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  AboutUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Profile"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Ourservice"
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact-Us"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.instagram.com/brandscaremedia?igsh=MXduMW5kcXZ4d3d5ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/brands-care-media-91208b397?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/share/1C7jkjSapM/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                {" "}
                <FaFacebook />{" "}
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors"
              >
                <FaYoutube />{" "}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="hidden  md:flex mt-12 border-t border-gray-800 pt-6 text-center justify-center  text-gray-500 text-sm">
          © 2025 Brands Care Media. All Rights Reserved.
        </div>
      </footer>
      <footer className="bg-gray-900  fixed bottom-0 left-0 right-0   text-gray-200 py-7  md:hidden">
        <ul className="flex justify-center  gap-3 bg-violet-80 md:hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive
                    ? "text-pink-700 rounded-3xl animate-bounce"
                    : "text-grey-700"
                } border-b-4   lg;hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <FaHome />{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive
                    ? "text-orange-700 rounded-3xl animate-bounce "
                    : "text-grey-700"
                } border-b-4   lg;hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <FaInfoCircle />{" "}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Profile"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive
                    ? "text-orange-700 rounded-3xl animate-bounce"
                    : "text-grey-700"
                } border-b-4  hover: lg;hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <FaBriefcase />{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Ourservice"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive
                    ? "text-orange-700 rounded-3xl animate-bounce"
                    : "text-grey-700"
                } border-b-4  hover:lg;hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <FaServicestack />{" "}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contact-Us"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive
                    ? "text-orange-700 rounded-3xl animate-bounce"
                    : "text-grey-700"
                } border-b-4  hover:lg;hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              <FaPhoneAlt />{" "}
            </NavLink>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
