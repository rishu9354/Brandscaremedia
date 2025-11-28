import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaRocket, FaHandHoldingHeart, FaChartLine, FaLightbulb } from "react-icons/fa";
import { useEffect } from "react";
import bgimg from "../../src/assets/sm.jpg";
import grow from "../../src/assets/Growth.svg";
import launch from "../../src/assets/Launch.svg";
import bio1 from "../../src/assets/bio1.png";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = useMemo(
    () => [
      {
        name: "Chandramani Singh",
        role: "Founder & Chief Growth Strategist",
        bio1: [
          "Visionary founder known for innovative digital branding and result-driven marketing strategies.",
          "Expertise spans across digital strategy, brand positioning, viral content marketing, and high-performance ad campaigns.",
          "Believes in blending creativity with analytics — turning ideas into digital experiences that customers remember."
        ],
        linkdin:
          "https://www.linkedin.com/in/chandramani-singh-4b8566286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Varsha",
        role: "Founder & Creative Director",
        bio1: [
          "The creative powerhouse leading content innovation, brand storytelling, and design direction.",
          "Expertise lies in visual branding, content design, and creating attention-grabbing digital experiences.",
          "Focuses on developing fresh, viral-ready content strategies that help clients stand out."
        ],
        linkdin:
          "https://www.linkedin.com/in/varsha-sihan-9a363126a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
    []
  );

  // add by : Rishabh
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

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
      <div className=" min-h-screen bg-zinc-300 py-16 px-6 md:px-20 ">
        <div
          className=" absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: ` url(${bgimg})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="bg-gradient-to-tr from-orange-600 to-blue-900   rounded-xl text-4xl font-bold text-black mb-4">
            We Don’t Just Run Campaigns —
            <span className="text-white"> We Build Brands that Last</span>
          </h1>
          <p className="text-gray-950 text-lg hover:text-gray-950 hover:border-b-4 hover:border-white  hover:rounded-2xl">
            Brands Care Media was founded on one belief —{" "}
            <span className="font-semibold">
              real marketing starts with care.
            </span>{" "}
            We blend creativity, data, and human psychology to help brands grow
            ethically, sustainably, and profitably.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12  rounded-xl ">
          <img src={grow} alt="" />
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
              className="bg-orange-400 p-9  rounded-s-full rounded-tr-full shadow-lg  "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              custom={index + 1}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                    <img src={grow} className="w-8 h-8" alt="Mission" /> 
                </div>
            <h2 className="text-3xl font-bold text-slate-800">
                {item.title}
              </h2>
              </div>
             
              <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-orange-100 rounded-full mb-4">
          <img className=" mx-auto  " src={launch} alt="" />
          </motion.div>

          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Our Core Values
          </h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}>
               {[
              { title: "Transparency", desc: "No hidden results. No inflated reports.", icon: <FaChartLine /> },
              { title: "Care", desc: "We treat every brand like our own.", icon: <FaHandHoldingHeart /> },
              { title: "Performance", desc: "Every idea must show real numbers.", icon: <FaRocket /> },
              { title: "Innovation", desc: "Always one step ahead of the trend.", icon: <FaLightbulb /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-t from-orange-600 to-blue-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 1}
              >
                <div className="text-4xl text-slate-200 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-100 ">{item.desc}</p>
              </motion.div>
            ))}

          </motion.div>
        </div>

        {/* Team Section */}
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">Meet the Minds</h2>
            <p className="text-slate-500 mt-2">The visionaries behind the magic</p>
      
          <div className="  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
            <motion.div
                key={index}
                className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                {/* Decorative Background for Card */}
                <div className="h-32 bg-gradient-to-r from-indigo-900 to-indigo-700 relative">
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="px-8 pb-8 -mt-12 relative z-10">
                  <div className="bg-white p-2 rounded-2xl shadow-sm inline-block mb-4">
                     {/* Placeholder for Profile Pic if you have one, else just use the structure */}
                     <div className="h-20 w-20 bg-orange-500 rounded-xl flex items-center justify-center text-white text-3xl font-bold">
                        {member.name.charAt(0)}
                     </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-4">{member.role}</p>
                  
                  <div className="space-y-3 mb-6">
                    {member.bio1.map((line, i) => (
                        <p key={i} className="text-slate-600 text-sm leading-relaxed">
                            <span className="text-orange-500 mr-2">➜</span> {line}
                        </p>
                    ))}
                  </div>

                  <a
                    href={member.linkdin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-50 text-blue-700 font-semibold border border-slate-200 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin size={20} />
                    Connect on LinkedIn
                  </a>
                </div>
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
        ></motion.div>
      </div>
    </>
  );
}

export default About;