import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { useState, useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    goal: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here (API call or email service)
    alert("Your strategy request has been sent!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      brand: "",
      goal: "",
      message: "",
    });
  };
  return (
    <>
      <div className="min-h-screen  bg-gray-50 py-16 px-6 md:px-20">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Let’s Build the Next Big Digital Success Story — Yours
          </h1>
          <p className="text-gray-600 text-lg">
            We’ll analyze your brand, goals, and challenges — and send a custom
            360° strategy roadmap within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                required
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                required
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Brand Name / Industry"
                className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Your Goal*</option>
              <option value="Lead Generation">Lead Generation</option>
              <option value="ORM">ORM</option>
              <option value="Full Marketing">Full Marketing</option>
              <option value="Others">Others</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              ✉️ Send My Strategy Now
            </button>
          </form>

          {/* Optional Contact Options */}
          <div className="mt-8 flex flex-col md:flex-col gap-4 justify-center items-center ">
            <motion.a
              href="https://wa.me/9999719665"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2  bg-green-500 text-white px-5 py-3 rounded-full md hover:bg-green-600  transition-colors"
            >
              <FaWhatsapp /> Chat With a Strategist Instantly
            </motion.a>

            <motion.a
              href="https://www.instagram.com/brandscaremedia?igsh=MXduMW5kcXZ4d3d5ZA=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-full md hover:bg-pink-600 transition-colors"
              // className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram /> Join me on Insta
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/brands-care-media-91208b397?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-full md hover:bg-blue-600 transition-colors"
              // className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin /> join me on linkedin
            </motion.a>
            <motion.a
              href="https://www.facebook.com/share/1C7jkjSapM/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-700 text-white px-5 py-3 rounded-full  mdhover:bg-blue-800 transition-colors"
              // className="hover:text-blue-700 transition-colors"
            >
              <FaFacebook /> join me on Facebook
            </motion.a>

            <a
              href="https://calendly.com/yourbrand"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-full md hover:bg-gray-900 transition-colors"
            >
              📅 Book a Free Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
