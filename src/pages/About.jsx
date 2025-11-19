import React from "react";
import { motion } from "framer-motion"
import {useEffect} from "react"

function About() {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const teamMembers = [
    {
      name: "varsha_1",
      role: "Founder & CEO",
      bio: "Strategist & visionary focused on data-driven brand growth.",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "varsha_2",
      role: "Creative Director",
      bio: "Designs brand visuals that engage and convert.",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "varsha_3",
      role: "Growth Manager",
      bio: "Leads campaigns for measurable performance and ROI.",
      img: "https://via.placeholder.com/150",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };
  return (
    <>
   
      
      <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            We Don’t Just Run Campaigns — We Build Brands that Last
          </h1>
          <p className="text-gray-600 text-lg">
            Brands Care Media was founded on one belief —{" "}
            <span className="font-semibold">
              real marketing starts with care.
            </span>{" "}
            We blend creativity, data, and human psychology to help brands grow
            ethically, sustainably, and profitably.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {[
            {
              title: "Our Mission",
              desc: "To help brands achieve long-term digital success through transparency, innovation, and measurable performance.",
            },
            {
              title: "Our Vision",
              desc: "To be India’s most trusted digital growth partner — where creativity meets accountability.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Transparency",
                desc: "No hidden results. No inflated reports.",
              },
              { title: "Care", desc: "We treat every brand like our own." },
              { title: "Performance", desc: "Every idea must show numbers." },
              {
                title: "Innovation",
                desc: "Always one step ahead of the trend.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 1}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Meet the Minds Behind the Magic
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 1}
              >
                {/* <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                /> */}
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            💡 Let’s Build Your Brand Story Together
          </h2>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            🚀 Book Your Free Strategy Call
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default About;
